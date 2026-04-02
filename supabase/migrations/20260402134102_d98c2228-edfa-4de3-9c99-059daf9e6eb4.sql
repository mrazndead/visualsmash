
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  read_time TEXT NOT NULL DEFAULT '8 min',
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read blog posts"
  ON public.blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Service role can insert blog posts"
  ON public.blog_posts
  FOR INSERT
  TO service_role
  WITH CHECK (true);
