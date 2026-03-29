import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock, MessageSquare, Layers, Rocket } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";
import { SEO } from "@/components/SEO";
import contactVisual from "@/assets/contact-visual.jpg";

const contactInfo = [
  { icon: Mail, label: "Email", value: "visualsmash@gmail.com", href: "mailto:visualsmash@gmail.com" },
  { icon: MapPin, label: "Location", value: "San Francisco Bay Area, CA", href: null },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
];

const engagementTypes = [
  {
    icon: Rocket,
    title: "Full Brand Build",
    desc: "End-to-end brand identity, from strategy and naming through visual systems, guidelines, and launch assets. Typically 8-12 weeks.",
    ideal: "Startups, rebrandings, new product lines",
  },
  {
    icon: Layers,
    title: "Creative Retainer",
    desc: "Ongoing design, marketing, and creative direction on a monthly basis. Dedicated bandwidth for your brand's evolving needs.",
    ideal: "Growth-stage companies, marketing teams",
  },
  {
    icon: MessageSquare,
    title: "Project-Based",
    desc: "Focused engagements for specific deliverables—campaigns, websites, UX audits, AI workflow builds, or marketing automation setups.",
    ideal: "Targeted campaigns, one-time projects",
  },
];

const faqs = [
  {
    q: "What's your typical project timeline?",
    a: "Most projects run 4–12 weeks depending on scope. Brand identity builds average 8 weeks. Campaign creative can be as fast as 2 weeks. We'll give you a detailed timeline during our initial strategy call.",
  },
  {
    q: "Do you work with startups or only large companies?",
    a: "Both. We've shaped brands for pre-seed startups and managed creative for Fortune 500 giants. What matters to us is ambition—not company size. If you're serious about standing out, we want to talk.",
  },
  {
    q: "How do you use AI in your creative process?",
    a: "AI accelerates our workflow—not replaces it. We use AI for generative concepting, content scaling, automated QA, and intelligent campaign optimization. Every output is refined by senior creatives with decades of experience.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep experience in technology, luxury real estate, fashion & retail, and financial services. But our creative process is industry-agnostic—we've delivered standout work across 20+ verticals.",
  },
];

export default function Contact() {
  return (
    <div className="pt-24">
      <SEO
        title="Contact"
        description="Get in touch with Visual Smash. We're a selective creative agency accepting 2-3 new clients per quarter. Let's discuss your next project."
        canonical="https://visualsmash.lovable.app/contact"
      />

      {/* ── HEADER ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <ScrollReveal>
                <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  Get In Touch
                </p>
              </ScrollReveal>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-display font-display font-black uppercase text-foreground"
                >
                  Let's{" "}
                  <span className="font-editorial italic font-light text-accent-gradient">
                    Build
                  </span>{" "}
                  Something.
                </motion.h1>
              </div>
              <ScrollReveal delay={0.3}>
                <p className="mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
                  We're selective by design. Every client we take on gets our full
                  attention and best work. Reach out—if it's a fit, we'll make magic together.
                </p>
                <p className="mt-4 font-display text-sm font-light text-muted-foreground/70">
                  Whether you need a complete brand overhaul, a high-converting website, or an
                  AI-powered creative system—the first step is always a conversation.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative overflow-hidden hidden lg:block">
                <img
                  src={contactVisual}
                  alt="Abstract creative visual"
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <ScrollReveal className="mb-12">
                <div className="h-px w-full bg-gradient-to-r from-primary to-secondary mb-8" />
                <TextScramble
                  text="Contact Details"
                  className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground"
                  tag="p"
                />
              </ScrollReveal>

              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <ScrollReveal key={info.label} delay={i * 0.1}>
                    <div className="group flex items-start gap-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                        <info.icon size={14} />
                      </div>
                      <div>
                        <p className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a href={info.href} className="font-display text-sm text-foreground hover:text-primary transition-colors underline-accent">
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-display text-sm text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.4} className="mt-12 pt-8 border-t border-border">
                <a
                  href="mailto:visualsmash@gmail.com"
                  className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue"
                >
                  <Mail size={14} />
                  Email Us Directly
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </ScrollReveal>
            </div>

            {/* Availability */}
            <div>
              <ScrollReveal delay={0.2} className="mb-8">
                <div className="glass border border-border p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-secondary">
                      Currently Accepting Projects
                    </span>
                  </div>
                  <p className="font-display text-sm text-muted-foreground leading-relaxed">
                    We take on 2–3 new client partnerships per quarter to ensure every engagement
                    receives our full creative weight. Reach out early to secure your spot.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h3 className="font-display text-lg font-black uppercase tracking-tight text-foreground mb-4">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "01", text: "You email us with a brief overview of your project or challenge." },
                    { step: "02", text: "We schedule a 30-minute discovery call within 48 hours." },
                    { step: "03", text: "We send a tailored proposal with scope, timeline, and investment." },
                    { step: "04", text: "Once aligned, we kick off with a deep-dive strategy session." },
                  ].map((s) => (
                    <div key={s.step} className="flex items-start gap-4 group">
                      <span className="font-display text-xs font-bold tracking-widest text-primary mt-0.5">{s.step}</span>
                      <p className="font-display text-sm font-light text-muted-foreground">{s.text}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT TYPES ── */}
      <section className="py-24 border-y border-border relative">
        <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-secondary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
              How We Work Together
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Engagement{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Models.</span>
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {engagementTypes.map((e) => (
              <StaggerItem key={e.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group border border-border p-8 h-full flex flex-col transition-all duration-300 hover:border-primary/40"
                >
                  <e.icon size={24} className="text-primary mb-6 group-hover:text-secondary transition-colors" />
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-foreground mb-3">
                    {e.title}
                  </h3>
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground mb-4 flex-1">
                    {e.desc}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-display text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Ideal for</p>
                    <p className="font-display text-xs text-primary/80 mt-1">{e.ideal}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
              Common Questions
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              FAQ.
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl space-y-0 divide-y divide-border">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="py-8 group">
                  <h3 className="font-display text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {faq.q}
                  </h3>
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-lines opacity-15" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Your Move,{" "}
              <span className="font-editorial italic font-light text-accent-gradient">
                Make It.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
              The best creative partnerships start with a simple email.
              Tell us what you're building—we'll tell you how we can help.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mt-10">
            <a
              href="mailto:visualsmash@gmail.com"
              className="group inline-flex items-center gap-4 bg-primary px-12 py-5 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue"
            >
              visualsmash@gmail.com
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
