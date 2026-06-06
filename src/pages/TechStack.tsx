import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles, Figma, Globe, Zap, Map, Layout, Palette, Wand2, Image as ImageIcon,
  PenTool, Shapes, Box, Code2, Wind, Terminal, ShieldCheck, Network, Workflow,
  Users, Rocket, Newspaper,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const tools = [
  { name: "Google Stitch", desc: "AI-native canvas for vibe designing and rapid UI prototyping.", icon: Sparkles },
  { name: "Figma", desc: "The gold standard for collaborative UI design and interactive prototypes.", icon: Figma },
  { name: "Webflow", desc: "High-end visual development for professional, custom-coded websites.", icon: Globe },
  { name: "Framer", desc: "Interactive landing pages with top-tier motion and animation.", icon: Zap },
  { name: "Relume", desc: "AI-powered sitemaps and wireframes for lightning-fast planning.", icon: Map },
  { name: "Wix Studio", desc: "Enterprise-grade platform for ultra-responsive agency builds.", icon: Layout },
  { name: "WordPress", desc: "The world's most flexible CMS powering scalable content-driven websites.", icon: Newspaper },
  { name: "Adobe CC", desc: "The essential suite for professional photo, vector, and video editing.", icon: Palette },
  { name: "Midjourney", desc: "State-of-the-art generative AI for high-fidelity concept art.", icon: Wand2 },
  { name: "Canva", desc: "Rapid content creation and automated brand-kit scaling.", icon: ImageIcon },
  { name: "Affinity", desc: "Professional vector design without the subscription model.", icon: PenTool },
  { name: "Recraft", desc: "Specialized AI for generating scalable, brand-consistent SVGs.", icon: Shapes },
  { name: "Blender", desc: "Open-source 3D modeling for immersive visual experiences.", icon: Box },
  { name: "Cursor", desc: "AI-first code editor for rapid application development.", icon: Code2 },
  { name: "Windsurf", desc: "Agentic IDE that automates complex coding workflows.", icon: Wind },
  { name: "Claude Code", desc: "Anthropic's CLI for high-level architectural debugging.", icon: Terminal },
  { name: "PydanticAI", desc: "Type-safe framework for building production-grade AI agents.", icon: ShieldCheck },
  { name: "LangGraph", desc: "Orchestration tool for complex, multi-agent AI systems.", icon: Network },
  { name: "n8n", desc: "Workflow automation connecting AI to 400+ SaaS platforms.", icon: Workflow },
  { name: "CrewAI", desc: "Multi-agent framework for collaborative AI task execution.", icon: Users },
  { name: "Antigravity", desc: "High-performance preview IDE for diverse LLM testing.", icon: Rocket },
];

const TechStack = () => {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yBack = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const parallaxIcons = [
    { Icon: Sparkles, top: "12%", left: "8%", size: 56 },
    { Icon: Figma, top: "22%", left: "82%", size: 44 },
    { Icon: Code2, top: "68%", left: "14%", size: 64 },
    { Icon: Wand2, top: "78%", left: "76%", size: 48 },
    { Icon: Network, top: "44%", left: "92%", size: 40 },
    { Icon: Workflow, top: "58%", left: "4%", size: 52 },
    { Icon: Box, top: "8%", left: "48%", size: 36 },
    { Icon: Terminal, top: "84%", left: "44%", size: 44 },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Visual Smash Tech Stack",
    description: "Tools and platforms Visual Smash uses to design, build, and automate.",
    itemListElement: tools.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      description: t.desc,
    })),
  };

  return (
    <>
      <SEO pageKey="tech-stack"
        title="Tech Stack | Stockton CA Creative Studio & Web Development"
        description="The elite tools Visual Smash — a Stockton, CA web design & marketing agency — uses to design, build, and automate: Figma, Webflow, Framer, WordPress, n8n, and more."
        canonical="https://visualsmash.lovable.app/tech-stack"
        keywords="Stockton CA marketing agency, Stockton CA creative studio, Stockton CA web development services, Stockton marketing agency, Stockton creative studio, Stockton web development, Stockton web developer, web development agency Stockton, web development services Stockton CA, web design agency Stockton CA, web designer Stockton, website design Stockton, marketing agency Stockton CA, creative agency Stockton, design agency Stockton, AI marketing agency Stockton, tech stack, design tools, AI tools, Figma, Webflow, Framer, WordPress, Midjourney, LangGraph, n8n, CrewAI, Central Valley web design agency"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
        {/* Parallax motion graphic background */}
        <motion.div
          style={{ opacity: opacityFade }}
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          {/* Layer 1 — deep grid */}
          <motion.div
            style={{ y: prefersReducedMotion ? 0 : yBack }}
            className="grid-lines absolute inset-0 opacity-20"
          />
          {/* Layer 2 — radial gradient orbs */}
          <motion.div
            style={{ y: prefersReducedMotion ? 0 : yMid }}
            className="absolute inset-0"
          >
            <div className="absolute top-[10%] left-[15%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-[5%] right-[10%] h-[520px] w-[520px] rounded-full bg-secondary/10 blur-[140px]" />
            <div className="absolute top-[40%] left-[55%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
          </motion.div>
          {/* Layer 3 — floating tool icons */}
          <motion.div
            style={{ y: prefersReducedMotion ? 0 : yFront }}
            className="absolute inset-0"
          >
            {parallaxIcons.map(({ Icon, top, left, size }, i) => (
              <motion.div
                key={i}
                className="absolute text-primary/15"
                style={{ top, left }}
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { y: [0, -12, 0], rotate: [0, 4, 0] }
                }
                transition={{
                  duration: 6 + (i % 4),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              >
                <Icon size={size} strokeWidth={1} />
              </motion.div>
            ))}
          </motion.div>
          {/* Fade overlay so the content stays readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6"
          >
            // Tech Stack
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero font-display"
          >
            The Modern <br />
            <span className="text-accent-gradient">Marketing Engine.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl font-editorial text-xl md:text-2xl text-muted-foreground italic leading-relaxed"
          >
            The elite tools we use to build, design, and automate for our clients.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="sr-only">Tools We Use</h2>
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <StaggerItem key={tool.name}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative h-full glass border border-surface-border p-6 hover-lift"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 opacity-0 group-hover:from-primary/5 group-hover:to-secondary/5 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      <div className="relative flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-primary/30 bg-primary/5 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                          <Icon size={20} strokeWidth={1.75} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display text-base font-bold uppercase tracking-wider text-foreground">
                            {tool.name}
                          </h3>
                          <p className="mt-2 font-display text-sm text-muted-foreground leading-relaxed">
                            {tool.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>

          <ScrollReveal>
            <div className="mt-24 glass border border-surface-border p-10 md:p-14 text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">
                // Stack-Agnostic, Outcome-Obsessed
              </p>
              <h2 className="text-title font-display max-w-3xl mx-auto">
                Tools change. <span className="text-accent-gradient">Craft doesn't.</span>
              </h2>
              <p className="mt-6 max-w-2xl mx-auto font-editorial italic text-lg text-muted-foreground">
                We pick the sharpest tool for the job — then orchestrate them into a single,
                automated production line for your brand.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default TechStack;