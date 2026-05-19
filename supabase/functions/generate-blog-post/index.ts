import { createClient } from "https://esm.sh/@supabase/supabase-js@2.100.1";
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const categories = [
  "Brand Identity",
  "Web Design",
  "UX Design",
  "AI-Powered Creative",
  "Microsoft Power Automate",
  "AI Agents with Microsoft 365 Copilot",
  "Marketing Automation",
  "Graphic Design",
  "Catalog & Print Design",
  "Technical Marketing & Analytics",
  "Email Marketing Automation",
  "Product Launch Content & Collateral",
  "AI Brain Development for Small Business",
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY")!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get existing posts to avoid duplicate categories in a row
    const { data: recentPosts } = await supabase
      .from("blog_posts")
      .select("category")
      .order("created_at", { ascending: false })
      .limit(3);

    const recentCategories = (recentPosts || []).map((p: any) => p.category);
    const availableCategories = categories.filter(
      (c) => !recentCategories.includes(c)
    );
    const category =
      availableCategories[Math.floor(Math.random() * availableCategories.length)] ||
      categories[Math.floor(Math.random() * categories.length)];

    // Generate blog post with AI
    const aiResponse = await fetch(
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
              content: `You are an expert SEO content writer for Visual Smash, a web design & marketing agency based in Stockton, California serving the Central Valley and San Francisco Bay Area. Write SEO-optimized long-form blog posts that rank for local search terms like "web design agency Stockton CA", "marketing agency Stockton CA", "creative agency Stockton", "web designer Stockton", and related Central Valley / Bay Area variants. Naturally weave Stockton, Lodi, Tracy, Modesto, Manteca, San Joaquin County, Central Valley, and Bay Area mentions where genuinely relevant. Use bold subheadings with **markdown bold**, a confident knowledgeable tone, and 2400-3600 words. Include real-world examples, actionable frameworks, data points, case study references, and strategic recommendations. Return ONLY valid JSON with no markdown code fences.`,
            },
            {
              role: "user",
              content: `Write an in-depth, comprehensive blog post about "${category}" for a premium creative agency blog.

Return a JSON object with these exact fields:
{
  "title": "SEO-optimized title under 70 chars",
  "excerpt": "Compelling meta description under 160 chars that includes the main keyword",
  "content": "Full long-form article (2400-3600 words) with **bold subheadings**, multiple paragraphs separated by double newlines. At least 8-10 sections. Include real-world examples, actionable frameworks, numbered lists, data points, expert insights, case study references, strategic recommendations, common mistakes to avoid, and a strong conclusion with next steps.",
  "readTime": "X min"
}

Make the title compelling and keyword-rich. The content should provide genuine strategic value, not generic advice. Include 2026 trends and data points. Write like a thought leader with 20+ years of experience. Cover the topic exhaustively—this should be the definitive resource on this subject.`,
            },
          ],
          response_format: { type: "json_object" },
        }),
      }
    );

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      throw new Error(`AI API error: ${aiResponse.status} - ${errText}`);
    }

    const aiData = await aiResponse.json();
    const postData = JSON.parse(aiData.choices[0].message.content);

    // Create slug from title
    const slug = postData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 80);

    // Insert into database
    const { error: insertError } = await supabase.from("blog_posts").insert({
      slug,
      title: postData.title,
      excerpt: postData.excerpt,
      content: postData.content,
      category,
      read_time: postData.readTime || "8 min",
      featured: false,
    });

    if (insertError) {
      throw new Error(`Insert error: ${insertError.message}`);
    }

    return new Response(
      JSON.stringify({ success: true, slug, category, title: postData.title }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error generating blog post:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
