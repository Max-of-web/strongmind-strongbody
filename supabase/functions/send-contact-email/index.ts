import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend("re_99wxo7uU_HcR7pm1BtYvEqjC1Q7k3CygS");

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
  console.log("Edge function called, method:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling CORS preflight request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Parsing request body...");
    const contactData: ContactEmailRequest = await req.json();
    console.log("Received contact data:", contactData);

    console.log("Preparing to send email via Resend...");
    
    // Send email with dynamic contact info
    const emailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["admin@example.com"], // Replace with your admin email
      subject: `New Contact: ${contactData.name}`,
      html: `
        <h1>New Contact Submission</h1>
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        ${contactData.phone ? `<p><strong>Phone:</strong> ${contactData.phone}</p>` : ''}
        ${contactData.company ? `<p><strong>Company:</strong> ${contactData.company}</p>` : ''}
        ${contactData.notes ? `<p><strong>Notes:</strong></p><p>${contactData.notes}</p>` : ''}
        <hr>
        <p><em>This email was sent from your contact form.</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    const responseData = { 
      success: true, 
      message: "Email sent successfully",
      emailId: emailResponse.data?.id 
    };
    
    console.log("Returning success response:", responseData);

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    const errorResponse = { 
      success: false,
      error: error.message || "Failed to send email",
      details: error.stack
    };
    
    console.log("Returning error response:", errorResponse);
    
    return new Response(
      JSON.stringify(errorResponse),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);