import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, Zap, TrendingUp } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.webp";
import portfolio2 from "@/assets/portfolio-2.webp";
import portfolio3 from "@/assets/portfolio-3.webp";

const sections = [
  {
    key: "ordinary",
    eyebrow: "01 · The Ordinary",
    icon: AlertTriangle,
    title: "The Problem",
    body:
      "A category leader stuck shipping creative on 12-week cycles, burning $2.4M/yr on production drag. Every campaign felt 'good enough'—nothing felt inevitable.",
    image: portfolio1,
    range: [0, 0.34] as const,
  },
  {
    key: "smash",
    eyebrow: "02 · The Smash",
    icon: Zap,
    title: "The Solution",
    body:
      "We rebuilt the production pipeline around an AI-augmented prompt-to-polish workflow. Brand tokens encoded as deterministic prompts, hand-retouched by senior creatives, governed by a Fortune-500-grade QA loop.",
    image: portfolio2,
    range: [0.33, 0.67] as const,
  },
  {
    key: "aftermath",
    eyebrow: "03 · The Aftermath",
    icon: TrendingUp,
    title: "The ROI",
    body:
      "4× faster delivery. 62% lower cost-per-asset. Engagement up 340%. The category leader is now defining the category.",
    image: portfolio3,
    range: [0.66, 1] as const,
  },
];

const metrics = [
  { v: "4×", l: "Faster Delivery" },
  { v: "−62%", l: "Cost / Asset" },
  { v: "+340%", l: "Engagement" },
];

export default function DeepDiveScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* LEFT: sticky strategy column */}
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex items-center px-6 lg:px-12 py-12">
          <div className="relative w-full max-w-lg">
            {sections.map((s, i) => {
              const opacity = useTransform(
                scrollYProgress,
                [s.range[0] - 0.05, s.range[0] + 0.05, s.range[1] - 0.05, s.range[1] + 0.05],
                [0, 1, 1, 0],
              );
              const y = useTransform(
                scrollYProgress,
                [s.range[0], s.range[1]],
                [20, -20],
              );
              return (
                <motion.div
                  key={s.key}
                  style={{ opacity, y }}
                  className={`${i === 0 ? "" : "absolute inset-0"} rounded-lg border border-surface-border bg-surface/40 backdrop-blur-xl p-8 shadow-glass`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <s.icon size={14} className="text-primary" />
                    <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                      {s.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-foreground mb-4">
                    {s.title}
                  </h3>
                  <p className="font-display text-base font-light leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  {s.key === "aftermath" && (
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {metrics.map((m) => (
                        <div key={m.l} className="border border-primary/20 p-3">
                          <div className="font-display text-xl font-black text-accent-gradient">{m.v}</div>
                          <div className="font-display text-[9px] uppercase tracking-widest text-muted-foreground mt-1">
                            {m.l}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: scrolling visuals */}
        <div className="px-6 lg:px-12 py-12 space-y-8">
          {sections.map((s) => (
            <div
              key={s.key}
              className="relative aspect-[4/5] overflow-hidden rounded-lg border border-surface-border shadow-glass"
            >
              <motion.img
                src={s.image}
                alt={`${s.title} visual`}
                loading="lazy"
                decoding="async"
                initial={{ scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  {s.eyebrow}
                </span>
                <p className="mt-1 font-display text-lg font-bold text-foreground">{s.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}