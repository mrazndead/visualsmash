import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";

/** Animated counter that counts up when scrolled into view */
export const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = value / (duration * 60);
    const id = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(id);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
};

/** Horizontal line that draws itself when in view */
export const LineReveal = ({
  className = "",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-full origin-left bg-gradient-to-r from-primary via-secondary to-transparent"
      />
    </div>
  );
};

/** Text that reveals character by character */
export const CharReveal = ({
  text,
  className = "",
  delay = 0,
  tag: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  tag?: "span" | "h1" | "h2" | "h3" | "p";
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Tag ref={ref as any} className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.025,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
};

/** Parallax wrapper — moves children at a different scroll rate */
export const ParallaxLayer = ({
  children,
  speed = 0.5,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -80, speed * 80]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

/** Floating decorative orb */
export const FloatingOrb = ({
  size = 200,
  color = "primary",
  x = "50%",
  y = "50%",
  delay = 0,
}: {
  size?: number;
  color?: "primary" | "secondary";
  x?: string;
  y?: string;
  delay?: number;
}) => {
  const colorClass = color === "primary" ? "bg-primary/8" : "bg-secondary/8";

  return (
    <motion.div
      className={`absolute rounded-full ${colorClass} blur-3xl pointer-events-none`}
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

/** Rotating border decoration */
export const RotatingBorder = ({ className = "" }: { className?: string }) => (
  <div className={`absolute pointer-events-none ${className}`}>
    <div className="animate-rotate-slow">
      <div className="h-32 w-32 border border-primary/10 rotate-45" />
    </div>
  </div>
);

/** Stagger reveal with clip-path for ultra-smooth feel */
export const MaskReveal = ({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={isInView ? { clipPath: "inset(0% 0 0 0)" } : {}}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
