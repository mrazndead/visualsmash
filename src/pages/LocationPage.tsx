import { useLocation, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { findLocation } from "@/data/locations";

const services = [
  "Custom website design & development",
  "Brand identity & logo design",
  "Local SEO & Google Business Profile",
  "Ecommerce (Shopify & custom)",
  "AI-powered creative production",
  "Marketing automation & email",
  "UX research & redesign",
  "Ongoing website care & support",
];

export default function LocationPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
  const loc = findLocation(slug);
  if (!loc) return <Navigate to="/" replace />;

  const url = `https://visualsmash.lovable.app/${loc.slug}`;
  const title = `Web Design & Marketing Agency in ${loc.city}, ${loc.state}`;
  const description = `Visual Smash is the web design and marketing agency ${loc.city}, ${loc.state} businesses trust for custom websites, branding, SEO, and AI-powered creative. Serving ${loc.county} and the Central Valley.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService", "MarketingAgency"],
        name: `Visual Smash — Web Design & Marketing Agency serving ${loc.city}, ${loc.state}`,
        url,
        image:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/70455fe2-15bd-4dd2-a405-f3cb3fef6556/id-preview-ab820fab--a02f9379-36d5-4f16-9b2b-ea77e5f17fd5.lovable.app-1774582250132.png",
        priceRange: "$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stockton",
          addressRegion: "CA",
          postalCode: "95202",
          addressCountry: "US",
        },
        geo: { "@type": "GeoCoordinates", latitude: 37.9577, longitude: -121.2908 },
        areaServed: [
          {
            "@type": "City",
            name: loc.city,
            address: {
              "@type": "PostalAddress",
              addressLocality: loc.city,
              addressRegion: loc.state,
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: loc.lat, longitude: loc.lng },
          },
          { "@type": "AdministrativeArea", name: loc.county },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://visualsmash.lovable.app" },
          { "@type": "ListItem", position: 2, name: `Web Design ${loc.city}`, item: url },
        ],
      },
    ],
  };

  return (
    <div className="relative overflow-x-hidden">
      <SEO
        title={title}
        description={description}
        canonical={url}
        jsonLd={jsonLd}
        keywords={`web design ${loc.city}, web design agency ${loc.city} ${loc.state}, web designer ${loc.city}, website design ${loc.city}, marketing agency ${loc.city} ${loc.state}, ${loc.city} marketing, SEO ${loc.city}, branding ${loc.city}, ${loc.city} creative agency, ${loc.county} web design, Central Valley web design, ${loc.city} ${loc.state} web development, local SEO ${loc.city}`}
      />

      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <MapPin size={14} className="text-primary" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {loc.county} · {loc.population} residents
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              Web Design Agency in{" "}
              <span className="font-editorial italic font-light text-accent-gradient">
                {loc.city}, {loc.state}
              </span>
            </h1>
            <p className="mt-6 font-display text-base md:text-lg font-light text-muted-foreground leading-relaxed">
              {loc.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 grid md:grid-cols-2 gap-12">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-6">
              Services for {loc.city} businesses
            </h2>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-3 font-display text-sm text-foreground/80">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-6">
              Industries we serve
            </h2>
            <ul className="space-y-3">
              {loc.industries.map((i) => (
                <li key={i} className="flex items-start gap-3 font-display text-sm text-foreground/80">
                  <Check size={16} className="text-secondary mt-0.5 shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-6">
              Local context matters
            </h2>
            <p className="font-display text-base font-light text-muted-foreground leading-relaxed">
              {loc.neighborhoodCopy}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 border-t border-border text-center">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-4xl font-black uppercase mb-4">
              Ready to start your {loc.city} project?
            </h2>
            <p className="font-display text-sm text-muted-foreground mb-8">
              Schedule a free discovery call — we'll talk goals, timeline, and what a great site looks like for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground hover:shadow-glow-blue"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}