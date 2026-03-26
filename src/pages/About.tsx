import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Target, Zap, Brain, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";
import aboutPortrait from "@/assets/about-portrait.jpg";

const timeline = [
  {
    year: "2004",
    title: "The Genesis",
    body: "Cut teeth in San Francisco's burning-hot dot-com aftermath. Began shaping brands for emerging tech companies that would define the next decade.",
  },
  {
    year: "2008",
    title: "Fortune 500 Elevation",
    body: "Joined the big leagues. Creative direction for household-name tech and retail giants. Led teams of 30+. Delivered campaigns seen by millions.",
  },
  {
    year: "2013",
    title: "Real Estate Reimagined",
    body: "Pioneered luxury real estate branding in the Bay Area. Transformed how property is sold through cinematic storytelling and editorial-grade design.",
  },
  {
    year: "2017",
    title: "Fashion Forward",
    body: "Bridged the gap between Silicon Valley and high fashion. Art direction for capsule collections, editorial campaigns, and global retail identities.",
  },
  {
    year: "2019",
    title: "UX as Strategy",
    body: "Embedded full-scale UX design practice into the workflow—user research, journey mapping, interaction design, and prototype testing for digital products reaching millions of users.",
  },
  {
    year: "2021",
    title: "Visual Smash Founded",
    body: "After 17 years in-house, launched Visual Smash. The distillation of two decades of hard-won expertise into a boutique agency that refuses compromise.",
  },
  {
    year: "2023",
    title: "AI Integration",
    body: "Became early adopters and experts in applied AI for creative work—generative imagery, AI-accelerated production pipelines, and intelligent campaign tools that give clients an unfair advantage.",
  },
  {
    year: "Now",
    title: "Redefining What's Possible",
    body: "Merging 20 years of creative mastery with AI-native workflows and rigorous UX strategy. The result: faster, smarter, and more impactful work than any agency our size has any right to produce.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    body: "Every pixel is intentional. We don't ship work we're not proud of—ever.",
  },
  {
    icon: Zap,
    title: "Velocity",
    body: "We move fast without breaking things. Agile creative sprints that keep pace with your ambitions.",
  },
  {
    icon: Brain,
    title: "AI-Augmented",
    body: "We deploy AI strategically—generative assets, intelligent automation, and data-driven creative decisions—applied with human judgment, not as a shortcut.",
  },
  {
    icon: MousePointer2,
    title: "UX-First",
    body: "Every experience we design starts with the human using it. Research, flows, prototypes—beauty that actually works.",
  },
  {
    icon: Users,
    title: "Collaboration",
    body: "Your vision amplified by our craft. We become extensions of your team, not vendors.",
  },
  {
    icon: Award,
    title: "Excellence",
    body: "Not award-winning because we chase trophies—award-winning because mediocrity isn't in our vocabulary.",
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <ScrollReveal>
                <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  About Visual Smash
                </p>
              </ScrollReveal>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="text-display font-display font-black uppercase leading-none text-foreground">
                    We Are the{" "}
                    <span className="font-editorial italic font-light text-accent-gradient">
                      Weapon
                    </span>{" "}
                    in Your Arsenal.
                  </h1>
                </motion.div>
              </div>
              <ScrollReveal delay={0.3}>
                <p className="mt-8 font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                  Visual Smash is a boutique creative agency born from 20 years of
                  battle-tested experience at the intersection of technology, luxury,
                  and culture. We don't make things look pretty—we make things matter.
                </p>
                <p className="mt-4 font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                  Founded in the San Francisco Bay Area, our work has shaped the
                  identities of Fortune 500 companies across tech, real estate,
                  fashion, and retail. We bring that pedigree to every client we
                  choose to partner with.
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

            {/* Right — Portrait */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6 }}
                    src={aboutPortrait}
                    alt="Creative Director"
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full object-cover grayscale"
                  />
                  {/* Accent border */}
                  <div className="absolute -bottom-3 -right-3 h-full w-full border border-primary/30 -z-10" />
                </div>
                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 glass border border-surface-border p-6 shadow-glass"
                >
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Founded
                  </p>
                  <p className="font-display text-3xl font-black text-foreground">2021</p>
                  <p className="mt-1 font-display text-xs text-muted-foreground">
                    Bay Area · California
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <TextScramble
              text="Our Values"
              className="text-title font-display font-black uppercase text-foreground"
              tag="h2"
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group glass border border-surface-border p-8 transition-all duration-300 hover:border-primary/40"
                >
                  <v.icon
                    size={20}
                    className="mb-4 text-primary transition-colors group-hover:text-secondary"
                  />
                  <h3 className="mb-3 font-display text-lg font-black uppercase tracking-tight text-foreground">
                    {v.title}
                  </h3>
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-20">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Twenty Years.{" "}
              <span className="font-editorial italic font-light text-accent-gradient">
                One Vision.
              </span>
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent ml-[3px] hidden md:block" />

            <div className="space-y-0 md:pl-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.08}>
                  <div className="group relative grid gap-4 border-b border-border py-10 md:grid-cols-[120px_1fr]">
                    {/* Dot */}
                    <div className="absolute -left-[15px] top-11 hidden h-[8px] w-[8px] rounded-full bg-primary ring-2 ring-background ring-offset-1 ring-offset-primary/20 md:block" />
                    <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary pt-1">
                      {item.year}
                    </div>
                    <div>
                      <h3 className="mb-2 font-display text-xl font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="font-display text-sm font-light leading-relaxed text-muted-foreground max-w-2xl">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENT INDUSTRIES ── */}
      <section className="bg-muted/20 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">Industries</p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Sectors We Dominate
            </h2>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Technology", "Real Estate", "Fashion & Retail", "Financial Services"].map((industry) => (
              <StaggerItem key={industry}>
                <div className="flex items-center gap-3 border border-border py-6 px-6 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="font-display text-sm font-bold uppercase tracking-[0.1em] text-foreground">
                    {industry}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
