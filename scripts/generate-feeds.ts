import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

const SITE = "https://visualsmash.lovable.app";
const TITLE = "Visual Smash Blog";
const DESCRIPTION =
  "Web design, AI, branding, UX & marketing insights from Visual Smash — a Stockton, CA web design & marketing agency.";

const SUPABASE_URL = "https://wcpqizbedxmsshyomdrq.supabase.co";
const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjcHFpemJlZHhtc3NoeW9tZHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NzgzNDMsImV4cCI6MjA5MDE1NDM0M30.uhSXt7O8v2NiMjxnWo3WHqTBXy6zq-EBofjHs8V8gdI";

const escapeXml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

async function main() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, title, excerpt, category, published_at")
    .order("published_at", { ascending: false })
    .limit(50);

  const list = posts ?? [];

  // RSS
  const items = list
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.published_at).toUTCString()}</pubDate>
      <category>${escapeXml(p.category)}</category>
      <description>${escapeXml(p.excerpt ?? "")}</description>
    </item>`,
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(TITLE)}</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  writeFileSync(resolve("public/rss.xml"), rss);

  // JSON Feed
  const jsonFeed = {
    version: "https://jsonfeed.org/version/1.1",
    title: TITLE,
    home_page_url: `${SITE}/blog`,
    feed_url: `${SITE}/feed.json`,
    description: DESCRIPTION,
    language: "en-US",
    items: list.map((p) => ({
      id: `${SITE}/blog/${p.slug}`,
      url: `${SITE}/blog/${p.slug}`,
      title: p.title,
      summary: p.excerpt,
      tags: [p.category],
      date_published: new Date(p.published_at).toISOString(),
    })),
  };

  writeFileSync(resolve("public/feed.json"), JSON.stringify(jsonFeed, null, 2));
  console.log(`feeds written (${list.length} entries)`);
}

main().catch((e) => {
  console.error("Feed generation failed:", e);
  process.exit(0);
});