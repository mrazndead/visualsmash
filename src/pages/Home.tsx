import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Zap,
  Globe,
  Award,
  Brain,
  MousePointer2,
  Palette,
  BarChart3,
  Fingerprint,
  Workflow,
  Sparkles,
  Cpu,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";
import { SEO } from "@/components/SEO";
import { LineReveal, FloatingOrb, ParallaxLayer, MaskReveal, RotatingBorder } from "@/components/AnimatedElements";
import { lazy, Suspense } from "react";
const ProductionMultiplier = lazy(() => import("@/components/features/ProductionMultiplier"));
const PromptToPolish = lazy(() => import("@/components/features/PromptToPolish"));
import heroBg from "@/assets/hero-bg.webp";
import homeVisual from "@/assets/home-visual.webp";
import creativeBurst from "@/assets/creative-burst.webp";
import testimonialsBg from "@/assets/testimonials-bg.webp";
import fluidArt from "@/assets/fluid-art.webp";
import metalTexture from "@/assets/metallic-texture.webp";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "We craft unforgettable visual identities that cut through noise—from logo systems to full brand ecosystems built to dominate.",
    icon: Zap,
  },
  {
    number: "02",
    title: "User Experience Design",
    description:
      "Human-centered design that converts and delights. We architect digital experiences from user research through interaction design.",
    icon: MousePointer2,
  },
  {
    number: "03",
    title: "AI-Powered Creative",
    description:
      "We harness AI where it matters—accelerating production, unlocking generative visuals, and building intelligent marketing systems.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Digital Experience",
    description:
      "Award-caliber web design and digital campaigns that convert browsers into believers. Code meets craft.",
    icon: Globe,
  },
  {
    number: "05",
    title: "Creative Direction",
    description:
      "Strategic vision from a 20-year veteran of Fortune 500 campaigns. We don't follow trends—we set them.",
    icon: Award,
  },
  {
    number: "06",
    title: "Microsoft Power Automate",
    description:
      "Streamline workflows and eliminate repetitive tasks with Microsoft Power Automate—custom flows that connect your apps, data, and teams.",
    icon: Workflow,
  },
  {
    number: "07",
    title: "AI Agents with Microsoft 365",
    description:
      "Build intelligent AI agents for your business using Microsoft 365 Copilot Studio—automate decisions, surface insights, and scale productivity.",
    icon: Brain,
  },
  {
    number: "08",
    title: "Email Marketing Automation",
    description:
      "End-to-end email marketing programs—platform setup, list segmentation, lifecycle flows, and creative that turns inboxes into revenue channels.",
    icon: Workflow,
  },
  {
    number: "09",
    title: "Product Launch Content & Collateral",
    description:
      "Launch-ready content writing and creative collateral—messaging frameworks, sales decks, one-pagers, landing pages, and campaign assets engineered for liftoff.",
    icon: Award,
  },
  {
    number: "10",
    title: "AI Brain Development for Small Business",
    description:
      "Your digital consultant, trained on your company's content and brand guidelines. Visual Smash builds your AI Brain so your team can ask, create, and decide—on-brand, 24/7.",
    icon: Brain,
  },
];

const useCasePreview = [
  { icon: Palette, title: "Graphic Design", accent: "primary" },
  { icon: BarChart3, title: "Technical Marketing", accent: "secondary" },
  { icon: MousePointer2, title: "UX Design", accent: "primary" },
  { icon: Fingerprint, title: "Branding", accent: "secondary" },
  { icon: Workflow, title: "Marketing Automation", accent: "primary" },
  { icon: Sparkles, title: "Prompt Engineering", accent: "secondary" },
  { icon: Globe, title: "Web Design", accent: "primary" },
  { icon: Cpu, title: "Software Design with AI", accent: "secondary" },
];

const testimonials = [
  {
    quote: "Visual Smash transformed our entire brand presence. The ROI on their creative work was measurable within the first quarter.",
    author: "VP of Marketing",
    company: "Fortune 500 Tech Company",
    rating: 5,
  },
  {
    quote: "They don't just design—they think strategically. Every deliverable moved our business forward in ways we didn't expect.",
    author: "Chief Brand Officer",
    company: "Luxury Real Estate Group",
    rating: 5,
  },
  {
    quote: "Working with Visual Smash felt like adding a world-class creative department to our team overnight.",
    author: "Founder & CEO",
    company: "Series B SaaS Startup",
    rating: 5,
  },
  {
    quote: "Their AI-augmented process delivered what used to take months in weeks. The quality didn't just match our expectations—it exceeded them dramatically.",
    author: "Director of Digital",
    company: "Global Fashion Brand",
    rating: 5,
  },
  {
    quote: "We've worked with agencies on three continents. Visual Smash is the only one that truly understood both our brand DNA and our growth ambitions.",
    author: "CMO",
    company: "FinTech Unicorn",
    rating: 5,
  },
  {
    quote: "From our rebrand to our product launch, Visual Smash handled every detail. Our AI Brain now answers client questions before we even see them.",
    author: "Owner",
    company: "Central Valley Logistics",
    rating: 5,
  },
];

const whyUs = [
  "20+ years of Fortune 500 creative leadership",
  "AI-augmented workflows for faster, smarter output",
  "Senior-only team—no juniors learning on your dime",
  "Full-stack creative: strategy through execution",
  "Proven across tech, real estate, fashion & finance",
  "Boutique attention with enterprise-grade results",
];

const homeFaqs = [
  {
    q: "What does Visual Smash do?",
    a: "Visual Smash is a Bay Area creative agency offering brand identity, UX design, web design, AI-powered creative, marketing automation, email marketing automation, product launch content and collateral, AI Brain development for small businesses, Microsoft Power Automate workflows, and AI agents built with Microsoft 365 Copilot Studio.",
  },
  {
    q: "Where is Visual Smash located?",
    a: "We're based in the San Francisco Bay Area, California, and work with clients across the United States and globally.",
  },
  {
    q: "Who are your typical clients?",
    a: "We partner with Fortune 500 companies, growth-stage startups, luxury real estate developers, fashion and retail brands, and enterprise technology teams.",
  },
  {
    q: "How does AI fit into your creative process?",
    a: "AI is a force multiplier in our workflow. We use generative tools, custom GPTs, and prompt engineering pipelines to accelerate concepting, scale content, and run automated quality checks—while every output is refined by senior creatives.",
  },
  {
    q: "How do I start a project with Visual Smash?",
    a: "Email visualsmash@gmail.com or visit our Contact page. We schedule a 30-minute discovery call within 48 hours and follow up with a tailored proposal covering scope, timeline, and investment.",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.08]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      <SEO
        title="Web Design & Marketing Agency Stockton CA | Visual Smash"
        description="Web design & marketing agency in Stockton, CA. Custom websites, branding, UX, SEO & AI creative for Stockton, CA, Central Valley & Bay Area businesses."
        canonical="https://visualsmash.lovable.app"
        keywords="web design agency Stockton CA, web design agency in Stockton California, web designer Stockton, website design Stockton, custom web design Stockton, responsive web design Stockton, WordPress web design Stockton, Webflow agency Stockton, ecommerce web design Stockton, Shopify web design Stockton, marketing agency Stockton CA, marketing agency in Stockton California, creative agency Stockton, creative agency in Stockton CA, branding agency Stockton, design agency Stockton, advertising agency Stockton, digital marketing agency Stockton, graphic design Stockton, logo design Stockton, SEO agency Stockton, local SEO Stockton, social media marketing Stockton, AI marketing agency Stockton, UX design Stockton, marketing automation Stockton, Lodi web design, Tracy web design, Modesto web design, San Joaquin County web design, Central Valley web design agency, Bay Area web design agency"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["ProfessionalService", "LocalBusiness", "MarketingAgency"],
              "@id": "https://visualsmash.lovable.app/#organization",
              "name": "Visual Smash",
              "alternateName": ["Visual Smash Marketing Agency", "Visual Smash Creative Agency Stockton"],
              "description": "Marketing agency in Stockton, CA specializing in brand design, UX, AI-powered creative, web design, and marketing automation.",
              "url": "https://visualsmash.lovable.app",
              "email": "visualsmash@gmail.com",
              "areaServed": [
                { "@type": "City", "name": "Stockton" },
                { "@type": "City", "name": "Lodi" },
                { "@type": "City", "name": "Tracy" },
                { "@type": "City", "name": "Modesto" },
                { "@type": "City", "name": "Manteca" },
                { "@type": "AdministrativeArea", "name": "San Joaquin County" },
                { "@type": "AdministrativeArea", "name": "Central Valley, California" },
                { "@type": "AdministrativeArea", "name": "San Francisco Bay Area" }
              ],
              "priceRange": "$$$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Stockton",
                "addressRegion": "CA",
                "postalCode": "95202",
                "addressCountry": "US"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": 37.9577, "longitude": -121.2908 },
              "serviceType": ["Brand Identity", "UX Design", "AI-Powered Creative", "Web Design", "Marketing"],
              "foundingDate": "2004"
            },
            {
              "@type": "FAQPage",
              "mainEntity": homeFaqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            }
          ]
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-start justify-end overflow-hidden pb-16 pt-32"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroBg}
            alt="Visual Smash creative agency hero"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
        </motion.div>

        <div className="absolute inset-0 z-[1] grid-lines opacity-30" />

        {/* Floating orbs for depth */}
        <FloatingOrb size={300} color="primary" x="70%" y="20%" delay={0} />
        <FloatingOrb size={200} color="secondary" x="10%" y="60%" delay={2} />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 flex items-center gap-3"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-10 bg-primary origin-left"
            />
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Creative Agency
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: isLoaded ? "0%" : "100%" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-hero font-display font-black uppercase text-foreground"
            >
              We{" "}
              <span className="font-editorial italic font-light text-accent-gradient">
                Smash
              </span>
              <span className="sr-only"> The Ordinary.</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: isLoaded ? "0%" : "100%" }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-hero font-display font-black uppercase text-foreground"
              aria-hidden="true"
            >
              The Ordinary.
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-6 max-w-lg font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg"
          >
            Twenty years of disrupting Fortune 500 brands across tech, real estate,
            fashion, and retail. Award-winning creative direction for companies that
            refuse to be forgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/use-cases">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue animate-pulse-glow"
              >
                Explore Use Cases
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 border border-foreground/20 px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground/70 backdrop-blur-sm transition-all duration-300 hover:border-foreground/50 hover:text-foreground"
              >
                Start a Project
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 right-12 z-10 hidden flex-col items-center gap-2 md:flex"
        >
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <ArrowDown size={14} className="text-primary" />
          </motion.div>
        </motion.div>

        {/* Rotating decoration */}
        <RotatingBorder className="bottom-20 left-12 hidden lg:block opacity-20" />
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden border-b border-border py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              {["Brand Identity", "UX Design", "AI Brain Development", "Email Marketing Automation", "Product Launch Content", "Web Design", "Marketing Automation"].map((s) => (
                <span key={s} className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                  {s}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── VISUAL BREAK with parallax ── */}
      <ParallaxLayer speed={0.3}>
        <section className="relative overflow-hidden">
          <img
            src={homeVisual}
            alt="Abstract creative energy"
            loading="lazy" decoding="async"
            width={1280}
            height={720}
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </section>
      </ParallaxLayer>

      {/* ── WHY VISUAL SMASH ── */}
      <section className="py-24 relative">
        <FloatingOrb size={250} color="secondary" x="80%" y="10%" delay={1} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <ScrollReveal>
              <LineReveal className="mb-8" />
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Why Us
              </p>
              <h2 className="text-title font-display font-black uppercase text-foreground mb-6">
                The Unfair{" "}
                <span className="font-editorial italic font-light text-accent-gradient">Advantage.</span>
              </h2>
              <p className="font-display text-sm font-light leading-relaxed text-muted-foreground mb-8">
                We're not another agency with a slick pitch deck. We're a senior creative team
                with two decades of real results for real brands. When you work with Visual Smash,
                you get the strategic depth of a Fortune 500 creative department and the agility of
                a focused boutique studio—powered by AI workflows that multiply our output without
                sacrificing an ounce of quality.
              </p>
              <StaggerContainer className="space-y-3">
                {whyUs.map((item, i) => (
                  <StaggerItem key={item}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3 group"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 400 }}
                      >
                        <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                      </motion.div>
                      <span className="font-display text-sm text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>

            {/* Visual panel */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative overflow-hidden hidden lg:block">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                  src={fluidArt}
                  alt="Creative fluid art representing our dynamic approach"
                  loading="lazy" decoding="async"
                  width={600}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute -bottom-3 -right-3 h-full w-full border border-primary/20 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-32 relative border-t border-border">
        <FloatingOrb size={200} color="primary" x="5%" y="30%" delay={0.5} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="mb-20 flex items-end justify-between">
              <div>
                <LineReveal className="mb-6" delay={0.1} />
                <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  What We Do
                </p>
                <TextScramble
                  text="Capabilities"
                  className="text-display font-display font-black uppercase text-foreground"
                  tag="h2"
                />
              </div>
              <Link
                to="/use-cases"
                className="hidden items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground md:flex underline-accent"
              >
                All Use Cases <ArrowRight size={12} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-0 divide-y divide-border">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.number} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 12, backgroundColor: "rgba(255,255,255,0.02)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-start gap-8 py-10 transition-colors duration-300 px-4"
                >
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    className="font-display text-xs font-bold tracking-widest text-muted-foreground/40 mt-1 transition-colors group-hover:text-primary"
                  >
                    {svc.number}
                  </motion.span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                        {svc.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svc.icon size={16} className="mt-2 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                      </motion.div>
                    </div>
                    <p className="mt-3 max-w-2xl font-display text-sm font-light leading-relaxed text-muted-foreground">
                      {svc.description}
                    </p>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-secondary/10 to-transparent origin-left"
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATIVE VISUAL BREAK with parallax ── */}
      <ParallaxLayer speed={0.4}>
        <section className="relative overflow-hidden">
          <img
            src={creativeBurst}
            alt="Creative energy explosion"
            loading="lazy" decoding="async"
            width={1280}
            height={720}
            className="w-full h-40 md:h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-50" />
        </section>
      </ParallaxLayer>

      {/* ── PRODUCTION MULTIPLIER (interactive comparison) ── */}
      <section className="py-24 md:py-32 relative border-t border-border">
        <FloatingOrb size={300} color="primary" x="80%" y="20%" delay={0.2} />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
          <ScrollReveal className="mb-12 text-center">
            <LineReveal className="mx-auto max-w-xs mb-6" />
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Feature 01 · The Production Multiplier
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Why we ship <span className="font-editorial italic font-light text-accent-gradient">4× faster.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-display text-sm font-light text-muted-foreground">
              Drag the slider to compare a traditional agency timeline against our AI-augmented workflow — same Fortune 500 quality, a fraction of the runway.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <Suspense fallback={<div className="h-[460px] rounded-lg border border-surface-border bg-surface/30" />}>
              <ProductionMultiplier />
            </Suspense>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROMPT-TO-POLISH LAB ── */}
      <section className="py-24 md:py-32 relative border-t border-border">
        <FloatingOrb size={250} color="secondary" x="5%" y="50%" delay={0.4} />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <LineReveal className="mb-6" />
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Feature 02 · The Prompt-to-Polish Lab
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Spark → Engineering →{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Smash.</span>
            </h2>
            <p className="mt-4 max-w-2xl font-display text-sm font-light text-muted-foreground">
              Watch a five-word concept become a brand-grade asset. Our prompt engineers turn intent into deterministic instructions — then our creatives polish the output to flagship quality.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <Suspense fallback={<div className="h-[480px] rounded-lg border border-surface-border bg-surface/30" />}>
              <PromptToPolish />
            </Suspense>
          </ScrollReveal>
        </div>
      </section>

      {/* ── METALLIC VISUAL BAND ── */}
      <section className="relative overflow-hidden">
        <img
          src={metalTexture}
          alt="Premium metallic texture"
          loading="lazy" decoding="async"
          width={1920}
          height={600}
          className="w-full h-24 md:h-32 object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={testimonialsBg}
            alt=""
            loading="lazy" decoding="async"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <FloatingOrb size={300} color="primary" x="25%" y="20%" delay={0} />
        <FloatingOrb size={200} color="secondary" x="75%" y="60%" delay={3} />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16 text-center">
            <LineReveal className="mx-auto max-w-xs mb-8" />
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Client Voices
            </p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              What They{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Say.</span>
            </h2>
            <p className="mt-4 mx-auto max-w-lg font-display text-sm font-light text-muted-foreground">
              We let our work and our clients speak for us. Here's what the people behind the brands have to say.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative border border-border p-8 md:p-10 h-full flex flex-col transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] border-glow ${
                    i === 0 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="absolute top-0 left-0 w-16 h-16 border-r border-b border-primary/10 transition-colors group-hover:border-primary/30" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1, type: "spring", stiffness: 500 }}
                        className="h-1.5 w-1.5 rounded-full bg-secondary"
                      />
                    ))}
                  </div>

                  <Quote size={24} className="text-primary/20 mb-4 transition-colors group-hover:text-primary/40" />
                  <p className="font-editorial italic text-sm md:text-base leading-relaxed text-foreground/80 flex-1">
                    "{t.quote}"
                  </p>
                  <div className="mt-8 pt-4 border-t border-border">
                    <p className="font-display text-xs font-bold uppercase tracking-widest text-foreground">{t.author}</p>
                    <p className="font-display text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.company}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES PREVIEW ── */}
      <section className="py-32 relative">
        <RotatingBorder className="top-20 right-20 hidden lg:block opacity-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <LineReveal className="mb-8" />
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Expertise
            </p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Use Cases.
            </h2>
            <p className="mt-4 max-w-xl font-display text-sm font-light text-muted-foreground">
              Eight disciplines. Twenty years of mastery. Every one battle-tested across
              Fortune 500 campaigns, luxury brands, and high-growth startups.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {useCasePreview.map((uc, i) => (
              <StaggerItem key={uc.title}>
                <Link to="/use-cases">
                  <motion.div
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col items-center gap-4 border border-border p-6 md:p-8 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 border-glow hover-lift"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <uc.icon
                        size={24}
                        className={`transition-colors duration-300 ${
                          uc.accent === "primary"
                            ? "text-primary/60 group-hover:text-primary"
                            : "text-secondary/60 group-hover:text-secondary"
                        }`}
                      />
                    </motion.div>
                    <span className="text-center font-display text-xs font-bold uppercase tracking-[0.1em] text-foreground/70 group-hover:text-foreground transition-colors">
                      {uc.title}
                    </span>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="mt-12 flex justify-center" delay={0.3}>
            <Link to="/use-cases">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 border border-primary/40 px-10 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow-blue"
              >
                Explore All Use Cases <ArrowRight size={14} />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LOCAL COVERAGE ── */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-10">
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Local Coverage
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              A Stockton Web Design Agency Serving the{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Central Valley &amp; Bay Area.</span>
            </h2>
            <p className="mt-4 max-w-3xl font-display text-sm md:text-base font-light leading-relaxed text-muted-foreground">
              Visual Smash is a Stockton, California–based web design and marketing agency. We build custom websites,
              brand identities, SEO programs, ecommerce stores, and AI-powered marketing systems for businesses across
              San Joaquin County, the Central Valley, and the San Francisco Bay Area. Local roots, Fortune 500 craft.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap gap-2">
            {[
              "Stockton, CA", "Lodi", "Tracy", "Manteca", "Ripon", "Lathrop", "Modesto", "Turlock",
              "Sacramento", "Elk Grove", "San Joaquin County", "Stanislaus County", "Central Valley",
              "San Francisco", "Oakland", "San Jose", "Silicon Valley",
            ].map((c) => (
              <span
                key={c}
                className="border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/40 transition-colors px-3 py-1 font-display text-[10px] font-bold uppercase tracking-widest"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Common Questions
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Frequently Asked{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Questions.</span>
            </h2>
          </ScrollReveal>
          <div className="divide-y divide-border">
            {homeFaqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.05}>
                <div className="py-6">
                  <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2">
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

      {/* ── CTA BAND ── */}
      <section className="relative overflow-hidden py-40">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <FloatingOrb size={400} color="primary" x="50%" y="30%" delay={0} />
        <RotatingBorder className="bottom-10 left-10 hidden lg:block opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal>
            <LineReveal className="mx-auto max-w-xs mb-8" />
            <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Ready to Dominate?
            </p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Let's Build Something{" "}
              <span className="font-editorial italic font-light text-accent-gradient">
                Legendary.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
              We're selective about who we work with. If you're ready to invest in
              creative that actually moves culture, we want to hear from you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mt-10">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-4 bg-primary px-12 py-5 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue animate-pulse-glow"
              >
                Start a Conversation
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeAgency",
            name: "Visual Smash",
            description: "Award-winning creative agency in the San Francisco Bay Area specializing in brand design, UX, AI-powered creative, and marketing.",
            url: "https://visualsmash.lovable.app",
            foundingDate: "2004",
            areaServed: "San Francisco Bay Area, California",
            email: "visualsmash@gmail.com",
            knowsAbout: ["Brand Design", "UX Design", "AI Creative", "Marketing Automation", "Email Marketing Automation", "Product Launch Content", "AI Brain Development", "Web Design", "Prompt Engineering"],
          }),
        }}
      />
    </div>
  );
}
