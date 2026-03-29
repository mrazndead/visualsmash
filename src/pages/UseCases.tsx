import { motion } from "framer-motion";
import {
  Palette, BarChart3, MousePointer2, Fingerprint,
  Workflow, Sparkles, Globe, Cpu, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SEO } from "@/components/SEO";
import usecasesVisual from "@/assets/usecases-visual.jpg";

const useCases = [
  {
    icon: Palette, number: "01", title: "Graphic Design",
    tagline: "Visuals That Stop Thumbs.",
    body: "From editorial layouts and social media campaigns to large-format print and packaging—our design work is rooted in 20+ years of Fortune 500 visual storytelling. Every composition is deliberate, every color choice strategic.",
    extended: "We've designed everything from Super Bowl campaign assets to luxury real estate brochures that sell $50M properties. Our process starts with deep brand immersion—understanding your audience's visual language before we touch a single pixel. The result is design that doesn't just look beautiful; it performs. Higher engagement rates, stronger brand recall, and creative that your competitors wish they'd made first.",
    tags: ["Print & Digital", "Social Assets", "Packaging", "Editorial", "Campaign Creative"],
    accent: "primary" as const,
  },
  {
    icon: BarChart3, number: "02", title: "Technical Marketing",
    tagline: "Data-Driven Campaigns That Convert.",
    body: "We architect multi-channel marketing strategies backed by analytics, A/B testing, and performance optimization. Two decades of running campaigns for Fortune 500 brands taught us that creativity without measurement is just decoration.",
    extended: "Our technical marketing practice bridges the gap between creative intuition and hard data. We build attribution models, set up conversion tracking architectures, and design experiments that reveal what actually moves your audience. From programmatic ad strategies to SEO-optimized content ecosystems, we engineer marketing machines that compound over time.",
    tags: ["Analytics", "A/B Testing", "Performance", "Multi-Channel", "Attribution"],
    accent: "secondary" as const,
  },
  {
    icon: MousePointer2, number: "03", title: "UX Design",
    tagline: "Experiences That Feel Inevitable.",
    body: "We obsess over the human side of digital. User research, journey mapping, wireframing, prototyping, and interaction design—we engineer every touchpoint to eliminate friction and maximize delight.",
    extended: "Our UX process is rigorous and research-driven. We conduct stakeholder interviews, competitive audits, user testing sessions, and heuristic evaluations before designing a single screen. We create detailed user personas, map complete customer journeys, build interactive prototypes in Figma, and validate every major decision with real users.",
    tags: ["User Research", "Journey Mapping", "Prototyping", "Interaction Design", "Usability Testing"],
    accent: "primary" as const,
  },
  {
    icon: Fingerprint, number: "04", title: "Branding",
    tagline: "Identities That Outlast Trends.",
    body: "We build brand ecosystems—not just logos. From naming and positioning to visual identity systems, brand guidelines, and voice architecture. Your brand should be recognized in a split second and remembered forever.",
    extended: "Our branding process begins with strategic positioning—finding the white space in your market where your brand can own a category. We develop comprehensive brand architectures including logo systems, typography pairings, color systems with accessibility baked in, photography direction, and detailed brand guidelines.",
    tags: ["Brand Strategy", "Visual Identity", "Guidelines", "Voice & Tone", "Naming"],
    accent: "secondary" as const,
  },
  {
    icon: Workflow, number: "05", title: "Marketing Automation",
    tagline: "Intelligent Systems, Zero Waste.",
    body: "We design and deploy marketing automation pipelines that nurture leads, segment audiences, and trigger campaigns at precisely the right moment. Email sequences, CRM integrations, behavioral triggers—all orchestrated to scale your impact.",
    extended: "We've built automation systems for companies processing millions of customer interactions monthly. Our workflows integrate with HubSpot, Salesforce, Marketo, and custom CRM solutions. We design intelligent drip campaigns with dynamic content personalization and build reporting dashboards that give your team real-time visibility.",
    tags: ["Email Flows", "CRM Integration", "Lead Scoring", "Behavioral Triggers", "Personalization"],
    accent: "primary" as const,
  },
  {
    icon: Sparkles, number: "06", title: "Prompt Engineering",
    tagline: "Mastering the AI Conversation.",
    body: "We craft precision prompts and AI workflows that generate on-brand creative assets, marketing copy, and data insights at scale. Our prompt engineering practice is a competitive advantage that accelerates production while maintaining quality.",
    extended: "We've developed proprietary prompt frameworks for brand-consistent content generation, image creation pipelines, and automated creative QA systems. We train your team on our methodologies and build custom GPTs and AI agents tailored to your specific creative workflows.",
    tags: ["AI Workflows", "Creative Prompts", "Content Generation", "Custom GPTs", "Brand AI"],
    accent: "secondary" as const,
  },
  {
    icon: Globe, number: "07", title: "Web Design",
    tagline: "Websites That Win Awards & Customers.",
    body: "We design and build high-performance websites that look like nothing else on the internet. Responsive, blazing fast, and accessibility-first—from microsites to complex platforms.",
    extended: "Every website we build scores 90+ on Lighthouse across all metrics. We use modern frameworks with a focus on Core Web Vitals, semantic HTML, and WCAG 2.1 AA compliance. Our design approach combines editorial typography, cinematic imagery, and micro-interactions that create moments of delight.",
    tags: ["Responsive Design", "Performance", "Accessibility", "Animation", "CMS Integration"],
    accent: "primary" as const,
  },
  {
    icon: Cpu, number: "08", title: "Software Design with AI",
    tagline: "AI-Native Product Design.",
    body: "We design software products that leverage AI at their core—intelligent dashboards, generative content tools, predictive interfaces, and AI-powered user experiences.",
    extended: "We sit at the intersection of product design, AI engineering, and user experience. We design AI-powered products where the technology enhances rather than complicates the user's workflow. Our portfolio includes intelligent content management systems, predictive analytics dashboards, and generative design tools.",
    tags: ["AI Integration", "Product Design", "Intelligent UI", "Generative Tools", "ML Interfaces"],
    accent: "secondary" as const,
  },
];

export default function UseCases() {
  return (
    <div className="pt-24">
      <SEO
        title="Use Cases"
        description="Explore our eight core disciplines: graphic design, technical marketing, UX design, branding, marketing automation, prompt engineering, web design, and AI-powered software design."
        canonical="https://visualsmash.lovable.app/use-cases"
      />

      {/* ── HEADER ── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
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
              <span className="font-editorial italic font-light text-accent-gradient">Cases.</span>
            </motion.h1>
          </div>
          <ScrollReveal delay={0.3}>
            <p className="mt-8 max-w-2xl font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              Eight disciplines. Twenty years of mastery. Every one battle-tested across Fortune 500
              campaigns, luxury brands, and high-growth startups.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VISUAL BREAK ── */}
      <section className="relative overflow-hidden">
        <img
          src={usecasesVisual}
          alt="Abstract 3D shapes representing our creative capabilities"
          loading="lazy"
          width={1280}
          height={600}
          className="w-full h-40 md:h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </section>

      {/* ── USE CASES LIST ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="space-y-8">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.number} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden border border-border p-8 md:p-10 transition-all duration-500 hover:border-primary/40"
                >
                  <div className={`absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl transition-all duration-700 ${
                    uc.accent === "primary" ? "bg-primary/3 group-hover:bg-primary/8" : "bg-secondary/3 group-hover:bg-secondary/8"
                  }`} />
                  <div className={`absolute top-0 right-0 w-20 h-px ${uc.accent === "primary" ? "bg-primary/20" : "bg-secondary/20"}`} />
                  <div className={`absolute top-0 right-0 w-px h-20 ${uc.accent === "primary" ? "bg-primary/20" : "bg-secondary/20"}`} />

                  <div className="relative">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center border transition-colors duration-300 ${
                          uc.accent === "primary" ? "border-primary/30 group-hover:border-primary/60" : "border-secondary/30 group-hover:border-secondary/60"
                        }`}>
                          <uc.icon size={20} className={`transition-colors duration-300 ${uc.accent === "primary" ? "text-primary" : "text-secondary"}`} />
                        </div>
                        <span className="font-display text-xs font-bold tracking-widest text-muted-foreground/40">{uc.number}</span>
                      </div>
                    </div>

                    <h3 className="mb-2 font-display text-2xl font-black uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-gradient md:text-3xl">
                      {uc.title}
                    </h3>
                    <p className={`mb-4 font-editorial text-sm italic ${uc.accent === "primary" ? "text-primary/70" : "text-secondary/70"}`}>
                      {uc.tagline}
                    </p>
                    <p className="mb-4 font-display text-sm font-light leading-relaxed text-muted-foreground">{uc.body}</p>
                    <p className="mb-6 font-display text-sm font-light leading-relaxed text-muted-foreground/80">{uc.extended}</p>

                    <div className={`h-px w-16 mb-6 ${uc.accent === "primary" ? "bg-primary/30" : "bg-secondary/30"}`} />

                    <div className="flex flex-wrap gap-2">
                      {uc.tags.map((tag) => (
                        <span key={tag} className={`font-display text-[10px] font-bold uppercase tracking-widest border px-3 py-1 transition-colors duration-300 ${
                          uc.accent === "primary"
                            ? "border-primary/20 text-primary/60 group-hover:border-primary/40 group-hover:text-primary/80"
                            : "border-secondary/20 text-secondary/60 group-hover:border-secondary/40 group-hover:text-secondary/80"
                        }`}>
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
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">How We Work</p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Our <span className="font-editorial italic font-light text-accent-gradient">Process.</span>
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
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">{p.desc}</p>
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
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal>
            <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">Ready to Start?</p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Your Next <span className="font-editorial italic font-light text-accent-gradient">Move.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
              Whether it's one discipline or all eight—we tailor our approach to your ambitions.
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
