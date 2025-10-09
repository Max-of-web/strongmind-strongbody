interface Message {
  role: "user" | "assistant";
  content: string;
}

interface StreamChatOptions {
  messages: Message[];
  sessionId: string;
  language: string;
  onDelta: (deltaText: string) => void;
  onDone: () => void;
  onError: (error: Error) => void;
}

export const streamChat = async ({
  messages,
  sessionId,
  language,
  onDelta,
  onDone,
  onError,
}: StreamChatOptions): Promise<void> => {
  try {
    // Fallback to hardcoded anon key if env variable is not available
    const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzYWRyc2ZndW1zb29vZHlkcmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1MTc1MTgsImV4cCI6MjA3MDA5MzUxOH0.yBy8vJajiXO9qi-P58gfK00iNfSp1SS1rKLK0qhieRw";
    
    console.log("Calling chat function with sessionId:", sessionId);
    
    const response = await fetch(
      "https://psadrsfgumsooodydrkw.supabase.co/functions/v1/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify({ messages, sessionId, language }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Chat API error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        headers: Object.fromEntries(response.headers.entries())
      });
      
      try {
        const errorData = JSON.parse(errorText);
        throw new Error(errorData.error || `HTTP ${response.status}`);
      } catch {
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
    }

    if (!response.body) {
      throw new Error("No response body");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let streamDone = false;

    while (!streamDone) {
      const { done, value } = await reader.read();
      if (done) break;

      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);

        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "") continue;
        if (!line.startsWith("data: ")) continue;

        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") {
          streamDone = true;
          break;
        }

        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) {
            onDelta(content);
          }
        } catch (parseError) {
          // Incomplete JSON, put it back
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }

    // Final flush
    if (textBuffer.trim()) {
      for (let raw of textBuffer.split("\n")) {
        if (!raw) continue;
        if (raw.endsWith("\r")) raw = raw.slice(0, -1);
        if (raw.startsWith(":") || raw.trim() === "") continue;
        if (!raw.startsWith("data: ")) continue;
        
        const jsonStr = raw.slice(6).trim();
        if (jsonStr === "[DONE]") continue;
        
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content as string | undefined;
          if (content) onDelta(content);
        } catch {
          // Ignore partial leftovers
        }
      }
    }

    onDone();
  } catch (error) {
    onError(error instanceof Error ? error : new Error("Unknown error"));
  }
};
