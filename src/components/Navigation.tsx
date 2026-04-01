import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled ? "glass border-b border-surface-border py-3" : "py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <div className="absolute inset-0 rounded-none bg-primary/20 transition-all duration-300 group-hover:bg-primary/40 group-hover:scale-110" />
              <span className="font-display text-xs font-black text-primary tracking-widest">VS</span>
            </div>
            <span className="font-display text-sm font-black uppercase tracking-[0.2em] text-foreground">
              Visual Smash
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-display text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200 underline-accent ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-display text-xs font-bold uppercase tracking-[0.15em] border border-primary/50 px-5 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Let's Talk
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center md:hidden text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[900] flex flex-col items-center justify-center bg-background/98 backdrop-blur-2xl"
          >
            <div className="grid-lines absolute inset-0 opacity-40" />
            <nav className="relative flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className={`font-display text-4xl font-black uppercase tracking-tight transition-colors duration-200 ${
                      location.pathname === link.href
                        ? "text-accent-gradient"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.4 }}
                href="mailto:visualsmash@gmail.com"
                className="font-display text-sm font-medium text-muted-foreground mt-8"
              >
                visualsmash@gmail.com
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
