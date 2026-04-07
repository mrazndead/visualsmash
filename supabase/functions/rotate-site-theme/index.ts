import { createClient } from "https://esm.sh/@supabase/supabase-js@2.100.1";
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

// Curated high-end font pairings (all available on Google Fonts with variable weights)
const fontPairings = [
  {
    display: "Inter Tight",
    editorial: "Playfair Display",
    url: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
  },
  {
    display: "Space Grotesk",
    editorial: "DM Serif Display",
    url: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=DM+Serif+Display:ital@0;1&display=swap",
  },
  {
    display: "Outfit",
    editorial: "Cormorant Garamond",
    url: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap",
  },
  {
    display: "Sora",
    editorial: "Libre Baskerville",
    url: "https://fonts.googleapis.com/css2?family=Sora:wght@100..800&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
  },
  {
    display: "Plus Jakarta Sans",
    editorial: "Lora",
    url: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Lora:ital,wght@0,400..700;1,400..700&display=swap",
  },
  {
    display: "Manrope",
    editorial: "Fraunces",
    url: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap",
  },
];

// Curated color palettes (primary + secondary) — all high-end, high-contrast combos
const colorPalettes = [
  { ph: 210, ps: 100, pl: 56, sh: 75, ss: 100, sl: 60 },   // Electric Blue + Acid Lime (default)
  { ph: 280, ps: 85, pl: 60, sh: 45, ss: 100, sl: 55 },     // Vivid Purple + Gold
  { ph: 340, ps: 90, pl: 55, sh: 170, ss: 80, sl: 50 },     // Hot Pink + Teal
  { ph: 160, ps: 85, pl: 45, sh: 30, ss: 95, sl: 60 },      // Emerald + Coral
  { ph: 15, ps: 90, pl: 55, sh: 200, ss: 85, sl: 55 },      // Vermillion + Steel Blue
  { ph: 250, ps: 75, pl: 55, sh: 140, ss: 80, sl: 55 },     // Indigo + Mint
  { ph: 190, ps: 90, pl: 50, sh: 350, ss: 85, sl: 60 },     // Cyan + Rose
  { ph: 35, ps: 95, pl: 55, sh: 260, ss: 80, sl: 60 },      // Amber + Lavender
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get current active theme to avoid repeating it
    const { data: currentTheme } = await supabase
      .from("site_themes")
      .select("*")
      .eq("active", true)
      .single();

    // Pick a different font pairing than current
    let fontIdx: number;
    do {
      fontIdx = Math.floor(Math.random() * fontPairings.length);
    } while (
      currentTheme &&
      fontPairings[fontIdx].display === currentTheme.font_display &&
      fontPairings.length > 1
    );
    const fonts = fontPairings[fontIdx];

    // Pick a different color palette than current
    let colorIdx: number;
    do {
      colorIdx = Math.floor(Math.random() * colorPalettes.length);
    } while (
      currentTheme &&
      colorPalettes[colorIdx].ph === currentTheme.primary_hue &&
      colorPalettes.length > 1
    );
    const colors = colorPalettes[colorIdx];

    // Deactivate all themes
    await supabase
      .from("site_themes")
      .update({ active: false })
      .eq("active", true);

    // Insert new active theme
    const { error: insertError } = await supabase.from("site_themes").insert({
      primary_hue: colors.ph,
      primary_saturation: colors.ps,
      primary_lightness: colors.pl,
      secondary_hue: colors.sh,
      secondary_saturation: colors.ss,
      secondary_lightness: colors.sl,
      font_display: fonts.display,
      font_editorial: fonts.editorial,
      google_fonts_url: fonts.url,
      active: true,
    });

    if (insertError) throw new Error(`Insert error: ${insertError.message}`);

    return new Response(
      JSON.stringify({
        success: true,
        theme: { fonts, colors },
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error rotating theme:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
