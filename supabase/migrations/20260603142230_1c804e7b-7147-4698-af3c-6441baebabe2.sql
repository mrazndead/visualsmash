CREATE TABLE IF NOT EXISTS public.seo_dynamic_keywords (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL UNIQUE,
  keywords text NOT NULL DEFAULT '',
  description text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.seo_dynamic_keywords TO anon;
GRANT SELECT ON public.seo_dynamic_keywords TO authenticated;
GRANT ALL ON public.seo_dynamic_keywords TO service_role;

ALTER TABLE public.seo_dynamic_keywords ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read SEO keywords"
ON public.seo_dynamic_keywords
FOR SELECT
TO anon, authenticated
USING (true);

CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA extensions;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;