import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Zap, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "150+", label: "Brands Elevated" },
  { value: "F500", label: "Fortune 500 Clients" },
  { value: "3×", label: "Awwwards Winner" },
];

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
    title: "Digital Experience",
    description:
      "Award-caliber web design and digital campaigns that convert browsers into believers. Code meets craft.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Creative Direction",
    description:
      "Strategic vision from a 20-year veteran of Fortune 500 campaigns. We don't follow trends—we set them.",
    icon: Award,
  },
];

const featuredWork = [
  { img: portfolio1, title: "NEXUS Identity", category: "Brand System · Tech" },
  { img: portfolio3, title: "VOGUE Collab", category: "Editorial · Fashion" },
  { img: portfolio4, title: "CloudArch UI", category: "Digital · Product" },
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
    <div ref={containerRef} className="relative">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-start justify-end overflow-hidden pb-16 pt-32"
      >
        {/* Background parallax */}
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroBg}
            alt="Visual Smash hero"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
        </motion.div>

        {/* Grid overlay */}
        <div className="absolute inset-0 z-[1] grid-lines opacity-30" />

        {/* Scan line */}
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "100vh"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12"
        >
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-10 bg-primary" />
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Creative Agency · Bay Area, CA
            </span>
          </motion.div>

          {/* Main headline */}
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
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: isLoaded ? "0%" : "100%" }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-hero font-display font-black uppercase text-foreground"
            >
              The Ordinary.
            </motion.h1>
          </div>

          {/* Sub copy */}
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                data-cursor-text="VIEW"
                className="group flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue"
              >
                View Work
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 right-12 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <ArrowDown size={14} className="text-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-border py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.value}>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-4xl font-black text-accent-gradient md:text-5xl">
                    {stat.value}
                  </span>
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden border-b border-border py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                Brand Identity
              </span>
              <span className="text-primary">·</span>
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                Digital Campaigns
              </span>
              <span className="text-primary">·</span>
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                Creative Direction
              </span>
              <span className="text-primary">·</span>
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                Motion Design
              </span>
              <span className="text-primary">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── SERVICES ── */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="mb-20 flex items-end justify-between">
              <div>
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
                to="/portfolio"
                className="hidden items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground md:flex underline-accent"
              >
                All Work <ArrowRight size={12} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-0 divide-y divide-border">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.number} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group flex items-start gap-8 py-10 transition-colors duration-300 hover:bg-muted/30 px-4"
                >
                  <span className="font-display text-xs font-bold tracking-widest text-muted-foreground/40 mt-1">
                    {svc.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                        {svc.title}
                      </h3>
                      <svc.icon
                        size={16}
                        className="mt-2 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                      />
                    </div>
                    <p className="mt-3 max-w-2xl font-display text-sm font-light leading-relaxed text-muted-foreground">
                      {svc.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section className="bg-muted/20 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-20">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Selected Work
            </p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Featured.
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid gap-4 md:grid-cols-3">
            {featuredWork.map((work, i) => (
              <StaggerItem key={work.title}>
                <Link to="/portfolio">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    data-cursor-text="VIEW"
                    className="group relative aspect-[4/5] overflow-hidden bg-muted"
                  >
                    <img
                      src={work.img}
                      alt={work.title}
                      loading="lazy"
                      width={800}
                      height={1000}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                        {work.category}
                      </p>
                      <h3 className="font-display text-xl font-black uppercase text-foreground">
                        {work.title}
                      </h3>
                    </div>
                    {/* Index number */}
                    <div className="absolute top-4 right-4 font-display text-xs font-bold text-muted-foreground/40">
                      0{i + 1}
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="mt-12 flex justify-center" delay={0.3}>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 border border-primary/40 px-10 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-glow-blue"
              >
                View All Work <ArrowRight size={14} />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative overflow-hidden py-40">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal>
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
                className="group inline-flex items-center gap-4 bg-primary px-12 py-5 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue"
              >
                Start a Conversation
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
