import { createClient } from "https://esm.sh/@supabase/supabase-js@2.100.1";

Deno.serve(async (req) => {
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" };
  if (req.method === "OPTIONS") return new Response("ok", { headers });

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: posts } = await supabase.from("blog_posts").select("*").order("published_at", { ascending: false });
    if (!posts || posts.length === 0) return new Response(JSON.stringify({ error: "No posts" }), { headers });

    const results: any[] = [];

    for (const post of posts) {
      // Skip if already expanded (over 3000 chars)
      if (post.content.length > 3000) {
        results.push({ slug: post.slug, status: "skipped", length: post.content.length });
        continue;
      }

      const aiResponse = await fetch("https://ai-gateway.lovable.dev/api/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${lovableApiKey}` },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: "You are an expert content writer for Visual Smash, a high-end creative agency. Write comprehensive, authoritative blog content. Return ONLY valid JSON." },
            { role: "user", content: `Expand this blog post into a comprehensive 2500-3500 word article. Current title: "${post.title}". Category: "${post.category}". Current content: "${post.content.substring(0, 500)}..."

Return JSON: {"content": "Full long-form article with **bold subheadings** and paragraphs separated by double newlines. 8-10 sections. Include real-world examples, actionable frameworks, data points, strategic recommendations, common pitfalls, and a conclusion with next steps. Write for CMOs and brand directors.", "readTime": "X min"}

Be specific, tactical, authoritative. Reference 2026 trends.` }
          ],
          response_format: { type: "json_object" }
        })
      });

      if (!aiResponse.ok) {
        results.push({ slug: post.slug, status: "ai_error", code: aiResponse.status });
        continue;
      }

      const aiData = await aiResponse.json();
      const parsed = JSON.parse(aiData.choices[0].message.content);

      const { error } = await supabase.from("blog_posts").update({
        content: parsed.content,
        read_time: parsed.readTime || "12 min"
      }).eq("id", post.id);

      results.push({ slug: post.slug, status: error ? "db_error" : "expanded", length: parsed.content.length });
    }

    return new Response(JSON.stringify({ success: true, results }), { headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { headers, status: 500 });
  }
});
