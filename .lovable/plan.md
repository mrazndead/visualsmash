## Content & SEO Pack

Adds the highest-impact SEO surfaces: indexable blog post pages, case study deep-dives, an FAQ with schema, hyper-local landing pages, and a feed.

### 1. Blog post detail pages — `/blog/:slug`
- New route `BlogPost.tsx` that fetches a post from `blog_posts` by slug.
- Renders title, category, read time, published date, full markdown content (bold subheadings already in DB), and a sticky table of contents auto-generated from `**subheadings**`.
- Related posts (3 from same category).
- Per-page Helmet: title, meta description (excerpt), canonical, og:*, **Article JSON-LD** + **BreadcrumbList JSON-LD**.
- Update `Blog.tsx` cards to link to `/blog/:slug` instead of just showing excerpts.
- Add all post slugs to `sitemap.xml` via a `predev`/`prebuild` generator script that pulls from Supabase.

### 2. Case study pages — `/portfolio/:slug`
- New `CaseStudy.tsx` route. Content lives in a typed `caseStudies.ts` data file (hand-curated, one per existing portfolio item).
- Sections: hero, challenge, approach, deliverables, results/metrics, tech stack, gallery, next case study.
- CreativeWork + BreadcrumbList JSON-LD per page.
- Portfolio cards link into the detail pages; sitemap includes them.

### 3. FAQ page — `/faq`
- 15–20 Q&As covering pricing range, timelines, location/service area, process, tech, AI workflow, what's included.
- Accordion UI, **FAQPage JSON-LD** (massive local SEO win — eligible for rich results).
- Added to nav and footer.

### 4. Location landing pages
- New routes: `/web-design-stockton`, `/web-design-lodi`, `/web-design-tracy`, `/web-design-modesto`, `/web-design-manteca`.
- Driven by a single `LocationPage.tsx` template + `locations.ts` data file (unique H1, intro, local-flavor copy, service list, CTA per city).
- Each carries **LocalBusiness JSON-LD with `areaServed`** tuned to that city + geo coordinates.
- Linked from footer "Service Areas" block.

### 5. RSS + JSON feed
- `scripts/generate-feeds.ts` runs in `predev`/`prebuild`, writes `public/rss.xml` and `public/feed.json` from Supabase blog posts.
- `<link rel="alternate" type="application/rss+xml">` added to `index.html`.

### 6. Sitemap regen
- Replace static `public/sitemap.xml` with `scripts/generate-sitemap.ts` that pulls live blog slugs + case study slugs + location slugs and includes static routes. Hooked into `predev` and `prebuild`.

### Technical notes
- Routes added to `src/App.tsx` (lazy-loaded).
- Markdown render: lightweight (`react-markdown` + `remark-gfm`) — already an option, small footprint.
- Blog post fetch and case study lookup use existing `supabase` client.
- All new pages use existing `SEO` component with `jsonLd` prop; no schema work in components.
- No design changes — reuses existing tokens, glass surfaces, and Framer Motion patterns.
- `caseStudies.ts` and `locations.ts` are versioned data files so the user can edit copy without touching components.

### Out of scope (ask separately if wanted)
- Admin UI for editing posts/case studies
- Comments on blog posts
- Newsletter / email capture (that's in the lead-gen pack)
