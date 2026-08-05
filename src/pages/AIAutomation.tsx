import { motion } from "framer-motion";
import { ArrowRight, Brain, Database, FileCheck2, LockKeyhole, Search, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import abstractGlass from "@/assets/abstract-glass.webp";

const capabilities = [
  {
    icon: Database,
    title: "Business Knowledge",
    description: "Connect brand guidelines, product documents, sales playbooks, support content, and approved creative into one searchable knowledge system.",
  },
  {
    icon: Search,
    title: "Grounded Answers",
    description: "Retrieval-based workflows help the AI answer from your source material instead of relying on generic responses.",
  },
  {
    icon: FileCheck2,
    title: "Brand Guardrails",
    description: "Prompt frameworks, tone rules, and review steps keep generated content aligned with your brand and operating standards.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Connect the AI Brain to content drafting, internal research, customer FAQs, and repeatable team processes.",
  },
  {
    icon: LockKeyhole,
    title: "Controlled Access",
    description: "Role-aware interfaces and documented source management help teams use company knowledge responsibly.",
  },
  {
    icon: Brain,
    title: "Team Enablement",
    description: "Training and ongoing refinement help your team ask better questions and expand the system as the business evolves.",
  },
];

const process = [
  { step: "01", title: "Discover", copy: "Identify the highest-value questions, workflows, source material, and users." },
  { step: "02", title: "Structure", copy: "Organize approved knowledge and define retrieval, voice, and access rules." },
  { step: "03", title: "Build", copy: "Create the branded interface, AI workflows, safeguards, and integrations." },
  { step: "04", title: "Refine", copy: "Test real team questions, improve answer quality, and train the people using it." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Automation and AI Brain Development",
      description: "Custom AI knowledge systems and workflow automation for small businesses in Stockton, California and beyond.",
      provider: { "@type": "Organization", name: "Visual Smash", url: "https://visualsmash.lovable.app" },
      areaServed: ["Stockton, CA", "San Joaquin County", "Central Valley", "San Francisco Bay Area"],
      url: "https://visualsmash.lovable.app/ai-automation",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://visualsmash.lovable.app/" },
        { "@type": "ListItem", position: 2, name: "AI Automation", item: "https://visualsmash.lovable.app/ai-automation" },
      ],
    },
  ],
};

export default function AIAutomation() {
  return (
    <div className="relative overflow-x-hidden">
      <SEO
        title="AI Automation Agency Stockton CA"
        description="Custom AI Brain development and AI automation for Stockton businesses. Turn approved company knowledge into grounded answers and faster workflows."
        canonical="https://visualsmash.lovable.app/ai-automation"
        keywords="AI automation Stockton CA, AI agency Stockton, AI Brain development, custom business AI, small business AI automation, RAG development Stockton, AI workflow automation, brand voice AI"
        jsonLd={jsonLd}
        preloadImage={abstractGlass}
      />

      <section className="relative flex min-h-[78vh] items-end overflow-hidden pb-20 pt-40">
        <div className="absolute inset-0">
          <img
            src={abstractGlass}
            alt="Abstract glass structure representing connected business knowledge"
            width={1280}
            height={720}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 grid-lines opacity-20" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary"
          >
            AI Automation · Stockton, CA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-display font-display font-black uppercase text-foreground"
          >
            Build an AI that knows <span className="font-editorial italic font-light text-accent-gradient">your business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-7 max-w-2xl font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg"
          >
            Visual Smash creates private AI knowledge systems grounded in your approved content, brand voice, products, and processes—then connects them to the work your team repeats every day.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-9"
          >
            <Button asChild size="lg" className="rounded-none font-display font-bold uppercase tracking-[0.12em]">
              <Link to="/contact">Discuss your AI workflow <ArrowRight /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="max-w-3xl">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">What We Build</p>
            <h2 className="text-title font-display font-black uppercase text-foreground">More useful than a generic chatbot.</h2>
            <p className="mt-6 font-display text-base font-light leading-relaxed text-muted-foreground">
              Your AI Brain is designed around real company material and specific team tasks. The goal is a practical digital consultant that helps people find answers, draft on-brand content, and move through recurring work with less friction.
            </p>
          </ScrollReveal>
          <StaggerContainer className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <article className="h-full bg-background p-8 transition-colors hover:bg-muted/20">
                  <Icon className="mb-6 text-primary" size={24} />
                  <h3 className="font-display text-lg font-black uppercase text-foreground">{title}</h3>
                  <p className="mt-3 font-display text-sm font-light leading-relaxed text-muted-foreground">{description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-secondary">How It Works</p>
            <h2 className="text-title font-display font-black uppercase text-foreground">From scattered files to a working system.</h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.08}>
                <div className="border-t border-primary/40 pt-6">
                  <span className="font-display text-xs font-bold text-primary">{item.step}</span>
                  <h3 className="mt-4 font-display text-xl font-black uppercase text-foreground">{item.title}</h3>
                  <p className="mt-3 font-display text-sm font-light leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <Brain className="mx-auto mb-6 text-primary" size={32} />
            <h2 className="text-title font-display font-black uppercase text-foreground">Put your business knowledge to work.</h2>
            <p className="mx-auto mt-5 max-w-xl font-display text-sm leading-relaxed text-muted-foreground">
              Start with one valuable workflow. We’ll map the sources, users, safeguards, and practical path to launch.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-none font-display font-bold uppercase tracking-[0.12em]">
              <Link to="/contact">Start an AI automation project <ArrowRight /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}