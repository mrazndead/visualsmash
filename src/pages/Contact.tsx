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

export default function Contact() {
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
              attention and best work. Reach out—if it's a fit, we'll make magic together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
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
                Ready to start a conversation? We're always listening.
              </p>
              <a
                href="mailto:visualsmash@gmail.com"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue"
              >
                <Mail size={14} />
                Email Us Directly
                <ArrowRight
                  size={14}
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
      </section>
    </div>
  );
}
