import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  notes?: string;
  phone?: string;
  company?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("🌐 === EDGE FUNCTION START ===");
  console.log("📥 Request method:", req.method);
  console.log("📍 Request URL:", req.url);
  console.log("⏰ Timestamp:", new Date().toISOString());
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("✅ CORS: Handling preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  // === PHASE 1: API KEY CHECK ===
  console.log("🔑 === PHASE 1: API KEY VALIDATION ===");
  let resendApiKey: string | undefined;
  
  try {
    resendApiKey = Deno.env.get("RESEND_API_KEY");
    console.log("🔍 Checking RESEND_API_KEY availability...");
    
    if (!resendApiKey) {
      console.error("❌ PHASE 1 FAILED: RESEND_API_KEY not found in environment");
      console.error("🔍 Available env vars:", Object.keys(Deno.env.toObject()));
      
      return new Response(JSON.stringify({
        success: false,
        error: "RESEND_API_KEY not configured in environment",
        phase: "api-key-check",
        timestamp: new Date().toISOString()
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    
    console.log("✅ PHASE 1 SUCCESS: API key found");
    console.log("🔧 API key length:", resendApiKey.length);
    console.log("🔧 API key prefix:", resendApiKey.substring(0, 8) + "...");
    
  } catch (error) {
    console.error("❌ PHASE 1 FAILED: Error accessing environment:", error);
    
    return new Response(JSON.stringify({
      success: false,
      error: "Failed to access environment variables",
      phase: "api-key-check",
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }

  // === PHASE 2: REQUEST PARSING ===
  console.log("📝 === PHASE 2: REQUEST PARSING ===");
  let contactData: ContactEmailRequest;
  
  try {
    console.log("📥 Parsing request body...");
    contactData = await req.json();
    console.log("✅ PHASE 2 SUCCESS: Request body parsed");
    console.log("📋 Received contact data:", JSON.stringify(contactData, null, 2));
    
  } catch (parseError) {
    console.error("❌ PHASE 2 FAILED: JSON parsing error:", parseError);
    
    return new Response(JSON.stringify({
      success: false,
      error: "Invalid JSON in request body",
      phase: "request-parsing",
      details: parseError.message,
      timestamp: new Date().toISOString()
    }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }

  // === PHASE 3: DATA VALIDATION ===
  console.log("🔍 === PHASE 3: DATA VALIDATION ===");
  
  try {
    console.log("🔍 Validating required fields...");
    
    const missingFields = [];
    if (!contactData.name) missingFields.push("name");
    if (!contactData.email) missingFields.push("email");
    
    if (missingFields.length > 0) {
      console.error("❌ PHASE 3 FAILED: Missing required fields:", missingFields);
      console.error("📊 Field status:", {
        name: contactData.name ? "✅ PROVIDED" : "❌ MISSING",
        email: contactData.email ? "✅ PROVIDED" : "❌ MISSING",
        phone: contactData.phone ? "✅ PROVIDED" : "⚪ OPTIONAL",
        company: contactData.company ? "✅ PROVIDED" : "⚪ OPTIONAL",
        notes: contactData.notes ? "✅ PROVIDED" : "⚪ OPTIONAL"
      });
      
      return new Response(JSON.stringify({
        success: false,
        error: `Missing required fields: ${missingFields.join(", ")}`,
        phase: "data-validation",
        missingFields,
        timestamp: new Date().toISOString()
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    
    console.log("✅ PHASE 3 SUCCESS: All required fields validated");
    
  } catch (error) {
    console.error("❌ PHASE 3 FAILED: Validation error:", error);
    
    return new Response(JSON.stringify({
      success: false,
      error: "Data validation failed",
      phase: "data-validation",
      details: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }

  // === PHASE 4: RESEND CLIENT INITIALIZATION ===
  console.log("🔧 === PHASE 4: RESEND CLIENT SETUP ===");
  let resend: Resend;
  
  try {
    console.log("🔧 Initializing Resend client...");
    resend = new Resend(resendApiKey);
    console.log("✅ PHASE 4 SUCCESS: Resend client initialized");
    
  } catch (error) {
    console.error("❌ PHASE 4 FAILED: Resend initialization error:", error);
    
    return new Response(JSON.stringify({
      success: false,
      error: "Failed to initialize email service",
      phase: "resend-initialization",
      details: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }

  // === PHASE 5: EMAIL CONTENT PREPARATION ===
  console.log("📧 === PHASE 5: EMAIL CONTENT PREPARATION ===");
  let emailContent: any;
  
  try {
    console.log("📝 Preparing email content...");
    
    emailContent = {
      from: "Contact Form <onboarding@resend.dev>",
      to: ["your@email.com"],
      subject: `New Contact from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #555;">Contact Details</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
            ${contactData.company ? `<p><strong>Company:</strong> ${contactData.company}</p>` : ''}
          </div>
          
          ${contactData.notes ? `
            <div style="background: #fff; padding: 20px; border-left: 4px solid #007cba; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #555;">Message</h3>
              <p style="white-space: pre-wrap;">${contactData.notes}</p>
            </div>
          ` : ''}
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 14px;">
            <em>This email was sent from your website contact form at ${new Date().toLocaleString()}.</em>
          </p>
        </div>
      `,
    };

    console.log("📤 Email configuration prepared:");
    console.log("  From:", emailContent.from);
    console.log("  To:", emailContent.to);
    console.log("  Subject:", emailContent.subject);
    console.log("  HTML length:", emailContent.html.length);
    console.log("✅ PHASE 5 SUCCESS: Email content prepared");
    
  } catch (error) {
    console.error("❌ PHASE 5 FAILED: Email content preparation error:", error);
    
    return new Response(JSON.stringify({
      success: false,
      error: "Failed to prepare email content",
      phase: "email-preparation",
      details: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }

  // === PHASE 6: EMAIL SENDING ===
  console.log("🚀 === PHASE 6: EMAIL SENDING ===");
  let emailResponse: any;
  
  try {
    console.log("📤 Sending email via Resend...");
    console.log("⏳ Email send started at:", new Date().toISOString());
    
    emailResponse = await resend.emails.send(emailContent);
    
    console.log("⏰ Email send completed at:", new Date().toISOString());
    console.log("✅ PHASE 6 SUCCESS: Email sent successfully");
    console.log("📧 Resend response:", JSON.stringify(emailResponse, null, 2));
    
    // Check if Resend returned an error in the response
    if (emailResponse.error) {
      console.error("❌ PHASE 6 FAILED: Resend returned error in response:", emailResponse.error);
      
      return new Response(JSON.stringify({
        success: false,
        error: "Email service returned error",
        phase: "email-sending",
        details: emailResponse.error,
        timestamp: new Date().toISOString()
      }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
    
  } catch (sendError: any) {
    console.error("❌ PHASE 6 FAILED: Email sending error:", sendError);
    console.error("🔍 Send error details:", {
      message: sendError.message,
      stack: sendError.stack,
      name: sendError.name,
      cause: sendError.cause
    });
    
    return new Response(JSON.stringify({
      success: false,
      error: "Failed to send email",
      phase: "email-sending",
      details: {
        message: sendError.message,
        name: sendError.name
      },
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders }
    });
  }

  // === SUCCESS RESPONSE ===
  console.log("🎉 === ALL PHASES COMPLETED SUCCESSFULLY ===");
  
  const successResponse = { 
    success: true, 
    message: "Contact form submitted and email sent successfully",
    emailId: emailResponse.data?.id,
    phase: "completed",
    timestamp: new Date().toISOString(),
    details: {
      contactName: contactData.name,
      contactEmail: contactData.email,
      emailSentTo: emailContent.to
    }
  };
  
  console.log("📤 Returning success response:", JSON.stringify(successResponse, null, 2));
  console.log("🏁 === EDGE FUNCTION END ===");

  return new Response(JSON.stringify(successResponse), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
};

serve(handler);