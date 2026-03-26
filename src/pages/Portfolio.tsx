import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const projects = [
  {
    id: 1,
    title: "NEXUS",
    subtitle: "Brand Identity System",
    category: "Tech",
    year: "2023",
    img: portfolio1,
    tags: ["Brand Identity", "Type Design", "Art Direction"],
    span: "col-span-1 md:col-span-2 row-span-2",
    description:
      "Complete brand overhaul for a Series-C Silicon Valley AI company. Built a scalable visual language from zero—wordmark, color system, motion principles, and a 200-page brand bible that unified 400 employees across 12 countries.",
    client: "Nexus AI (Confidential)",
    scope: "Brand Strategy, Identity Design, Motion System",
    result: "147% increase in brand recognition. Featured in Communication Arts.",
  },
  {
    id: 2,
    title: "MERIDIAN",
    subtitle: "Luxury Real Estate Campaign",
    category: "Real Estate",
    year: "2022",
    img: portfolio2,
    tags: ["Campaign", "Photography Direction", "Luxury"],
    span: "col-span-1 row-span-1",
    description:
      "Editorial-grade marketing suite for a $2.4B San Francisco luxury residential development. Cinematic photography direction, brand identity, and a digital campaign that generated $800M in pre-sales.",
    client: "Meridian Properties",
    scope: "Campaign Creative, Photography Direction, Digital",
    result: "$800M in pre-sales. Sold out 6 months ahead of schedule.",
  },
  {
    id: 3,
    title: "VOLT",
    subtitle: "Fashion Editorial",
    category: "Fashion",
    year: "2023",
    img: portfolio3,
    tags: ["Editorial", "Campaign", "Fashion"],
    span: "col-span-1 row-span-1",
    description:
      "Art direction for VOLT Collective's breakthrough SS24 campaign. A collision of brutalist architecture and high fashion that went viral across social, generating 4M impressions in 48 hours.",
    client: "VOLT Collective",
    scope: "Art Direction, Campaign, Social Content",
    result: "4M impressions in 48hrs. Covered by Dazed, i-D, and Vogue Italia.",
  },
  {
    id: 4,
    title: "CLOUDARCH",
    subtitle: "Product UI / Digital",
    category: "Tech",
    year: "2022",
    img: portfolio4,
    tags: ["UI/UX", "Product Design", "Digital"],
    span: "col-span-1 md:col-span-2 row-span-1",
    description:
      "End-to-end product identity and marketing for CloudArch's enterprise SaaS platform. Repositioned a B2B tool as a premium design-forward product—resulting in a successful $200M Series B raise.",
    client: "CloudArch (YC W21)",
    scope: "Product Design, Marketing Site, Brand",
    result: "$200M Series B. Product Hunt #1 of the day.",
  },
  {
    id: 5,
    title: "OBSIDIAN",
    subtitle: "Retail Packaging & Brand",
    category: "Retail",
    year: "2021",
    img: portfolio5,
    tags: ["Packaging", "Retail", "Brand"],
    span: "col-span-1 row-span-1",
    description:
      "Luxury retail packaging and brand identity for Obsidian skincare. Material exploration, premium print production, and a retail experience design that landed the brand in Neiman Marcus and Barneys.",
    client: "Obsidian Skincare",
    scope: "Packaging Design, Retail Identity, Brand",
    result: "National Neiman Marcus placement. CLIO Award winner.",
  },
];

const categories = ["All", "Tech", "Real Estate", "Fashion", "Retail"];

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  img: string;
  tags: string[];
  span: string;
  description: string;
  client: string;
  scope: string;
  result: string;
}

const CaseStudyModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[2000] flex items-end justify-center md:items-center"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={(e) => e.stopPropagation()}
      className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border shadow-glass"
    >
      {/* Modal Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center bg-background/80 backdrop-blur-sm border border-border text-foreground hover:text-primary transition-colors"
        >
          <X size={16} />
        </button>
        <div className="absolute bottom-6 left-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-1">
            {project.category} · {project.year}
          </p>
          <h2 className="font-display text-4xl font-black uppercase text-foreground">
            {project.title}
          </h2>
          <p className="font-display text-base text-muted-foreground">{project.subtitle}</p>
        </div>
      </div>

      {/* Modal Content */}
      <div className="p-8 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h3 className="mb-3 font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
            The Work
          </h3>
          <p className="font-display text-base font-light leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Client
            </p>
            <p className="font-display text-sm text-foreground">{project.client}</p>
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
              Scope
            </p>
            <p className="font-display text-sm text-foreground">{project.scope}</p>
          </div>
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1">
              Result
            </p>
            <p className="font-display text-sm font-semibold text-foreground">{project.result}</p>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-display text-xs font-bold uppercase tracking-widest border border-border px-3 py-1 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24">
      {/* ── HEADER ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Selected Work
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display font-display font-black uppercase text-foreground"
            >
              Portfolio.
            </motion.h1>
          </div>
          <ScrollReveal delay={0.3}>
            <p className="mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
              Work that has generated billions in value for our clients.
              Every project is a case study in the power of exceptional creative.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FILTER ── */}
      <div className="border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-6 py-5 font-display text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 border-r border-border ${
                  activeCategory === cat
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BENTO GRID ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 gap-4 md:grid-cols-3 auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setSelectedProject(project)}
                  data-cursor-text="VIEW"
                  className={`group relative overflow-hidden bg-muted ${project.span}`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="font-display text-xs font-bold uppercase tracking-widest text-primary mb-1">
                          {project.category} · {project.year}
                        </p>
                        <h3 className="font-display text-2xl font-black uppercase text-foreground">
                          {project.title}
                        </h3>
                        <p className="font-display text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/50 text-primary">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                  {/* Index */}
                  <div className="absolute top-4 left-4 font-display text-xs font-bold text-foreground/20">
                    0{i + 1}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-title font-display font-black uppercase text-foreground">
                Your Project{" "}
                <span className="font-editorial italic font-light text-accent-gradient">
                  Belongs Here.
                </span>
              </h2>
              <p className="mt-3 font-display text-sm text-muted-foreground">
                We have capacity for 2–3 new clients per quarter.
              </p>
            </div>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground hover:shadow-glow-blue transition-all"
              >
                Start a Project <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
