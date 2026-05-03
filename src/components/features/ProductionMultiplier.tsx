import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Zap, Clock, Sparkles, GripVertical } from "lucide-react";

/**
 * Interactive comparison slider:
 * Left = Traditional Agency (slow, grayscale)
 * Right = Visual Smash AI Workflow (fast, neon)
 * Drag the handle to reveal more of either side.
 */

const stages = [
  { label: "Discovery", trad: 100, smash: 100 },
  { label: "Concepting", trad: 70, smash: 100 },
  { label: "Production", trad: 35, smash: 95 },
  { label: "QA & Polish", trad: 15, smash: 80 },
  { label: "Final Delivery", trad: 5, smash: 65 },
];

export default function ProductionMultiplier() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const reveal = useTransform(x, (v) => (width ? (v / width) * 100 : 50));
  const [pct, setPct] = useState(50);

  useEffect(() => {
    const update = () => {
      const w = containerRef.current?.offsetWidth ?? 0;
      setWidth(w);
      x.set(w / 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [x]);

  useEffect(() => reveal.on("change", (v) => setPct(v)), [reveal]);

  // Auto-demo on mount
  useEffect(() => {
    if (!width) return;
    const controls = animate(x, width * 0.7, { duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 });
    return controls.stop;
  }, [width, x]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative h-[420px] md:h-[480px] w-full overflow-hidden rounded-lg border border-surface-border bg-surface backdrop-blur-xl select-none"
      >
        {/* LEFT: Traditional */}
        <div className="absolute inset-0 p-6 md:p-10 grayscale opacity-80">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={14} className="text-muted-foreground" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
              Traditional Agency
            </span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-black uppercase text-muted-foreground/70 mb-6">
            6–12 weeks · linear handoffs
          </h3>
          <div className="space-y-4">
            {stages.map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between font-display text-[10px] uppercase tracking-widest text-muted-foreground/60 mb-1.5">
                  <span>{s.label}</span>
                  <span>{s.trad}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted-foreground/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.trad}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 2.4, delay: i * 0.15, ease: "linear" }}
                    className="h-full bg-muted-foreground/40"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Visual Smash (clipped via inset) */}
        <motion.div
          className="absolute inset-0 p-6 md:p-10 bg-background"
          style={{ clipPath: useTransform(x, (v) => `inset(0 0 0 ${v}px)`) }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} className="text-primary" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Visual Smash · AI Workflow
            </span>
          </div>
          <h3 className="font-display text-xl md:text-2xl font-black uppercase text-foreground mb-6">
            <span className="text-accent-gradient">4× faster</span> · Fortune 500 quality
          </h3>
          <div className="space-y-4">
            {stages.map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between font-display text-[10px] uppercase tracking-widest text-foreground mb-1.5">
                  <span>{s.label}</span>
                  <span className="text-primary">{s.smash}%</span>
                </div>
                <div className="relative h-1.5 w-full bg-primary/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.smash}%` }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shimmer shadow-glow-blue"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-6 flex items-center gap-2 font-display text-[10px] uppercase tracking-widest text-primary">
            <Sparkles size={12} /> AI-augmented production
          </div>
        </motion.div>

        {/* Drag handle */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: width }}
          dragElastic={0}
          dragMomentum={false}
          style={{ x }}
          className="absolute top-0 bottom-0 z-20 -translate-x-1/2 cursor-ew-resize"
        >
          <div className="relative h-full w-px bg-gradient-to-b from-transparent via-primary to-transparent shadow-glow-blue">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-primary/60 bg-background/80 backdrop-blur-md shadow-glow-blue">
              <GripVertical size={16} className="text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Edge labels */}
        <div className="pointer-events-none absolute bottom-3 left-4 font-display text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60">
          ← Slow
        </div>
        <div className="pointer-events-none absolute bottom-3 right-4 font-display text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
          Smash →
        </div>
      </div>

      <p className="mt-4 text-center font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Reveal: <span className="text-primary font-bold">{Math.round(pct)}%</span> Visual Smash workflow visible — drag to compare
      </p>
    </div>
  );
}