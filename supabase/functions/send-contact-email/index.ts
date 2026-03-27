import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RECIPIENT_EMAIL = "visualsmash@gmail.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, budget, projectType, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate lengths
    if (name.length > 100 || email.length > 255 || message.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Input exceeds maximum length." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const htmlBody = `
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #0a0a0a; color: #f0efe9;">
        <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 20px; margin-bottom: 30px;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em;">
            New Project Inquiry
          </h1>
          <p style="margin: 8px 0 0; color: #8c8c8c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
            via Visual Smash Contact Form
          </p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; color: #8c8c8c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; font-size: 14px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; color: #8c8c8c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #3b82f6; text-decoration: none;">${escapeHtml(email)}</a></td>
          </tr>
          ${company ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; color: #8c8c8c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Company</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; font-size: 14px;">${escapeHtml(company)}</td>
          </tr>` : ""}
          ${projectType ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; color: #8c8c8c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Project Type</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; font-size: 14px;">${escapeHtml(projectType)}</td>
          </tr>` : ""}
          ${budget ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; color: #8c8c8c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Budget</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #242424; font-size: 14px;">${escapeHtml(budget)}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 12px 0; color: #8c8c8c; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
            <td style="padding: 12px 0; font-size: 14px; line-height: 1.6;">${escapeHtml(message).replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        
        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #242424;">
          <p style="margin: 0; color: #555; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">
            Visual Smash · Bay Area, CA
          </p>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Visual Smash <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `New Inquiry: ${projectType || "General"} — ${name}`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API error:", errorText);
      return new Response(
        JSON.stringify({ error: "Failed to send email." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
