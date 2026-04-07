import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface SiteTheme {
  primary_hue: number;
  primary_saturation: number;
  primary_lightness: number;
  secondary_hue: number;
  secondary_saturation: number;
  secondary_lightness: number;
  font_display: string;
  font_editorial: string;
  google_fonts_url: string;
}

const DEFAULT_THEME: SiteTheme = {
  primary_hue: 210,
  primary_saturation: 100,
  primary_lightness: 56,
  secondary_hue: 75,
  secondary_saturation: 100,
  secondary_lightness: 60,
  font_display: "Inter Tight",
  font_editorial: "Playfair Display",
  google_fonts_url:
    "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
};

let cachedTheme: SiteTheme | null = null;

export function useSiteTheme() {
  const [theme, setTheme] = useState<SiteTheme>(cachedTheme || DEFAULT_THEME);

  useEffect(() => {
    if (cachedTheme) {
      applyTheme(cachedTheme);
      return;
    }

    const fetchTheme = async () => {
      const { data, error } = await supabase
        .from("site_themes")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (!error && data) {
        const t: SiteTheme = {
          primary_hue: data.primary_hue,
          primary_saturation: data.primary_saturation,
          primary_lightness: data.primary_lightness,
          secondary_hue: data.secondary_hue,
          secondary_saturation: data.secondary_saturation,
          secondary_lightness: data.secondary_lightness,
          font_display: data.font_display,
          font_editorial: data.font_editorial,
          google_fonts_url: data.google_fonts_url,
        };
        cachedTheme = t;
        setTheme(t);
        applyTheme(t);
      }
    };

    fetchTheme();
  }, []);

  return theme;
}

function applyTheme(t: SiteTheme) {
  const root = document.documentElement;
  const p = `${t.primary_hue} ${t.primary_saturation}% ${t.primary_lightness}%`;
  const s = `${t.secondary_hue} ${t.secondary_saturation}% ${t.secondary_lightness}%`;

  root.style.setProperty("--primary", p);
  root.style.setProperty("--accent", p);
  root.style.setProperty("--ring", p);
  root.style.setProperty("--sidebar-primary", p);
  root.style.setProperty("--sidebar-ring", p);
  root.style.setProperty("--secondary", s);

  root.style.setProperty("--font-display", `'${t.font_display}', sans-serif`);
  root.style.setProperty("--font-editorial", `'${t.font_editorial}', serif`);

  // Load Google Fonts
  const existingLink = document.getElementById("dynamic-fonts") as HTMLLinkElement;
  if (existingLink) {
    existingLink.href = t.google_fonts_url;
  } else {
    const link = document.createElement("link");
    link.id = "dynamic-fonts";
    link.rel = "stylesheet";
    link.href = t.google_fonts_url;
    document.head.appendChild(link);
  }
}
