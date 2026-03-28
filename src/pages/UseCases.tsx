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
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";

const useCases = [
  {
    icon: Palette,
    number: "01",
    title: "Graphic Design",
    tagline: "Visuals That Stop Thumbs.",
    body: "From editorial layouts and social media campaigns to large-format print and packaging—our design work is rooted in 20+ years of Fortune 500 visual storytelling. Every composition is deliberate, every color choice strategic, every element designed to create instant emotional resonance.",
    extended: "We've designed everything from Super Bowl campaign assets to luxury real estate brochures that sell $50M properties. Our process starts with deep brand immersion—understanding your audience's visual language before we touch a single pixel. The result is design that doesn't just look beautiful; it performs. Higher engagement rates, stronger brand recall, and creative that your competitors wish they'd made first.",
    tags: ["Print & Digital", "Social Assets", "Packaging", "Editorial", "Campaign Creative"],
    accent: "primary",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Technical Marketing",
    tagline: "Data-Driven Campaigns That Convert.",
    body: "We architect multi-channel marketing strategies backed by analytics, A/B testing, and performance optimization. Two decades of running campaigns for Fortune 500 brands taught us that creativity without measurement is just decoration.",
    extended: "Our technical marketing practice bridges the gap between creative intuition and hard data. We build attribution models, set up conversion tracking architectures, and design experiments that reveal what actually moves your audience. From programmatic ad strategies to SEO-optimized content ecosystems, we engineer marketing machines that compound over time. Every campaign ships with a measurement framework so you know exactly what's working and why.",
    tags: ["Analytics", "A/B Testing", "Performance", "Multi-Channel", "Attribution"],
    accent: "secondary",
  },
  {
    icon: MousePointer2,
    number: "03",
    title: "UX Design",
    tagline: "Experiences That Feel Inevitable.",
    body: "We obsess over the human side of digital. User research, journey mapping, wireframing, prototyping, and interaction design—we engineer every touchpoint to eliminate friction and maximize delight.",
    extended: "Our UX process is rigorous and research-driven. We conduct stakeholder interviews, competitive audits, user testing sessions, and heuristic evaluations before designing a single screen. We create detailed user personas, map complete customer journeys, build interactive prototypes in Figma, and validate every major decision with real users. The outcome: digital experiences with measurably higher task completion rates, lower bounce rates, and users who actually enjoy interacting with your product.",
    tags: ["User Research", "Journey Mapping", "Prototyping", "Interaction Design", "Usability Testing"],
    accent: "primary",
  },
  {
    icon: Fingerprint,
    number: "04",
    title: "Branding",
    tagline: "Identities That Outlast Trends.",
    body: "We build brand ecosystems—not just logos. From naming and positioning to visual identity systems, brand guidelines, and voice architecture. Your brand should be recognized in a split second and remembered forever.",
    extended: "Our branding process begins with strategic positioning—finding the white space in your market where your brand can own a category. We develop comprehensive brand architectures including logo systems (primary, secondary, icon marks), typography pairings, color systems with accessibility baked in, photography direction, illustration styles, and detailed brand guidelines that ensure consistency at scale. We've rebranded companies mid-growth and built identities from scratch for stealth startups that went on to become household names.",
    tags: ["Brand Strategy", "Visual Identity", "Guidelines", "Voice & Tone", "Naming"],
    accent: "secondary",
  },
  {
    icon: Workflow,
    number: "05",
    title: "Marketing Automation",
    tagline: "Intelligent Systems, Zero Waste.",
    body: "We design and deploy marketing automation pipelines that nurture leads, segment audiences, and trigger campaigns at precisely the right moment. Email sequences, CRM integrations, behavioral triggers—all orchestrated to scale your impact.",
    extended: "We've built automation systems for companies processing millions of customer interactions monthly. Our workflows integrate with HubSpot, Salesforce, Marketo, and custom CRM solutions. We design intelligent drip campaigns with dynamic content personalization, set up lead scoring models that surface your hottest prospects, and build reporting dashboards that give your team real-time visibility into pipeline health. The goal: your marketing works while you sleep, converting and nurturing at scale without losing the human touch.",
    tags: ["Email Flows", "CRM Integration", "Lead Scoring", "Behavioral Triggers", "Personalization"],
    accent: "primary",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Prompt Engineering",
    tagline: "Mastering the AI Conversation.",
    body: "We craft precision prompts and AI workflows that generate on-brand creative assets, marketing copy, and data insights at scale. Our prompt engineering practice is a competitive advantage that accelerates production while maintaining quality.",
    extended: "We've developed proprietary prompt frameworks for brand-consistent content generation, image creation pipelines, and automated creative QA systems. Our prompt engineers understand the nuances of different AI models—when to use chain-of-thought reasoning, how to structure few-shot examples for brand voice consistency, and how to build guardrails that prevent off-brand outputs. We train your team on our methodologies and build custom GPTs and AI agents tailored to your specific creative workflows, multiplying your output without multiplying your headcount.",
    tags: ["AI Workflows", "Creative Prompts", "Content Generation", "Custom GPTs", "Brand AI"],
    accent: "secondary",
  },
  {
    icon: Globe,
    number: "07",
    title: "Web Design",
    tagline: "Websites That Win Awards & Customers.",
    body: "We design and build high-performance websites that look like nothing else on the internet. Responsive, blazing fast, and accessibility-first—from microsites to complex platforms.",
    extended: "Every website we build scores 90+ on Lighthouse across all metrics. We use modern frameworks (React, Next.js, Astro) with a focus on Core Web Vitals, semantic HTML, and WCAG 2.1 AA compliance. Our design approach combines editorial typography, cinematic imagery, and micro-interactions that create moments of delight without sacrificing load time. We've built everything from single-page product launches to enterprise SaaS platforms with complex data visualization dashboards. Every site ships with responsive design, dark mode support, and analytics integration.",
    tags: ["Responsive Design", "Performance", "Accessibility", "Animation", "CMS Integration"],
    accent: "primary",
  },
  {
    icon: Cpu,
    number: "08",
    title: "Software Design with AI",
    tagline: "AI-Native Product Design.",
    body: "We design software products that leverage AI at their core—intelligent dashboards, generative content tools, predictive interfaces, and AI-powered user experiences.",
    extended: "We sit at the intersection of product design, AI engineering, and user experience. We design AI-powered products where the technology enhances rather than complicates the user's workflow. Our portfolio includes intelligent content management systems, predictive analytics dashboards, conversational interfaces, and generative design tools. We handle the full spectrum: from defining the AI interaction patterns and designing the training data feedback loops to crafting the UI that makes complex AI outputs feel intuitive and trustworthy to end users.",
    tags: ["AI Integration", "Product Design", "Intelligent UI", "Generative Tools", "ML Interfaces"],
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
        {/* Decorative accent shapes */}
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-secondary/5 blur-3xl" />
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

      {/* ── USE CASES LIST ── */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-8">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.number} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative overflow-hidden border border-border p-8 md:p-10 transition-all duration-500 hover:border-${uc.accent}/40`}
                >
                  {/* Background glow */}
                  <div
                    className={`absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl transition-all duration-700 ${
                      uc.accent === "primary"
                        ? "bg-primary/3 group-hover:bg-primary/8"
                        : "bg-secondary/3 group-hover:bg-secondary/8"
                    }`}
                  />
                  {/* Decorative corner line */}
                  <div className={`absolute top-0 right-0 w-20 h-px ${uc.accent === "primary" ? "bg-primary/20" : "bg-secondary/20"}`} />
                  <div className={`absolute top-0 right-0 w-px h-20 ${uc.accent === "primary" ? "bg-primary/20" : "bg-secondary/20"}`} />

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
                              uc.accent === "primary" ? "text-primary" : "text-secondary"
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
                        uc.accent === "primary" ? "text-primary/70" : "text-secondary/70"
                      }`}
                    >
                      {uc.tagline}
                    </p>

                    {/* Body */}
                    <p className="mb-4 font-display text-sm font-light leading-relaxed text-muted-foreground">
                      {uc.body}
                    </p>

                    {/* Extended content */}
                    <p className="mb-6 font-display text-sm font-light leading-relaxed text-muted-foreground/80">
                      {uc.extended}
                    </p>

                    {/* Divider */}
                    <div className={`h-px w-16 mb-6 ${uc.accent === "primary" ? "bg-primary/30" : "bg-secondary/30"}`} />

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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section className="border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
              How We Work
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Our{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Process.</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discover", desc: "Deep-dive into your brand, market, and objectives. We listen before we create." },
              { step: "02", title: "Strategize", desc: "Define the approach, set success metrics, and align creative vision with business goals." },
              { step: "03", title: "Execute", desc: "Craft, build, and refine. Iterative sprints with transparent communication at every stage." },
              { step: "04", title: "Amplify", desc: "Launch, measure, and optimize. We don't walk away—we ensure the work performs." },
            ].map((p) => (
              <StaggerItem key={p.step}>
                <div className="relative border border-border p-6 transition-all duration-300 hover:border-primary/40 group">
                  <div className="absolute -top-3 left-6 bg-background px-2">
                    <span className="font-display text-xs font-bold tracking-widest text-primary">{p.step}</span>
                  </div>
                  <h4 className="mt-2 mb-3 font-display text-lg font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-lines opacity-15" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
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
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-4 bg-primary px-12 py-5 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue"
              >
                Start a Conversation
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
