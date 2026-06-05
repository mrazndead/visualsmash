import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { caseStudies, findCaseStudy } from "@/data/caseStudies";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = findCaseStudy(slug ?? "");
  if (!study) return <Navigate to="/portfolio" replace />;

  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  const url = `https://visualsmash.lovable.app/portfolio/${study.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: `${study.client} — ${study.category}`,
        url,
        about: study.tagline,
        creator: { "@type": "Organization", name: "Visual Smash" },
        keywords: study.techStack.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://visualsmash.lovable.app" },
          { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://visualsmash.lovable.app/portfolio" },
          { "@type": "ListItem", position: 3, name: study.client, item: url },
        ],
      },
    ],
  };

  return (
    <div className="relative overflow-x-hidden">
      <SEO
        title={`${study.client} — Case Study`}
        description={study.tagline}
        canonical={url}
        jsonLd={jsonLd}
        keywords={`${study.client} case study, ${study.category}, web design agency Stockton CA, marketing agency Stockton CA, Visual Smash portfolio, ${study.techStack.join(", ")}`}
      />

      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft size={12} /> All Case Studies
            </Link>
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
              {study.category}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              {study.client}
            </h1>
            <p className="mt-6 font-display text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
              {study.tagline}
            </p>
            {study.url && (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary hover:underline"
              >
                Visit Live Site <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 grid md:grid-cols-3 gap-8">
          {study.results.map((r) => (
            <ScrollReveal key={r.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-accent-gradient mb-2">
                {r.metric}
              </div>
              <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {r.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-12 space-y-16">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-4">The Challenge</h2>
            <p className="font-display text-base font-light text-muted-foreground leading-relaxed">
              {study.challenge}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-4">Our Approach</h2>
            <ul className="space-y-3">
              {study.approach.map((a, i) => (
                <li key={i} className="flex gap-4 font-display text-base font-light text-foreground/80">
                  <span className="font-display text-xs font-bold text-primary mt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-4">Deliverables</h2>
            <div className="flex flex-wrap gap-2">
              {study.deliverables.map((d) => (
                <span
                  key={d}
                  className="font-display text-xs font-semibold uppercase tracking-wider text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1.5"
                >
                  {d}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((t) => (
                <span
                  key={t}
                  className="font-display text-xs font-semibold uppercase tracking-wider text-secondary/90 bg-secondary/5 border border-secondary/20 px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">
              Next Case Study
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-black uppercase">{next.client}</h3>
          </div>
          <Link
            to={`/portfolio/${next.slug}`}
            className="inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground hover:shadow-glow-blue"
          >
            View <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}