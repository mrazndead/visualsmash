import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Download, ExternalLink, ArrowRight, Palette, Layout, Megaphone, Globe, Layers, Sparkles, Monitor } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import portfolioHero from "@/assets/portfolio-hero.webp";
const DeepDiveScrollStory = lazy(() => import("@/components/features/DeepDiveScrollStory"));

const disciplines = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logos, visual systems, and brand guidelines that define market presence for companies across industries.",
    highlights: ["Stapleton Place", "Union Square Business Park", "Austin Corners", "Calera Estates", "Milestone Lending", "Del Rio West"],
  },
  {
    icon: Layout,
    title: "Catalog & Print Design",
    description: "High-volume catalog production, creative direction, and print management for major fashion and lifestyle brands.",
    highlights: ["Dorfman Pacific", "Stetson", "Tommy Bahama", "Panama Jack", "Stacy Adams", "Scala Pro Golf"],
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description: "Trade show advertising, magazine placements, and promotional campaigns for MAGIC/WWD shows and beyond.",
    highlights: ["Christys' Headwear", "Callanan", "Retailer of the Year campaigns"],
  },
  {
    icon: Globe,
    title: "Web & Digital Design",
    description: "Responsive websites, mobile apps, and digital platforms built for engagement, conversion, and user delight.",
    highlights: ["TrustVillage social platform", "Tesla-inspired UI concepts", "E-commerce experiences"],
  },
  {
    icon: Layers,
    title: "Packaging & Product",
    description: "Custom packaging, embroidery programs, and product presentation systems for retail and wholesale channels.",
    highlights: ["3D Embroidery programs", "Custom sandwich prints", "Private label systems"],
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description: "End-to-end creative oversight from concept through production, ensuring cohesive visual storytelling across all touchpoints.",
    highlights: ["Multi-season collections", "Cross-brand campaign management", "Photography art direction"],
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Brands Served" },
  { value: "20+", label: "Years Experience" },
  { value: "12", label: "Industries" },
];

const Portfolio = () => {
  return (
    <>
      <SEO pageKey="portfolio"
        title="Portfolio | Web Design & Marketing Agency Stockton CA"
        description="Portfolio from Visual Smash — a Stockton, CA web design & marketing agency: web design, brand identity, catalog, advertising, and creative direction."
        canonical="https://visualsmash.lovable.app/portfolio"
        keywords="Stockton CA marketing agency, Stockton CA creative studio, Stockton CA web development services, Stockton marketing agency, Stockton creative studio, Stockton web development, Stockton web developer, web development agency Stockton, web development services Stockton CA, web design agency Stockton CA, web designer Stockton, website design Stockton, web design portfolio Stockton, marketing agency Stockton CA, creative agency Stockton, branding agency Stockton, design agency Stockton, advertising agency Stockton, Stockton design portfolio, brand identity portfolio, catalog design Stockton, creative direction, Central Valley web design agency, Bay Area web design agency"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Visual Smash Portfolio — Marketing Agency Stockton CA",
          "description": "Brand identities, catalog systems, advertising campaigns, and digital experiences from a Stockton, CA marketing agency.",
          "url": "https://visualsmash.lovable.app/portfolio"
        }}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={portfolioHero}
            alt="Visual Smash design portfolio showcase"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 text-center pt-32 pb-20">
          <ScrollReveal>
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
              Our Work
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-hero text-foreground mb-6">
              Design<br />
              <span className="text-accent-gradient">Portfolio</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-display text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              A curated collection of brand identities, catalog systems, advertising campaigns, and digital experiences crafted for industry-leading clients.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {[
                { label: "Full Portfolio", href: "/portfolio/visual-smash-design-portfolio.pdf" },
                { label: "Architecture", href: "/portfolio/architecture.pdf" },
                { label: "Rome", href: "/portfolio/rome.pdf" },
              ].map((pdf) => (
                <a key={pdf.label} href={pdf.href} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.15em] bg-primary text-primary-foreground px-8 py-4 transition-all duration-300 hover:bg-primary/90"
                  >
                    <Download size={18} />
                    {pdf.label}
                    <ExternalLink size={14} className="opacity-60" />
                  </motion.button>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StaggerItem key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-black text-accent-gradient mb-2">
                  {stat.value}
                </div>
                <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
              What's Inside
            </span>
            <h2 className="text-display text-foreground mb-16">
              Disciplines <span className="text-accent-gradient">&</span> Work
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative p-8 border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <d.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{d.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {d.highlights.map((h) => (
                      <span
                        key={h}
                        className="font-display text-[10px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/5 border border-primary/10 px-2 py-1"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-24 md:py-32 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                Clients Featured
              </span>
              <h2 className="text-title text-foreground">
                Brands We've <span className="text-accent-gradient">Elevated</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Stetson", "Tommy Bahama", "Panama Jack", "Stacy Adams", "Scala Pro", "Christys' London", "Dorfman Pacific", "Sinatra Collection", "Renovo Communities", "Lyon Investments", "Zelman Development", "AGS", "ROME", "Digital Risk", "ABB", "Modesto Symphony", "Bureau Veritas", "Bynum Construction", "Amaara Networks", "Beakr Winery", "Husker Home", "TelSwitch", "Geelers", "Amaya Cloud", "Heritage Builders", "Fenton Grant", "Front Range", "InnoLogic", "Confluent Medical", "First Coast Siding", "Mallison & Martinez Law", "MiniRF", "MarketingTBD", "Accenture", "Altera Advisors", "Axios", "Broadstreet", "EMC", "Hudson Marshall", "Mortgage Connect", "National Field Network", "Onyx Lending", "Priority One", "Rakuten", "Shabani Law", "SSAD", "Pingora", "MPhasis", "Mid-Valley Engineering"].map((brand) => (
              <StaggerItem key={brand}>
                <div className="group p-6 border border-border text-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/5">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground group-hover:text-foreground transition-colors">
                    {brand}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Web Work */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                Live Projects
              </span>
              <h2 className="text-title text-foreground">
                Web <span className="text-accent-gradient">Work</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Husker Home 1040", url: "https://huskerhome1040.com/" },
              { name: "AC Testing", url: "https://actesting.com/" },
              { name: "Beakr Winery", url: "https://beakrwinery.com/" },
              { name: "Amaara Networks", url: "https://www.amaaranetworks.com/" },
              { name: "Toro Performance", url: "https://www.toroperformance.net/" },
              { name: "B-A-C", url: "https://b-a-c.com/" },
              { name: "HBI", url: "https://www.hbi.la/" },
              { name: "MiniRF", url: "https://minirf.com/" },
              { name: "MarketingTBD", url: "https://marketingtbd.com" },
              { name: "MM Law Firm", url: "https://themmlawfirm.com/" },
              { name: "Mortgage Connect", url: "https://www2.mortgageconnectlp.com/" },
              { name: "Quick Code Launch", url: "https://quick-code-launch.lovable.app/" },
              { name: "Imagine", url: "https://imagine-696a5ccd001e8bd44d57.appwrite.network/" },
            ].map((site) => (
              <StaggerItem key={site.name}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group relative p-8 border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30"
                  >
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Monitor className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {site.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                      Visit Site <ExternalLink size={12} />
                    </span>
                  </motion.div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── DEEP DIVE: Sticky-scroll case study ── */}
      <section className="py-24 md:py-32 border-t border-border relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-12">
          <ScrollReveal>
            <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
              Feature 04 · Deep Dive
            </span>
            <h2 className="text-title text-foreground">
              Inside a <span className="text-accent-gradient">Smash.</span>
            </h2>
            <p className="mt-4 max-w-2xl font-display text-sm font-light text-muted-foreground">
              Scroll through a case study the way it actually unfolded — the ordinary, the smash, the aftermath.
            </p>
          </ScrollReveal>
        </div>
        <Suspense fallback={<div className="h-[600px]" />}>
          <DeepDiveScrollStory />
        </Suspense>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-display text-foreground mb-6">
              Ready to see <span className="text-accent-gradient">more?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Download the full portfolio PDF for an in-depth look at our creative process, design systems, and campaign results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              {[
                { label: "Full Portfolio", href: "/portfolio/visual-smash-design-portfolio.pdf" },
                { label: "Architecture", href: "/portfolio/architecture.pdf" },
                { label: "Rome", href: "/portfolio/rome.pdf" },
              ].map((pdf) => (
                <a key={pdf.label} href={pdf.href} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.15em] bg-primary text-primary-foreground px-8 py-4"
                  >
                    <Download size={18} />
                    {pdf.label}
                  </motion.button>
                </a>
              ))}
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.15em] border border-primary/50 text-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </motion.button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
