
CREATE TABLE public.site_themes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  primary_hue integer NOT NULL DEFAULT 210,
  primary_saturation integer NOT NULL DEFAULT 100,
  primary_lightness integer NOT NULL DEFAULT 56,
  secondary_hue integer NOT NULL DEFAULT 75,
  secondary_saturation integer NOT NULL DEFAULT 100,
  secondary_lightness integer NOT NULL DEFAULT 60,
  font_display text NOT NULL DEFAULT 'Inter Tight',
  font_editorial text NOT NULL DEFAULT 'Playfair Display',
  google_fonts_url text NOT NULL DEFAULT 'https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap',
  active boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.site_themes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active theme" ON public.site_themes
  FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Service role can manage themes" ON public.site_themes
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Insert default theme
INSERT INTO public.site_themes (primary_hue, primary_saturation, primary_lightness, secondary_hue, secondary_saturation, secondary_lightness, font_display, font_editorial, google_fonts_url, active)
VALUES (210, 100, 56, 75, 100, 60, 'Inter Tight', 'Playfair Display', 'https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap', true);
