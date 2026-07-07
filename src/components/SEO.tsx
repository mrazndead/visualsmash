import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
  keywords?: string;
  image?: string;
  pageKey?: string;
  preloadImage?: string;
}

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  jsonLd,
  keywords,
  image = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/70455fe2-15bd-4dd2-a405-f3cb3fef6556/id-preview-ab820fab--a02f9379-36d5-4f16-9b2b-ea77e5f17fd5.lovable.app-1774582250132.png",
  pageKey,
  preloadImage,
}: SEOProps) => {
  const siteUrl = "https://visualsmash.lovable.app";
  const fullTitle = title === "Visual Smash" ? title : `${title} | Visual Smash`;
  const canonicalUrl = canonical || siteUrl;
  const [dynamic, setDynamic] = useState<{ keywords?: string; description?: string }>({});

  useEffect(() => {
    if (!pageKey) return;
    let cancelled = false;
    supabase
      .from("seo_dynamic_keywords")
      .select("keywords, description")
      .eq("page", pageKey)
      .maybeSingle()
      .then(({ data }) => {
        if (!cancelled && data) {
          setDynamic({ keywords: data.keywords ?? undefined, description: data.description ?? undefined });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [pageKey]);

  const mergedKeywords = [keywords, dynamic.keywords].filter(Boolean).join(", ");
  const finalDescription = dynamic.description || description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      {mergedKeywords && <meta name="keywords" content={mergedKeywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {preloadImage && (
        <link
          rel="preload"
          as="image"
          href={preloadImage}
          {...({ fetchpriority: "high" } as Record<string, string>)}
        />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Visual Smash" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
