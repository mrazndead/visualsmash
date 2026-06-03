import { createClient } from "https://esm.sh/@supabase/supabase-js@2.100.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const pages = [
  { slug: "home", focus: "Stockton CA marketing agency, creative studio, web design & web development services" },
  { slug: "about", focus: "About Visual Smash — Stockton CA web design & marketing agency since 2004" },
  { slug: "use-cases", focus: "Stockton CA services: branding, UX, web design, AI creative, SEO, marketing automation" },
  { slug: "portfolio", focus: "Stockton CA web design portfolio, Central Valley & Bay Area client work" },
  { slug: "blog", focus: "Stockton CA marketing, web design & AI insights blog" },
  { slug: "contact", focus: "Contact Stockton CA marketing & web design agency Visual Smash" },
  { slug: "tech-stack", focus: "Stockton CA web development tech stack: React, Vite, Supabase, AI tooling" },
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY")!;
    const supabase = createClient(supabaseUrl, serviceKey);

    const results: Record<string, unknown> = {};

    for (const page of pages) {
      const aiResp = await fetch(
        "https://ai.gateway.lovable.dev/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${lovableApiKey}`,
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-lite",
            messages: [
              {
                role: "system",
                content:
                  "You are an elite local SEO strategist for Visual Smash, a web design & marketing agency in Stockton, California serving Stockton, Lodi, Tracy, Modesto, Manteca, Lathrop, Ripon, San Joaquin County, Central Valley, Sacramento and the SF Bay Area. Generate fresh trending long-tail SEO keywords and a meta description targeting 2026 search intent. Return ONLY valid JSON.",
              },
              {
                role: "user",
                content: `Page focus: ${page.focus}\n\nReturn JSON:\n{\n  "keywords": "60-90 unique long-tail keywords, comma-separated, mixing Stockton CA, Central Valley, San Joaquin County, Bay Area, and 'near me' variants. Include trending 2026 search phrases.",\n  "description": "Compelling meta description under 158 chars including 'Stockton, CA' and the page focus."\n}`,
              },
            ],
            response_format: { type: "json_object" },
          }),
        }
      );

      if (!aiResp.ok) {
        results[page.slug] = `ai_error_${aiResp.status}`;
        continue;
      }

      const aiData = await aiResp.json();
      const parsed = JSON.parse(aiData.choices[0].message.content);

      const { error } = await supabase
        .from("seo_dynamic_keywords")
        .upsert(
          {
            page: page.slug,
            keywords: parsed.keywords ?? "",
            description: parsed.description ?? null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "page" }
        );

      results[page.slug] = error ? `db_error: ${error.message}` : "ok";
    }

    return new Response(JSON.stringify({ success: true, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ error: (e as Error).message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});