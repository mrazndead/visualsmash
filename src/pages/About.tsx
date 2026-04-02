import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target, Zap, Brain, MousePointer2, Heart, Shield, Eye, TrendingUp, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";
import { SEO } from "@/components/SEO";
import { LineReveal, FloatingOrb, ParallaxLayer, MaskReveal, RotatingBorder } from "@/components/AnimatedElements";
import aboutPortrait from "@/assets/about-portrait.jpg";

const timeline = [
  { year: "2004", title: "The Genesis", body: "Started in San Francisco's tech scene, shaping brands for emerging companies during the dot-com renaissance. Cut teeth on high-stakes product launches and built a reputation for creative work that actually moved the needle." },
  { year: "2008", title: "Fortune 500 Elevation", body: "Joined the big leagues. Creative direction for household-name tech and retail giants. Led teams of 30+ across multi-million dollar campaigns." },
  { year: "2011", title: "Technical Marketing Mastery", body: "Deepened the analytics muscle. Built data-driven creative frameworks that merged performance marketing with high-end design." },
  { year: "2013", title: "Real Estate Reimagined", body: "Pioneered luxury real estate branding in the Bay Area. Transformed how property is marketed through cinematic storytelling and editorial-grade design." },
  { year: "2017", title: "Fashion Forward", body: "Bridged the gap between Silicon Valley and high fashion. Art direction for capsule collections, editorial campaigns, and global retail identities." },
  { year: "2019", title: "UX as Strategy", body: "Embedded a full-scale UX design practice—user research, journey mapping, interaction design, and prototype testing for digital products reaching millions." },
  { year: "2021", title: "AI Integration Pioneers", body: "Became early adopters of applied AI for creative work. Built generative imagery pipelines, AI-accelerated production systems, and intelligent campaign tools." },
  { year: "2023", title: "Full-Stack Creative AI", body: "Launched proprietary AI workflows combining prompt engineering, custom GPTs, and automated creative QA. Clients get 3x the output at higher quality." },
  { year: "Now", title: "Redefining What's Possible", body: "Merging 20+ years of creative mastery with AI-native workflows and rigorous UX strategy. We're just getting started." },
];

const values = [
  { icon: Target, title: "Precision", body: "Every pixel is intentional. We don't ship work we're not proud of—ever." },
  { icon: Zap, title: "Velocity", body: "We move fast without breaking things. Agile creative sprints powered by AI-accelerated workflows." },
  { icon: Brain, title: "AI-Augmented", body: "We deploy AI strategically—generative assets, intelligent automation, and data-driven creative decisions." },
  { icon: MousePointer2, title: "UX-First", body: "Every experience starts with the human using it. Research, flows, prototypes—beauty that works." },
  { icon: Users, title: "Collaboration", body: "Your vision amplified by our craft. We become extensions of your team, not vendors." },
  { icon: Award, title: "Excellence", body: "Not award-winning because we chase trophies—award-winning because mediocrity isn't in our vocabulary." },
];

const approach = [
  { icon: Eye, title: "See Differently", body: "We start by questioning everything. The best creative work comes from challenging assumptions and finding angles others miss." },
  { icon: Heart, title: "Craft With Care", body: "Every project gets our full creative weight. Limited client roster means unlimited dedication to the work that matters—yours." },
  { icon: Shield, title: "Deliver With Certainty", body: "We set expectations clearly, communicate transparently, and deliver on time. After 20 years, our process is battle-hardened." },
];

const capabilities = [
  { title: "Brand Strategy & Positioning", desc: "Market research, competitive analysis, audience personas, and strategic brand frameworks that define your market position." },
  { title: "Creative Production at Scale", desc: "From single-asset deliverables to multi-channel campaign rollouts with hundreds of variations—all brand-consistent." },
  { title: "Digital Transformation", desc: "We help traditional businesses modernize their creative operations with AI tools, automation, and data-driven decision making." },
  { title: "Content Ecosystems", desc: "Integrated content strategies spanning social, email, web, print, and emerging channels—all working together as a unified system." },
];

export default function About() {
  return (
    <div className="pt-24">
      <SEO
        title="About"
        description="Visual Smash is a boutique creative agency founded in 2004. 20+ years of Fortune 500 brand design, UX strategy, and AI-powered creative direction from the San Francisco Bay Area."
        canonical="https://visualsmash.lovable.app/about"
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <FloatingOrb size={350} color="primary" x="85%" y="10%" delay={0} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <ScrollReveal>
                <LineReveal className="mb-6" />
                <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">About Visual Smash</p>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="text-display font-display font-black uppercase leading-none text-foreground">
                    We Are the{" "}
                    <span className="font-editorial italic font-light text-accent-gradient">Weapon</span>{" "}
                    in Your Arsenal.
                  </h1>
                </motion.div>
              </div>
              <ScrollReveal delay={0.3}>
                <p className="mt-8 font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                  Visual Smash is a boutique creative agency born from 20+ years of
                  battle-tested experience at the intersection of technology, luxury,
                  and culture. We don't make things look pretty—we make things matter.
                </p>
                <p className="mt-4 font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                  Founded in the San Francisco Bay Area, our work has shaped the
                  identities of Fortune 500 companies across tech, real estate,
                  fashion, and retail.
                </p>
                <p className="mt-4 font-display text-sm font-light leading-relaxed text-muted-foreground/80">
                  We're not a big agency pretending to care—we're a small, surgical team
                  of senior creatives who chose quality over scale. Every engagement gets
                  our founder's direct involvement and the full weight of two decades of
                  Fortune 500 creative leadership.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4} className="mt-10">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="group flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all hover:shadow-glow-blue"
                  >
                    Work With Us <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    src={aboutPortrait}
                    alt="Visual Smash abstract creative"
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full object-cover"
                  />
                  <div className="absolute -bottom-3 -right-3 h-full w-full border border-primary/30 -z-10" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 glass border border-surface-border p-6 shadow-glass"
                >
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Founded</p>
                  <p className="font-display text-3xl font-black text-foreground">2004</p>
                  <p className="mt-1 font-display text-xs text-muted-foreground">Bay Area · California</p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <LineReveal className="mb-6" />
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Philosophy</p>
              Why We're <span className="font-editorial italic font-light text-accent-gradient">Different.</span>
            </h2>
          </ScrollReveal>
          <div className="grid gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div className="space-y-6">
                <p className="font-display text-base font-light leading-relaxed text-muted-foreground">
                  Most agencies scale by hiring junior talent and spreading senior oversight thin.
                  We took the opposite approach. Visual Smash stays deliberately small so every
                  project gets the strategic depth and creative horsepower of a 20-year veteran.
                </p>
                <p className="font-display text-base font-light leading-relaxed text-muted-foreground">
                  We were one of the first creative agencies to go all-in on AI—not as a gimmick,
                  but as a genuine force multiplier. Our AI-augmented workflows mean we deliver
                  Fortune 500-caliber creative at startup speed.
                </p>
                <p className="font-display text-base font-light leading-relaxed text-muted-foreground">
                  The result: work that's indistinguishable from the output of agencies ten times our size,
                  delivered faster, with more strategic depth, and without the bureaucracy.
                </p>
              </div>
            </ScrollReveal>
            <StaggerContainer className="space-y-6">
              {approach.map((a, i) => (
                <StaggerItem key={a.title}>
                  <motion.div
                    whileHover={{ x: 6, y: -2 }}
                    className="group flex gap-5 p-6 border border-border transition-all duration-300 hover:border-primary/40 border-glow"
                  >
                    <div>
                      <h4 className="mb-2 font-display text-base font-black uppercase tracking-tight text-foreground">{a.title}</h4>
                      <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">{a.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── EXTENDED CAPABILITIES ── */}
      <section className="py-24 relative">
        <FloatingOrb size={250} color="secondary" x="90%" y="20%" delay={1} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">What We Bring</p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Core <span className="font-editorial italic font-light text-accent-gradient">Capabilities.</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <StaggerItem key={c.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group border border-border p-8 transition-all duration-300 hover:border-primary/40 h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-secondary transition-colors" />
                    <h3 className="font-display text-base font-black uppercase tracking-tight text-foreground">{c.title}</h3>
                  </div>
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">{c.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 border-t border-border relative">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <TextScramble text="Our Values" className="text-title font-display font-black uppercase text-foreground" tag="h2" />
          </ScrollReveal>
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div whileHover={{ y: -4 }} className="group glass border border-surface-border p-8 transition-all duration-300 hover:border-primary/40">
                  <v.icon size={20} className="mb-4 text-primary transition-colors group-hover:text-secondary" />
                  <h3 className="mb-3 font-display text-lg font-black uppercase tracking-tight text-foreground">{v.title}</h3>
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">{v.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-20">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Twenty Years. <span className="font-editorial italic font-light text-accent-gradient">One Vision.</span>
            </h2>
            <p className="mt-6 max-w-2xl font-display text-base font-light text-muted-foreground">
              From the ashes of the dot-com era to the frontier of AI-powered creative.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent ml-[3px] hidden md:block" />
            <div className="space-y-0 md:pl-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.04}>
                  <div className="group relative grid gap-4 border-b border-border py-10 md:grid-cols-[120px_1fr]">
                    <div className="absolute -left-[15px] top-11 hidden h-[8px] w-[8px] rounded-full bg-primary ring-2 ring-background ring-offset-1 ring-offset-primary/20 md:block" />
                    <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary pt-1">{item.year}</div>
                    <div>
                      <h3 className="mb-2 font-display text-xl font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">{item.title}</h3>
                      <p className="font-display text-sm font-light leading-relaxed text-muted-foreground max-w-2xl">{item.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI + UX CAPABILITIES ── */}
      <section className="py-24 border-b border-border relative">
        <div className="absolute top-20 right-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Cutting Edge</p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              AI & UX <span className="font-editorial italic font-light text-accent-gradient">Expertise.</span>
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal direction="left">
              <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden border border-border p-10 transition-all duration-300 hover:border-primary/50">
                <div className="absolute top-0 right-0 h-32 w-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                <Brain size={28} className="mb-6 text-primary" />
                <h3 className="mb-4 font-display text-2xl font-black uppercase tracking-tight text-foreground">AI Development</h3>
                <p className="font-display text-sm font-light leading-relaxed text-muted-foreground mb-4">
                  We're not just AI-aware—we're AI-native. We build and deploy generative creative pipelines,
                  AI-powered marketing automation, intelligent content systems, and custom tooling.
                </p>
                <p className="font-display text-sm font-light leading-relaxed text-muted-foreground/70 mb-6">
                  From custom GPTs trained on your brand voice to automated creative QA systems that catch
                  inconsistencies before they ship—we build AI that makes your team superhuman.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Generative Imagery", "AI Copywriting", "Automation Pipelines", "Custom GPTs"].map((tag) => (
                    <span key={tag} className="font-display text-[10px] font-bold uppercase tracking-widest border border-primary/30 px-3 py-1 text-primary/80">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden border border-border p-10 transition-all duration-300 hover:border-secondary/50">
                <div className="absolute top-0 right-0 h-32 w-32 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all duration-500" />
                <MousePointer2 size={28} className="mb-6 text-secondary" />
                <h3 className="mb-4 font-display text-2xl font-black uppercase tracking-tight text-foreground">User Experience Design</h3>
                <p className="font-display text-sm font-light leading-relaxed text-muted-foreground mb-4">
                  We obsess over how people feel when they interact with your brand digitally. From user
                  research to final interaction design—we engineer experiences that reduce friction.
                </p>
                <p className="font-display text-sm font-light leading-relaxed text-muted-foreground/70 mb-6">
                  Our UX practice has improved conversion rates by up to 340% for enterprise clients.
                  We don't guess—we test, validate, and iterate until the numbers prove the design works.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["User Research", "Journey Mapping", "Wireframing", "Prototyping", "Usability Testing"].map((tag) => (
                    <span key={tag} className="font-display text-[10px] font-bold uppercase tracking-widest border border-secondary/30 px-3 py-1 text-secondary/80">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CLIENT INDUSTRIES ── */}
      <section className="bg-muted/20 py-24 relative">
        <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-primary/3 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Industries</p>
            <h2 className="text-title font-display font-black uppercase text-foreground">Sectors We Dominate</h2>
            <p className="mt-4 max-w-xl font-display text-sm font-light text-muted-foreground">
              Two decades of cross-industry expertise means we bring unexpected creative insights
              from one sector to supercharge another.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Technology", sub: "SaaS · Startups · Enterprise" },
              { name: "Real Estate", sub: "Luxury · Commercial · Development" },
              { name: "Fashion & Retail", sub: "DTC · Editorial · E-Commerce" },
              { name: "Financial Services", sub: "Fintech · Banking · Insurance" },
            ].map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="flex flex-col gap-2 border border-border py-6 px-6 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 group">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 group-hover:bg-secondary transition-colors" />
                    <span className="font-display text-sm font-bold uppercase tracking-[0.1em] text-foreground">{industry.name}</span>
                  </div>
                  <span className="font-display text-xs font-light text-muted-foreground pl-[18px]">{industry.sub}</span>
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
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Ready to <span className="font-editorial italic font-light text-accent-gradient">Collaborate?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
              We take on a limited number of clients each quarter. If you're serious about
              creative that moves the needle, let's talk.
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
