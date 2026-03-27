import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Contact", href: "/contact" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="group inline-flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center border border-primary/30">
                <span className="font-display text-sm font-black text-primary tracking-widest">VS</span>
              </div>
              <span className="font-display text-sm font-black uppercase tracking-[0.2em]">
                Visual Smash
              </span>
            </Link>
            <p className="font-display text-sm font-light leading-relaxed text-muted-foreground max-w-xs">
              Award-winning creative direction and brand design for companies
              that refuse to be ordinary.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Bay Area, California
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-foreground/60 transition-colors hover:text-foreground underline-accent w-fit"
                >
                  {link.label}
                  <ArrowUpRight
                    size={10}
                    className="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:visualsmash@gmail.com"
                className="font-display text-sm text-foreground/60 transition-colors hover:text-primary underline-accent w-fit"
              >
                visualsmash@gmail.com
              </a>
              <p className="font-display text-xs text-muted-foreground">
                New Business Inquiries Welcome
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-start gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xs text-muted-foreground/60">
            © {year} Visual Smash. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-display text-xs text-muted-foreground/40 uppercase tracking-[0.2em]">
              Brutalist Luxury
            </span>
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <span className="font-display text-xs text-muted-foreground/40 uppercase tracking-[0.2em]">
              Bay Area, CA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
