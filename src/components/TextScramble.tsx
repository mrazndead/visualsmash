import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  triggerOnView?: boolean;
}

export const TextScramble = ({
  text,
  className = "",
  delay = 0,
  tag: Tag = "div",
  triggerOnView = true,
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(triggerOnView ? "" : text);
  const [hasRun, setHasRun] = useState(!triggerOnView);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-40px 0px" });
  const frameRef = useRef<number>();
  const iterationRef = useRef(0);

  const scramble = () => {
    let frame = 0;
    const totalFrames = text.length * 3;

    const update = () => {
      let output = "";
      for (let i = 0; i < text.length; i++) {
        if (i < Math.floor(frame / 3)) {
          output += text[i];
        } else if (text[i] === " ") {
          output += " ";
        } else {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplayText(output);
      frame++;
      if (frame < totalFrames + 6) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayText(text);
      }
    };

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    if (triggerOnView && isInView && !hasRun) {
      setHasRun(true);
      const timer = setTimeout(scramble, delay * 1000);
      return () => clearTimeout(timer);
    }
    if (!triggerOnView) {
      const timer = setTimeout(scramble, delay * 1000);
      return () => clearTimeout(timer);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isInView, hasRun]);

  return (
    <div ref={ref}>
      <Tag className={className}>{displayText || "\u00A0"}</Tag>
    </div>
  );
};
