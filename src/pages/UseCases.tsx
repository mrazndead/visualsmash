import { motion } from "framer-motion";
import {
  Palette,
  BarChart3,
  MousePointer2,
  Fingerprint,
  Workflow,
  Sparkles,
  Globe,
  Cpu,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";

const useCases = [
  {
    icon: Palette,
    number: "01",
    title: "Graphic Design",
    tagline: "Visuals That Stop Thumbs.",
    body: "From editorial layouts and social media campaigns to large-format print and packaging—our design work is rooted in 20 years of Fortune 500 visual storytelling. Every composition is deliberate, every color choice strategic, every element designed to create instant emotional resonance.",
    tags: ["Print & Digital", "Social Assets", "Packaging", "Editorial"],
    accent: "primary",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Technical Marketing",
    tagline: "Data-Driven Campaigns That Convert.",
    body: "We architect multi-channel marketing strategies backed by analytics, A/B testing, and performance optimization. Two decades of running campaigns for Fortune 500 brands taught us that creativity without measurement is just decoration. We make every dollar accountable.",
    tags: ["Analytics", "A/B Testing", "Performance", "Multi-Channel"],
    accent: "secondary",
  },
  {
    icon: MousePointer2,
    number: "03",
    title: "UX Design",
    tagline: "Experiences That Feel Inevitable.",
    body: "We obsess over the human side of digital. User research, journey mapping, wireframing, prototyping, and interaction design—we engineer every touchpoint to eliminate friction and maximize delight. Beautiful interfaces that actually work, tested and validated with real users.",
    tags: ["User Research", "Journey Mapping", "Prototyping", "Interaction Design"],
    accent: "primary",
  },
  {
    icon: Fingerprint,
    number: "04",
    title: "Branding",
    tagline: "Identities That Outlast Trends.",
    body: "We build brand ecosystems—not just logos. From naming and positioning to visual identity systems, brand guidelines, and voice architecture. Your brand should be recognized in a split second and remembered forever. We've done it for household names, and we'll do it for you.",
    tags: ["Brand Strategy", "Visual Identity", "Guidelines", "Voice & Tone"],
    accent: "secondary",
  },
  {
    icon: Workflow,
    number: "05",
    title: "Marketing Automation",
    tagline: "Intelligent Systems, Zero Waste.",
    body: "We design and deploy marketing automation pipelines that nurture leads, segment audiences, and trigger campaigns at precisely the right moment. Email sequences, CRM integrations, behavioral triggers—all orchestrated to scale your impact without scaling your headcount.",
    tags: ["Email Flows", "CRM Integration", "Lead Scoring", "Behavioral Triggers"],
    accent: "primary",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Prompt Engineering",
    tagline: "Mastering the AI Conversation.",
    body: "We craft precision prompts and AI workflows that generate on-brand creative assets, marketing copy, and data insights at scale. Our prompt engineering practice isn't a gimmick—it's a competitive advantage that accelerates production while maintaining the quality bar your brand demands.",
    tags: ["AI Workflows", "Creative Prompts", "Content Generation", "Quality Control"],
    accent: "secondary",
  },
  {
    icon: Globe,
    number: "07",
    title: "Web Design",
    tagline: "Websites That Win Awards & Customers.",
    body: "We design and build high-performance websites that look like nothing else on the internet. Responsive, blazing fast, and accessibility-first—from single-page microsites to complex multi-tenant platforms. Every pixel serves a purpose. Every interaction tells your story.",
    tags: ["Responsive Design", "Performance", "Accessibility", "Animation"],
    accent: "primary",
  },
  {
    icon: Cpu,
    number: "08",
    title: "Software Design with AI",
    tagline: "AI-Native Product Design.",
    body: "We design software products that leverage AI at their core—intelligent dashboards, generative content tools, predictive interfaces, and AI-powered user experiences. We understand both the technology and the human factors, creating products where AI feels invisible but indispensable.",
    tags: ["AI Integration", "Product Design", "Intelligent UI", "Generative Tools"],
    accent: "secondary",
  },
];

export default function UseCases() {
  return (
    <div className="pt-24">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              What We Do
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-display font-display font-black uppercase leading-none text-foreground"
            >
              Use{" "}
              <span className="font-editorial italic font-light text-accent-gradient">
                Cases.
              </span>
            </motion.h1>
          </div>
          <ScrollReveal delay={0.3}>
            <p className="mt-8 max-w-2xl font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              Eight disciplines. Twenty years of mastery. Every one battle-tested across Fortune 500 
              campaigns, luxury brands, and high-growth startups. This is what happens when experience 
              meets relentless innovation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── USE CASES GRID ── */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {useCases.map((uc, i) => (
              <StaggerItem key={uc.number}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden border border-border p-8 md:p-10 transition-all duration-500 hover:border-${uc.accent}/40`}
                >
                  {/* Background glow */}
                  <div
                    className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl transition-all duration-700 ${
                      uc.accent === "primary"
                        ? "bg-primary/5 group-hover:bg-primary/10"
                        : "bg-secondary/5 group-hover:bg-secondary/10"
                    }`}
                  />

                  <div className="relative">
                    {/* Header */}
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center border transition-colors duration-300 ${
                            uc.accent === "primary"
                              ? "border-primary/30 group-hover:border-primary/60"
                              : "border-secondary/30 group-hover:border-secondary/60"
                          }`}
                        >
                          <uc.icon
                            size={20}
                            className={`transition-colors duration-300 ${
                              uc.accent === "primary"
                                ? "text-primary"
                                : "text-secondary"
                            }`}
                          />
                        </div>
                        <span className="font-display text-xs font-bold tracking-widest text-muted-foreground/40">
                          {uc.number}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 font-display text-2xl font-black uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-gradient md:text-3xl">
                      {uc.title}
                    </h3>

                    {/* Tagline */}
                    <p
                      className={`mb-4 font-editorial text-sm italic ${
                        uc.accent === "primary"
                          ? "text-primary/70"
                          : "text-secondary/70"
                      }`}
                    >
                      {uc.tagline}
                    </p>

                    {/* Body */}
                    <p className="mb-6 font-display text-sm font-light leading-relaxed text-muted-foreground">
                      {uc.body}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {uc.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`font-display text-[10px] font-bold uppercase tracking-widest border px-3 py-1 transition-colors duration-300 ${
                            uc.accent === "primary"
                              ? "border-primary/20 text-primary/60 group-hover:border-primary/40 group-hover:text-primary/80"
                              : "border-secondary/20 text-secondary/60 group-hover:border-secondary/40 group-hover:text-secondary/80"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-32 border-t border-border">
        <div className="absolute inset-0 grid-lines opacity-15" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal>
            <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Ready to Start?
            </p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Your Next{" "}
              <span className="font-editorial italic font-light text-accent-gradient">
                Move.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
              Whether it's one discipline or all eight—we tailor our approach to your 
              ambitions. Let's talk about what's possible.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mt-10">
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-4 bg-primary px-12 py-5 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue"
              >
                Start a Conversation
                <motion.span
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  →
                </motion.span>
              </motion.button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
