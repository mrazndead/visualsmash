import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Terminal, Sparkles, ArrowRight } from "lucide-react";
import sparkArt from "@/assets/lab-spark.jpg";
import finalArt from "@/assets/lab-final.jpg";

const STAGES = [
  {
    key: "spark",
    label: "The Spark",
    icon: Lightbulb,
    accent: "text-secondary",
  },
  {
    key: "engineering",
    label: "The Engineering",
    icon: Terminal,
    accent: "text-primary",
  },
  {
    key: "smash",
    label: "The Final Smash",
    icon: Sparkles,
    accent: "text-accent-gradient",
  },
] as const;

const PROMPT_LINES = [
  "$ vs-engine compose --brief 'luxury skincare hero'",
  "› analyzing brand DNA … [Apothic / serif / warm-noir]",
  "› binding tokens: --hue=amber-90 --grain=fine",
  "› generating: 4k cinematic, f/1.4, rim-lit, glass bottle",
  "› negative: clipart, low-fi, generic, AI-pose",
  "› post: hand-retouch + brand-grade color profile",
  "✓ ready → /deliver/hero-final.webp",
];

function Terminal3D() {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setVisible((v) => (v < PROMPT_LINES.length ? v + 1 : v)), 380);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rounded-md border border-surface-border bg-deep-black/80 backdrop-blur-xl shadow-glass overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-surface-border bg-surface/40">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="ml-2 font-display text-[10px] uppercase tracking-widest text-muted-foreground">
          vs-engine.terminal
        </span>
      </div>
      <pre className="p-4 font-mono text-[11px] md:text-xs leading-relaxed text-foreground/90 min-h-[220px]">
        {PROMPT_LINES.slice(0, visible).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={line.startsWith("✓") ? "text-primary" : line.startsWith("›") ? "text-muted-foreground" : "text-secondary"}
          >
            {line}
          </motion.div>
        ))}
        {visible < PROMPT_LINES.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-3 bg-primary"
          />
        )}
      </pre>
    </div>
  );
}

export default function PromptToPolish() {
  const [stage, setStage] = useState(0);

  // Auto-cycle stages every 6s, pauses on user interaction
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setStage((s) => (s + 1) % STAGES.length), 6000);
    return () => clearInterval(id);
  }, [auto]);

  return (
    <div className="relative rounded-lg border border-surface-border bg-surface/40 backdrop-blur-xl p-6 md:p-10 shadow-glass overflow-hidden">
      {/* Stage tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {STAGES.map((s, i) => (
          <button
            key={s.key}
            onClick={() => { setStage(i); setAuto(false); }}
            className={`group flex items-center gap-2 px-3 py-2 border font-display text-[10px] font-bold uppercase tracking-[0.2em] transition-all ${
              stage === i
                ? "border-primary text-primary bg-primary/5 shadow-glow-blue"
                : "border-surface-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
            }`}
          >
            <s.icon size={12} />
            <span>0{i + 1} · {s.label}</span>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center min-h-[280px]">
        {/* Left: descriptor */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {stage === 0 && (
                <>
                  <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-foreground mb-3">
                    "Glowing skincare bottle, golden hour."
                  </h3>
                  <p className="font-display text-sm text-muted-foreground leading-relaxed">
                    Every project starts as a five-word concept. A scribble. A vibe.
                    No jargon. No specs. Just intent.
                  </p>
                </>
              )}
              {stage === 1 && (
                <>
                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-foreground mb-3">
                    Engineered into <span className="text-accent-gradient">production-grade prompts</span>.
                  </h3>
                  <p className="font-display text-sm text-muted-foreground leading-relaxed">
                    Our prompt engineers translate the spark into deterministic
                    technical instructions — brand tokens, lighting math, negative
                    constraints, post-processing chain.
                  </p>
                </>
              )}
              {stage === 2 && (
                <>
                  <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-foreground mb-3">
                    Delivered as a <span className="text-accent-gradient">final smash</span>.
                  </h3>
                  <p className="font-display text-sm text-muted-foreground leading-relaxed">
                    A polished, hand-retouched, brand-grade asset. Ready for
                    Times Square, App Store, or your CMO's keynote.
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: stage content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {stage === 0 && (
                <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-surface-border shadow-glass">
                  <img
                    src={sparkArt}
                    alt="Charcoal sketch concept — the spark"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 font-editorial italic text-lg md:text-2xl text-foreground leading-snug">
                    "glowing skincare bottle, golden hour"
                  </p>
                </div>
              )}
              {stage === 1 && <Terminal3D />}
              {stage === 2 && (
                <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-primary/30 shadow-glow-blue">
                  <img
                    src={finalArt}
                    alt="Final polished hero asset — the smash"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={768}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 font-display text-[10px] uppercase tracking-widest text-primary">
                    hero-final.webp · 4096×3072 · ready
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress next */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {STAGES.map((_, i) => (
            <span
              key={i}
              className={`h-1 transition-all ${stage === i ? "w-8 bg-primary" : "w-3 bg-muted-foreground/20"}`}
            />
          ))}
        </div>
        <button
          onClick={() => { setStage((s) => (s + 1) % STAGES.length); setAuto(false); }}
          className="group inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.15em] text-primary"
        >
          Next stage <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}