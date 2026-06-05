import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";

const faqs = [
  {
    q: "Where is Visual Smash located and what areas do you serve?",
    a: "Visual Smash is a web design and marketing agency based in Stockton, California. We serve clients throughout Stockton, Lodi, Tracy, Modesto, Manteca, Lathrop, Ripon, San Joaquin County, the Central Valley, Sacramento, and the entire San Francisco Bay Area. Most of our work is delivered remotely, with on-site meetings available across Northern California.",
  },
  {
    q: "What services does Visual Smash offer?",
    a: "We offer web design and development, brand identity, UX design, AI-powered creative, marketing automation, SEO, catalog and print design, technical marketing and analytics, email automation, product launch content, and custom AI brain development for small business. Each engagement is scoped to the outcome you need — not a fixed package.",
  },
  {
    q: "How much does a website cost with Visual Smash?",
    a: "Project investment varies based on scope, complexity, and timeline. Lightweight marketing sites typically start in the low five figures, while custom platforms, ecommerce builds, and integrated brand systems scale from there. After a discovery call we provide a fixed proposal so there are no surprises.",
  },
  {
    q: "How long does a website project take?",
    a: "A typical marketing website ships in 4–8 weeks from kickoff. Larger platforms with custom functionality, integrations, or ecommerce run 8–16 weeks. We work in weekly sprints with live previews so you see progress continuously.",
  },
  {
    q: "Do you build websites for small businesses in Stockton?",
    a: "Yes — small businesses across Stockton and San Joaquin County are a core part of our practice. We work with law firms, contractors, real estate teams, restaurants, medical practices, wineries, and SaaS startups throughout the Central Valley.",
  },
  {
    q: "What platforms and tech stack do you use?",
    a: "We pick the right tool for the outcome: modern React stacks (Vite, Next.js, Astro) for custom builds, WordPress and Webflow for content-heavy marketing sites, Shopify for ecommerce, and Supabase or custom APIs for data-driven applications. Our default stack is React + Vite + Supabase with Lovable AI Gateway.",
  },
  {
    q: "Do you offer SEO and local SEO services?",
    a: "Yes. Every site we build ships with technical SEO baked in — schema markup, sitemaps, performance optimization, semantic structure, and local business signals. Ongoing SEO retainers include local SEO for Stockton and Central Valley businesses, content strategy, and keyword tracking.",
  },
  {
    q: "Can you help with branding and logo design?",
    a: "Absolutely. Brand identity is one of our oldest disciplines — we've built visual systems for real estate developments, fashion brands, law firms, financial institutions, and emerging startups. Brand engagements include strategy, logo, type system, color, voice, and a full brand guidelines document.",
  },
  {
    q: "What is AI-powered creative and how do you use it?",
    a: "We use AI to compress creative production cycles without losing craft — generating moodboards, exploring concept directions, drafting copy variants, automating asset resizes, and building custom 'AI brains' that hold a brand's voice for ongoing use. Strategy and creative direction stay human; AI accelerates the production multiplier.",
  },
  {
    q: "Do you offer marketing automation and email marketing?",
    a: "Yes. We design and implement automation across Microsoft Power Automate, HubSpot, Mailchimp, Klaviyo, and custom workflows. This covers lead capture, nurture sequences, lifecycle email, sales handoffs, and reporting dashboards.",
  },
  {
    q: "Will my website be mobile-friendly and fast?",
    a: "Always. Every site is built mobile-first, lighthouse-audited, and ships with image optimization, lazy-loading, code-splitting, and edge caching. Core Web Vitals are a deliverable, not an afterthought.",
  },
  {
    q: "Do you do ongoing website maintenance and support?",
    a: "Yes. We offer monthly care plans that cover hosting, security updates, performance monitoring, content updates, analytics review, and ongoing SEO. Plans scale from light maintenance to full marketing partnership.",
  },
  {
    q: "Can you redesign or migrate my existing website?",
    a: "Yes. We handle full redesigns, migrations between platforms (WordPress → Webflow, Squarespace → React, etc.), and incremental redesigns where we modernize a site section by section without taking it offline.",
  },
  {
    q: "Do you offer ecommerce design and development?",
    a: "Yes — primarily on Shopify, with custom React storefronts for brands that need more flexibility. Engagements include product photography direction, merchandising, checkout optimization, and integrations with shipping, inventory, and ERP systems.",
  },
  {
    q: "How do we start a project with Visual Smash?",
    a: "Email visualsmash@gmail.com or use the contact page. We respond within one business day, schedule a 30-minute discovery call to understand your goals, and follow up with a written proposal including scope, timeline, and investment.",
  },
  {
    q: "Do you work with clients outside California?",
    a: "Yes. While we're rooted in Stockton and the Central Valley, our process is fully remote-friendly and we work with clients across the United States and internationally.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="relative overflow-x-hidden">
      <SEO
        title="FAQ — Web Design & Marketing Agency Stockton CA"
        description="Pricing, timelines, services, and process — answers to the most common questions about working with Visual Smash, a Stockton, CA web design & marketing agency."
        canonical="https://visualsmash.lovable.app/faq"
        keywords="web design agency Stockton CA, marketing agency Stockton CA, web design pricing Stockton, website cost Stockton, Stockton SEO services, Stockton creative agency FAQ, Central Valley web design questions"
        jsonLd={jsonLd}
      />

      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
              Frequently Asked
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              Questions, <span className="font-editorial italic font-light text-accent-gradient">answered.</span>
            </h1>
            <p className="mt-6 font-display text-base font-light text-muted-foreground">
              Everything you need to know about working with Visual Smash — a Stockton, CA web design & marketing agency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-display text-left text-base md:text-lg font-bold uppercase tracking-tight text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-display text-sm md:text-base font-light leading-relaxed text-muted-foreground pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 border-t border-border text-center">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-4">
              Still have questions?
            </h2>
            <p className="font-display text-sm text-muted-foreground mb-8">
              We respond to every inquiry within one business day.
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