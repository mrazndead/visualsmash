import { writeFileSync } from "fs";
import { resolve } from "path";
import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://visualsmash.lovable.app";
const SUPABASE_URL = "https://wcpqizbedxmsshyomdrq.supabase.co";
const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjcHFpemJlZHhtc3NoeW9tZHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NzgzNDMsImV4cCI6MjA5MDE1NDM0M30.uhSXt7O8v2NiMjxnWo3WHqTBXy6zq-EBofjHs8V8gdI";

import { caseStudies } from "../src/data/caseStudies";
import { locations } from "../src/data/locations";

interface Entry {
  path: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

const today = new Date().toISOString().slice(0, 10);

const staticEntries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
  { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/use-cases", changefreq: "monthly", priority: "0.8", lastmod: today },
  { path: "/portfolio", changefreq: "monthly", priority: "0.9", lastmod: today },
  { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: today },
  { path: "/contact", changefreq: "monthly", priority: "0.6", lastmod: today },
  { path: "/tech-stack", changefreq: "monthly", priority: "0.7", lastmod: today },
  { path: "/faq", changefreq: "monthly", priority: "0.8", lastmod: today },
];

async function main() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("slug, published_at")
    .order("published_at", { ascending: false });

  const postEntries: Entry[] = (posts ?? []).map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: (p.published_at ?? today).slice(0, 10),
    changefreq: "monthly",
    priority: "0.7",
  }));

  const caseEntries: Entry[] = caseStudies.map((c) => ({
    path: `/portfolio/${c.slug}`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.8",
  }));

  const locationEntries: Entry[] = locations.map((l) => ({
    path: `/${l.slug}`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.9",
  }));

  const all = [...staticEntries, ...postEntries, ...caseEntries, ...locationEntries];

  const urls = all
    .map((e) =>
      [
        `  <url>`,
        `    <loc>${BASE_URL}${e.path}</loc>`,
        e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
        e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
        e.priority ? `    <priority>${e.priority}</priority>` : null,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  writeFileSync(resolve("public/sitemap.xml"), xml);
  console.log(`sitemap.xml written (${all.length} entries)`);
}

main().catch((e) => {
  console.error("Sitemap generation failed:", e);
  process.exit(0); // don't block dev/build
});