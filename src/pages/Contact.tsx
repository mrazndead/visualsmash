import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TextScramble } from "@/components/TextScramble";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "visualsmash@gmail.com",
    href: "mailto:visualsmash@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco Bay Area, CA",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const budgetRanges = [
  "$25K – $50K",
  "$50K – $100K",
  "$100K – $250K",
  "$250K+",
];

const projectTypes = [
  "Brand Identity",
  "Digital Campaign",
  "Web Design",
  "Creative Direction",
  "Packaging",
  "Other",
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b py-4 font-display text-base font-light text-foreground placeholder-transparent outline-none transition-all duration-300 ${
      focused === field ? "border-primary" : "border-border"
    }`;

  return (
    <div className="pt-24">
      {/* ── HEADER ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Get In Touch
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display font-display font-black uppercase text-foreground"
            >
              Let's{" "}
              <span className="font-editorial italic font-light text-accent-gradient">
                Build
              </span>{" "}
              Something.
            </motion.h1>
          </div>
          <ScrollReveal delay={0.3}>
            <p className="mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
              We're selective by design. Every client we take on gets our full
              attention and best work. Tell us about your project—if it's a fit,
              we'll make magic together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-20 lg:grid-cols-[1fr_400px]">
            {/* ── FORM ── */}
            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-0">
                  {/* Row 1 */}
                  <div className="grid gap-0 md:grid-cols-2">
                    <ScrollReveal delay={0.1}>
                      <div className="relative group py-2 pr-8">
                        <label
                          htmlFor="name"
                          className={`absolute top-4 left-0 font-display text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 pointer-events-none ${
                            formState.name || focused === "name"
                              ? "-translate-y-6 text-[10px] text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          className={inputClass("name")}
                        />
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                      <div className="relative group py-2">
                        <label
                          htmlFor="email"
                          className={`absolute top-4 left-0 font-display text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 pointer-events-none ${
                            formState.email || focused === "email"
                              ? "-translate-y-6 text-[10px] text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          className={inputClass("email")}
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Company */}
                  <ScrollReveal delay={0.2}>
                    <div className="relative group py-2 mt-8">
                      <label
                        htmlFor="company"
                        className={`absolute top-4 left-0 font-display text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 pointer-events-none ${
                          formState.company || focused === "company"
                            ? "-translate-y-6 text-[10px] text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        Company / Brand
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        onFocus={() => setFocused("company")}
                        onBlur={() => setFocused(null)}
                        className={inputClass("company")}
                      />
                    </div>
                  </ScrollReveal>

                  {/* Project Type */}
                  <ScrollReveal delay={0.25} className="mt-10">
                    <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Project Type
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormState({ ...formState, projectType: type })}
                          className={`font-display text-xs font-bold uppercase tracking-[0.1em] border px-4 py-2 transition-all duration-200 ${
                            formState.projectType === type
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </ScrollReveal>

                  {/* Budget */}
                  <ScrollReveal delay={0.3} className="mt-10">
                    <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Estimated Budget
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormState({ ...formState, budget: range })}
                          className={`font-display text-xs font-bold uppercase tracking-[0.1em] border px-4 py-2 transition-all duration-200 ${
                            formState.budget === range
                              ? "border-secondary bg-secondary/10 text-secondary"
                              : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </ScrollReveal>

                  {/* Message */}
                  <ScrollReveal delay={0.35} className="mt-10">
                    <div className="relative group py-2">
                      <label
                        htmlFor="message"
                        className={`absolute top-4 left-0 font-display text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 pointer-events-none ${
                          formState.message || focused === "message"
                            ? "-translate-y-6 text-[10px] text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        Tell Us About Your Vision
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        className={`${inputClass("message")} resize-none`}
                      />
                    </div>
                  </ScrollReveal>

                  {/* Submit */}
                  <ScrollReveal delay={0.4} className="mt-12">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="group flex w-full items-center justify-between bg-primary px-8 py-5 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue md:w-auto md:min-w-[280px]"
                    >
                      Send Transmission
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </motion.button>
                  </ScrollReveal>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-6 py-20"
                >
                  <div className="h-1 w-12 bg-primary" />
                  <h2 className="text-display font-display font-black uppercase text-foreground">
                    Message{" "}
                    <span className="font-editorial italic text-accent-gradient">
                      Received.
                    </span>
                  </h2>
                  <p className="font-display text-base font-light text-muted-foreground max-w-md">
                    We review every inquiry personally. Expect a thoughtful response
                    within 24 hours. Good things are about to happen.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-secondary">
                      Transmission Delivered
                    </span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── CONTACT INFO ── */}
            <div className="space-y-0">
              <ScrollReveal className="mb-12">
                <div className="h-px w-full bg-gradient-to-r from-primary to-secondary mb-8" />
                <TextScramble
                  text="Contact"
                  className="font-display text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground"
                  tag="p"
                />
              </ScrollReveal>

              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <ScrollReveal key={info.label} delay={i * 0.1}>
                    <div className="group flex items-start gap-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                        <info.icon size={14} />
                      </div>
                      <div>
                        <p className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-display text-sm text-foreground hover:text-primary transition-colors underline-accent"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-display text-sm text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Direct CTA */}
              <ScrollReveal delay={0.4} className="mt-16 pt-10 border-t border-border">
                <p className="font-display text-xs font-light text-muted-foreground mb-6 leading-relaxed">
                  Prefer to reach us directly? We're always listening.
                </p>
                <a
                  href="mailto:visualsmash@gmail.com"
                  className="group flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary underline-accent"
                >
                  <Mail size={14} />
                  visualsmash@gmail.com
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </ScrollReveal>

              {/* Currently Accepting */}
              <ScrollReveal delay={0.5} className="mt-10">
                <div className="glass border border-border p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-secondary">
                      Currently Accepting
                    </span>
                  </div>
                  <p className="font-display text-sm text-muted-foreground">
                    2–3 new client partnerships for Q3 2025. Limited availability.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
