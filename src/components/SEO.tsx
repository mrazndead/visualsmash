import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
  keywords?: string;
  image?: string;
}

export const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  jsonLd,
  keywords,
  image = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/70455fe2-15bd-4dd2-a405-f3cb3fef6556/id-preview-ab820fab--a02f9379-36d5-4f16-9b2b-ea77e5f17fd5.lovable.app-1774582250132.png",
}: SEOProps) => {
  const siteUrl = "https://visualsmash.lovable.app";
  const fullTitle = title === "Visual Smash" ? title : `${title} | Visual Smash`;
  const canonicalUrl = canonical || siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Visual Smash" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
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
