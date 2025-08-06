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
  console.log("🌐 EDGE FUNCTION STARTED");
  console.log("📥 Request method:", req.method);
  console.log("📍 Request URL:", req.url);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("✅ CORS: Handling preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("🔑 STEP 1: Checking API key availability...");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("❌ STEP 1 FAILED: RESEND_API_KEY not found in environment");
      throw new Error("RESEND_API_KEY not configured");
    }
    
    console.log("✅ STEP 1 SUCCESS: API key found");
    console.log("🔧 Initializing Resend client...");
    
    const resend = new Resend(resendApiKey);
    console.log("✅ Resend client initialized successfully");

    console.log("📝 STEP 2: Parsing request body...");
    
    let contactData: ContactEmailRequest;
    try {
      contactData = await req.json();
      console.log("✅ STEP 2 SUCCESS: Request body parsed");
      console.log("📋 Received contact data:", contactData);
    } catch (parseError) {
      console.error("❌ STEP 2 FAILED: JSON parsing error:", parseError);
      throw new Error("Invalid JSON in request body");
    }

    // Validate required fields
    console.log("🔍 STEP 3: Validating required fields...");
    if (!contactData.name || !contactData.email) {
      console.error("❌ STEP 3 FAILED: Missing required fields");
      console.error("Missing fields:", {
        name: !contactData.name ? "MISSING" : "OK",
        email: !contactData.email ? "MISSING" : "OK"
      });
      throw new Error("Name and email are required");
    }
    console.log("✅ STEP 3 SUCCESS: Required fields validated");

    console.log("📧 STEP 4: Preparing email content...");
    
    const emailContent = {
      from: "Contact Form <onboarding@resend.dev>",
      to: ["admin@yourcompany.com"], // You can change this to your admin email
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
            <em>This email was sent from your website's contact form.</em>
          </p>
        </div>
      `,
    };

    console.log("📤 Email configuration:", {
      from: emailContent.from,
      to: emailContent.to,
      subject: emailContent.subject,
      hasHtml: !!emailContent.html
    });

    console.log("✅ STEP 4 SUCCESS: Email content prepared");

    console.log("🚀 STEP 5: Sending email via Resend...");
    
    let emailResponse;
    try {
      emailResponse = await resend.emails.send(emailContent);
      console.log("✅ STEP 5 SUCCESS: Email sent successfully");
      console.log("📧 Resend response:", emailResponse);
    } catch (sendError: any) {
      console.error("❌ STEP 5 FAILED: Email sending error:", sendError);
      console.error("🔍 Send error details:", {
        message: sendError.message,
        stack: sendError.stack,
        name: sendError.name
      });
      throw new Error(`Email sending failed: ${sendError.message}`);
    }

    console.log("🎉 SUCCESS: All steps completed successfully");
    
    const responseData = { 
      success: true, 
      message: "Contact form submitted and email sent successfully",
      emailId: emailResponse.data?.id,
      timestamp: new Date().toISOString()
    };
    
    console.log("📤 Returning success response:", responseData);

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("💥 EDGE FUNCTION ERROR: Something went wrong");
    console.error("🔍 Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      cause: error.cause
    });
    
    const errorResponse = { 
      success: false,
      error: error.message || "Unknown error occurred",
      timestamp: new Date().toISOString(),
      details: {
        name: error.name,
        message: error.message
      }
    };
    
    console.log("📤 Returning error response:", errorResponse);
    
    return new Response(
      JSON.stringify(errorResponse),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);