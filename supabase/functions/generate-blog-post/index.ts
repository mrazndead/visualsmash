import { createClient } from "https://esm.sh/@supabase/supabase-js@2.100.1";
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const categories = [
  "Traffic Design",
  "Web Design",
  "Marketing",
  "Branding",
  "AI Software Development",
  "Graphic Design",
  "UX Design",
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
      "https://ai-gateway.lovable.dev/api/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${lovableApiKey}`,
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            {
              role: "system",
              content: `You are an expert content writer for Visual Smash, a high-end creative and marketing agency. Write SEO-optimized blog posts that are authoritative, insightful, and appeal to CMOs, brand directors, and creative leads. Use bold subheadings with **markdown bold**. Write in a confident, knowledgeable tone. The post should be 800-1200 words. Return ONLY valid JSON with no markdown code fences.`,
            },
            {
              role: "user",
              content: `Write a blog post about "${category}" for a premium creative agency blog.

Return a JSON object with these exact fields:
{
  "title": "SEO-optimized title under 70 chars",
  "excerpt": "Compelling meta description under 160 chars that includes the main keyword",
  "content": "Full article with **bold subheadings**, multiple paragraphs separated by double newlines. At least 4 sections.",
  "readTime": "X min"
}

Make the title compelling and keyword-rich. The content should provide genuine strategic value, not generic advice. Include current year trends and data points where relevant.`,
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
