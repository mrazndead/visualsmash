import { useEffect, useState } from "react";
import { Accessibility, X, Volume2, Eye, Type, MousePointer2, Contrast, Link2, Pause } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

type A11yState = {
  highContrast: boolean;
  largeText: boolean;
  readableFont: boolean;
  underlineLinks: boolean;
  reducedMotion: boolean;
  focusRings: boolean;
  bigCursor: boolean;
  screenReader: boolean;
};

const DEFAULTS: A11yState = {
  highContrast: false,
  largeText: false,
  readableFont: false,
  underlineLinks: false,
  reducedMotion: false,
  focusRings: false,
  bigCursor: false,
  screenReader: false,
};

const STORAGE_KEY = "vs-a11y-prefs";

const CLASS_MAP: Record<keyof A11yState, string> = {
  highContrast: "a11y-high-contrast",
  largeText: "a11y-large-text",
  readableFont: "a11y-readable-font",
  underlineLinks: "a11y-underline-links",
  reducedMotion: "a11y-reduced-motion",
  focusRings: "a11y-focus-rings",
  bigCursor: "a11y-big-cursor",
  screenReader: "a11y-screen-reader",
};

function loadPrefs(): A11yState {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

function applyPrefs(prefs: A11yState) {
  const root = document.documentElement;
  (Object.keys(CLASS_MAP) as (keyof A11yState)[]).forEach((k) => {
    root.classList.toggle(CLASS_MAP[k], prefs[k]);
  });
}

// Screen-reader helper: speak visible text on focus/hover when enabled.
let speakBound = false;
function bindSpeak(enabled: boolean) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const synth = window.speechSynthesis;

  const handler = (e: Event) => {
    const target = e.target as HTMLElement | null;
    if (!target || !document.documentElement.classList.contains("a11y-screen-reader")) return;
    const text =
      target.getAttribute("aria-label") ||
      (target as HTMLImageElement).alt ||
      target.innerText ||
      target.textContent ||
      "";
    const trimmed = text.trim().slice(0, 200);
    if (!trimmed) return;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(trimmed);
    utter.rate = 1;
    synth.speak(utter);
  };

  if (enabled && !speakBound) {
    document.addEventListener("focusin", handler);
    document.addEventListener("mouseover", handler);
    (window as any).__vsSpeakHandler = handler;
    speakBound = true;
  } else if (!enabled && speakBound) {
    const h = (window as any).__vsSpeakHandler;
    if (h) {
      document.removeEventListener("focusin", h);
      document.removeEventListener("mouseover", h);
    }
    synth.cancel();
    speakBound = false;
  }
}

const OPTIONS: {
  key: keyof A11yState;
  label: string;
  desc: string;
  Icon: typeof Eye;
}[] = [
  { key: "highContrast", label: "High Contrast", desc: "Boost contrast for low vision", Icon: Contrast },
  { key: "largeText", label: "Larger Text", desc: "Increase font size across the site", Icon: Type },
  { key: "readableFont", label: "Readable Font", desc: "Switch to a clearer sans-serif", Icon: Eye },
  { key: "underlineLinks", label: "Underline Links", desc: "Make all links clearly visible", Icon: Link2 },
  { key: "reducedMotion", label: "Reduce Motion", desc: "Disable animations & transitions", Icon: Pause },
  { key: "focusRings", label: "Highlight Focus", desc: "Strong outlines on focused items", Icon: Eye },
  { key: "bigCursor", label: "Big Cursor", desc: "Larger, easier-to-see pointer", Icon: MousePointer2 },
  { key: "screenReader", label: "Read Aloud", desc: "Speak text you hover or focus", Icon: Volume2 },
];

export const AccessibilityToggle = () => {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<A11yState>(DEFAULTS);

  useEffect(() => {
    const p = loadPrefs();
    setPrefs(p);
    applyPrefs(p);
    bindSpeak(p.screenReader);
  }, []);

  const update = (key: keyof A11yState, value: boolean) => {
    const next = { ...prefs, [key]: value };
    setPrefs(next);
    applyPrefs(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    if (key === "screenReader") bindSpeak(value);
  };

  const resetAll = () => {
    setPrefs(DEFAULTS);
    applyPrefs(DEFAULTS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULTS));
    bindSpeak(false);
  };

  const activeCount = Object.values(prefs).filter(Boolean).length;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-[1100] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-2 ring-primary/40 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60"
      >
        <Accessibility size={22} aria-hidden="true" />
        {activeCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-secondary-foreground">
            {activeCount}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Accessibility settings"
          className="fixed bottom-20 right-5 z-[1100] w-[min(360px,calc(100vw-2.5rem))] rounded-lg border border-surface-border bg-background/98 backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                Accessibility
              </p>
              <p className="text-xs text-muted-foreground">ADA · WCAG assistance</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accessibility menu"
              className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-4 py-3">
            {OPTIONS.map(({ key, label, desc, Icon }) => (
              <div key={key} className="flex items-start gap-3 py-2.5">
                <Icon size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-primary" />
                <div className="flex-1 min-w-0">
                  <Label htmlFor={`a11y-${key}`} className="cursor-pointer text-sm font-semibold text-foreground">
                    {label}
                  </Label>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
                <Switch
                  id={`a11y-${key}`}
                  checked={prefs[key]}
                  onCheckedChange={(v) => update(key, v)}
                  aria-label={label}
                />
              </div>
            ))}

            <Separator className="my-2" />

            <div className="rounded-md bg-muted/40 p-3 text-xs text-muted-foreground">
              <p className="mb-1 font-semibold text-foreground">Deaf & hard of hearing</p>
              <p>
                All video content on this site includes captions and text alternatives. Contact{" "}
                <a href="mailto:visualsmash@gmail.com" className="text-primary underline">
                  visualsmash@gmail.com
                </a>{" "}
                for transcripts.
              </p>
            </div>

            <button
              type="button"
              onClick={resetAll}
              className="mt-3 w-full rounded-md border border-border py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              Reset all
            </button>
          </div>
        </div>
      )}
    </>
  );
};
