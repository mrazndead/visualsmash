
-- Ensure unique constraint on page for upserts
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'seo_dynamic_keywords_page_key'
  ) THEN
    ALTER TABLE public.seo_dynamic_keywords ADD CONSTRAINT seo_dynamic_keywords_page_key UNIQUE (page);
  END IF;
END $$;

INSERT INTO public.seo_dynamic_keywords (page, keywords, description) VALUES
('home',
 'web design Stockton CA, web design agency Stockton California, marketing agency Stockton CA, creative studio Stockton CA, graphic design Stockton, graphic designer Stockton CA, AI development consulting Stockton, AI consulting Stockton California, AI agency Stockton, branding agency Stockton, logo design Stockton, web developer Stockton, website designer Stockton, SEO agency Stockton, digital marketing Stockton, best web design Stockton, best marketing agency Stockton, top creative agency Stockton, Central Valley creative studio, Bay Area marketing agency',
 'Visual Smash is the #1 web design, marketing agency, creative studio, graphic design and AI development consulting partner in Stockton, California. Custom websites, branding, and AI-powered creative for Central Valley & Bay Area businesses.'),
('about',
 'about Visual Smash, Stockton CA marketing agency, Stockton creative studio, web design Stockton California, graphic design agency Stockton, AI development consulting Stockton, AI consultant Stockton, branding agency Stockton, Central Valley design agency, award-winning marketing agency Stockton',
 'About Visual Smash — a top-ranked Stockton, CA web design, marketing agency, graphic design and AI development consulting studio serving Central Valley & Bay Area clients with 20+ years of expertise.'),
('portfolio',
 'web design portfolio Stockton CA, marketing agency portfolio Stockton, graphic design portfolio Stockton, creative studio portfolio Stockton, AI development case studies Stockton, branding portfolio Stockton CA, logo design portfolio Stockton, Central Valley web design portfolio, agency case studies Stockton California',
 'Portfolio from Visual Smash, Stockton CA''s leading web design, marketing agency, graphic design, creative studio, and AI development consulting partner. Case studies in branding, web, catalog, and AI-powered campaigns.'),
('use-cases',
 'web design services Stockton CA, marketing agency services Stockton, graphic design services Stockton, creative studio services Stockton, AI development consulting services Stockton California, branding services Stockton, advertising services Stockton, AI agency services Stockton, web development services Stockton CA',
 'Services from Visual Smash — Stockton, CA''s premier web design, marketing agency, graphic design, creative studio, and AI development consulting partner. Eight disciplines, one production engine.'),
('tech-stack',
 'web design tools Stockton CA, marketing agency tech stack Stockton, AI development consulting tools Stockton, AI agency Stockton California, Figma Stockton, Webflow agency Stockton, WordPress developer Stockton, AI consultant Stockton, creative studio tech stack',
 'The tech stack powering Stockton, CA''s top web design, marketing agency, creative studio, and AI development consulting partner — Figma, Webflow, WordPress, Midjourney, LangGraph, and more.'),
('blog',
 'Stockton CA web design blog, marketing agency blog Stockton, graphic design insights Stockton, creative studio journal Stockton, AI development consulting blog Stockton California, AI agency insights Stockton, design trends Central Valley',
 'Insights from Visual Smash — Stockton, CA''s leading web design, marketing agency, graphic design, creative studio, and AI development consulting team. Strategy, design, and AI thinking for modern brands.'),
('contact',
 'contact web design agency Stockton CA, hire marketing agency Stockton, hire graphic designer Stockton, contact creative studio Stockton California, AI development consultant Stockton, work with Visual Smash, Stockton CA web design quote, marketing agency near me Stockton',
 'Contact Visual Smash — Stockton, CA''s top web design, marketing agency, graphic design, creative studio, and AI development consulting partner. Serving Central Valley & Bay Area clients.')
ON CONFLICT (page) DO UPDATE SET
  keywords = EXCLUDED.keywords,
  description = EXCLUDED.description,
  updated_at = now();
