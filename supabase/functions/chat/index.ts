import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Message {
  role: "user" | "assistant";
  content: string;
}

const RATE_LIMIT = {
  MAX_MESSAGES_PER_CONVERSATION: 20,
  MAX_CONVERSATIONS_PER_SESSION: 5,
};

// PII masking patterns
const maskPII = (text: string): string => {
  return text
    .replace(/\b[\w.-]+@[\w.-]+\.\w{2,}\b/g, "[EMAIL]")
    .replace(/\b\d{9,}\b/g, "[PHONE]")
    .replace(/\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, "[CARD]");
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, sessionId, language = "lt" } = await req.json();
    
    console.log("Chat request received:", { sessionId, language, messageCount: messages?.length });

    if (!messages || !Array.isArray(messages)) {
      throw new Error("Invalid messages format");
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Check rate limits
    const { data: conversation } = await supabase
      .from("chat_conversations")
      .select("id, lead_captured")
      .eq("session_id", sessionId)
      .maybeSingle();

    const { count: messageCount } = await supabase
      .from("chat_messages")
      .select("*", { count: "exact", head: true })
      .eq("conversation_id", conversation?.id || "");

    if (messageCount && messageCount >= RATE_LIMIT.MAX_MESSAGES_PER_CONVERSATION) {
      return new Response(
        JSON.stringify({ 
          error: language === "lt" 
            ? "Per daug žinučių. Susisiekite tiesiogiai." 
            : "Too many messages. Please contact directly."
        }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create or update conversation
    let conversationId = conversation?.id;
    if (!conversationId) {
      const { data: newConv } = await supabase
        .from("chat_conversations")
        .insert({ session_id: sessionId, language })
        .select()
        .single();
      conversationId = newConv?.id;

      // Log chat_open event
      await supabase.from("chat_analytics").insert({
        event_type: "chat_open",
        conversation_id: conversationId,
        metadata: { language, session_id: sessionId },
      });
    }

    // Mask PII in user messages before sending to AI
    const maskedMessages = messages.map((msg: Message) => ({
      ...msg,
      content: msg.role === "user" ? maskPII(msg.content) : msg.content,
    }));

    // System prompt with coaching knowledge
    const systemPrompt = language === "lt" ? `
Tu esi draugiškas trenerio asistentas. Tavo vardas - AI Asistentas.

PAKETAI IR KAINOS:
- 1-on-1 treniruotė: €50 per sesiją
- Online + WhatsApp: €100/mėn (personalus planas, kasdienė parama)
- Reabilitacinis: €60 per sesiją (nugaros skausmai, po traumų)
- Mažos grupės: €160/mėn (iki 4 žmonių)
- Inner Shift: €150/mėn (3 mėn minimum, mąstymo ir įpročių transformacija)

TAVO UŽDUOTYS:
1. Atsakyk į DUK apie paketus, kainas, grafiką
2. Pasiūlyk tinkamą paketą pagal tikslus (svorio metimas → 1-on-1 arba Online, reabilitacija → Reabilitacinis)
3. Jei klientas nori užsisakyti arba susidomėjęs, paprašyk:
   - Vardo
   - El. pašto
   - Tikslų
   - Pageidaujamo laiko
4. Būk šiltas, motyvuojantis, profesionalus
5. Jei klausimas medicinininis arba per sudėtingas, pasiūlyk susisiekti tiesiogiai

Niekada neatsakyk į kitų sričių klausimus (programavimas, receptai, etc). Sutelk dėmesį į fitneso koučingą.
` : `
You are a friendly fitness coach assistant. Your name is AI Assistant.

PACKAGES & PRICING:
- 1-on-1 Training: €50 per session
- Online + WhatsApp: €100/month (personalized plan, daily support)
- Rehabilitation: €60 per session (back pain, post-injury)
- Small Group: €160/month (up to 4 people)
- Inner Shift: €150/month (3-month minimum, mindset & habits transformation)

YOUR TASKS:
1. Answer FAQs about packages, pricing, schedules
2. Recommend suitable package based on goals (weight loss → 1-on-1 or Online, rehab → Rehabilitation)
3. If client wants to book or is interested, collect:
   - Name
   - Email
   - Goals
   - Preferred schedule
4. Be warm, motivating, professional
5. If question is medical or too complex, suggest contacting directly

Never answer non-fitness questions (programming, recipes, etc). Focus on fitness coaching.
`;

    // Call Lovable AI Gateway
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...maskedMessages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: language === "lt" 
              ? "Per daug užklausų. Bandykite už minutės." 
              : "Too many requests. Try again in a minute."
          }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: language === "lt" 
              ? "Paslauga laikinai nepasiekiama." 
              : "Service temporarily unavailable."
          }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    // Store user message
    await supabase.from("chat_messages").insert({
      conversation_id: conversationId,
      role: "user",
      content: messages[messages.length - 1].content,
    });

    // Stream response back and collect full message
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();
    const encoder = new TextEncoder();
    let fullResponse = "";

    (async () => {
      try {
        const reader = response.body!.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n").filter((line) => line.trim() !== "");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  fullResponse += content;
                  await writer.write(encoder.encode(`data: ${data}\n\n`));
                }
              } catch (e) {
                console.error("Error parsing SSE data:", e);
              }
            }
          }
        }

        // Store assistant message
        await supabase.from("chat_messages").insert({
          conversation_id: conversationId,
          role: "assistant",
          content: fullResponse,
        });

        await writer.write(encoder.encode("data: [DONE]\n\n"));
        await writer.close();
      } catch (error) {
        console.error("Streaming error:", error);
        await writer.abort(error);
      }
    })();

    return new Response(stream.readable, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error" 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
