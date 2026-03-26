import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MagneticCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const dotSpringConfig = { damping: 50, stiffness: 600, mass: 0.2 };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 20);
      mouseY.set(e.clientY - 20);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      const text = target.getAttribute("data-cursor-text") || "";
      setCursorText(text);
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      setCursorText("");
    };

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor], [data-cursor-text]"
    );

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 2.2 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="pointer-events-none fixed top-0 left-0 z-[99999] flex items-center justify-center"
      >
        <div
          className={`h-10 w-10 rounded-full border transition-all duration-200 ${
            isHovering
              ? "border-secondary bg-secondary/10"
              : "border-primary/60 bg-primary/5"
          }`}
        >
          {cursorText && (
            <span className="font-display text-[8px] font-bold uppercase tracking-widest text-secondary leading-none text-center flex items-center justify-center h-full">
              {cursorText}
            </span>
          )}
        </div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        style={{ x: dotX, y: dotY }}
        animate={{ scale: isClicking ? 2 : 1 }}
        transition={{ duration: 0.1 }}
        className="pointer-events-none fixed top-0 left-0 z-[99999]"
      >
        <div
          className={`h-[6px] w-[6px] translate-x-[17px] translate-y-[17px] rounded-full transition-colors duration-200 ${
            isHovering ? "bg-secondary" : "bg-primary"
          }`}
        />
      </motion.div>
    </>
  );
};
