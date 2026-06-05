export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  url?: string;
  tagline: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  results: { metric: string; label: string }[];
  techStack: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "husker-home-1040",
    client: "Husker Home 1040",
    category: "Web Design & Brand",
    url: "https://huskerhome1040.com/",
    tagline:
      "A tax & financial services brand reimagined as a trustworthy, modern digital experience.",
    challenge:
      "Husker Home 1040 needed a digital presence that conveyed expertise and credibility while making complex tax services feel approachable. The previous site lacked clear conversion paths and a coherent brand voice.",
    approach: [
      "Discovery sessions to map target client profiles and seasonal demand patterns",
      "Visual identity refresh anchored in trust, clarity, and warmth",
      "Conversion-focused information architecture with clear service tiers",
      "Mobile-first build with embedded scheduling and contact flows",
    ],
    deliverables: [
      "Brand refresh & visual system",
      "Custom responsive website",
      "Service pages with structured pricing",
      "Lead capture & scheduling integration",
      "Local SEO foundation",
    ],
    results: [
      { metric: "+180%", label: "Inbound leads in first quarter" },
      { metric: "<2s", label: "Average load time" },
      { metric: "100", label: "Lighthouse performance score" },
    ],
    techStack: ["React", "Vite", "Tailwind", "Framer Motion", "Supabase"],
  },
  {
    slug: "amaara-networks",
    client: "Amaara Networks",
    category: "Web Design & UX",
    url: "https://www.amaaranetworks.com/",
    tagline:
      "Enterprise networking infrastructure presented with the polish of a Silicon Valley flagship.",
    challenge:
      "Amaara needed to translate deeply technical networking offerings into a site that resonates with both engineering decision-makers and C-suite buyers — without dumbing down the substance.",
    approach: [
      "Stakeholder interviews to align on product narrative and audience priorities",
      "Information architecture built around buyer journey stages",
      "Custom illustration system to visualize infrastructure topology",
      "Performance-tuned build with on-scroll interaction language",
    ],
    deliverables: [
      "End-to-end web design",
      "Custom illustration system",
      "Case study & solution architecture pages",
      "CMS for ongoing content updates",
    ],
    results: [
      { metric: "3.2x", label: "Average session duration" },
      { metric: "+220%", label: "Demo requests month over month" },
      { metric: "98", label: "Lighthouse accessibility score" },
    ],
    techStack: ["Next.js", "Sanity CMS", "Tailwind", "GSAP"],
  },
  {
    slug: "beakr-winery",
    client: "Beakr Winery",
    category: "Brand & Ecommerce",
    url: "https://beakrwinery.com/",
    tagline:
      "A boutique Lodi winery brought online with a brand-forward ecommerce experience.",
    challenge:
      "Beakr needed an ecommerce platform that captured the personality of their tasting room — handmade, irreverent, and proudly Lodi — while still functioning as a serious commerce engine for shipping wine across California.",
    approach: [
      "Brand discovery to crystallize voice and visual texture",
      "Custom illustrated product imagery and texture system",
      "Shopify build with custom tasting room booking flows",
      "Wine club subscription system with member portal",
    ],
    deliverables: [
      "Brand identity refresh",
      "Shopify ecommerce build",
      "Tasting room reservation system",
      "Wine club subscription platform",
      "Email marketing automation",
    ],
    results: [
      { metric: "+340%", label: "Online wine club signups" },
      { metric: "+62%", label: "Tasting room bookings YoY" },
      { metric: "4.9", label: "Average customer rating" },
    ],
    techStack: ["Shopify", "Liquid", "Klaviyo", "Custom theme"],
  },
  {
    slug: "mm-law-firm",
    client: "Mallison & Martinez Law Firm",
    category: "Web Design & Brand",
    url: "https://themmlawfirm.com/",
    tagline:
      "A labor rights law firm with a digital presence that matches the gravity of the work.",
    challenge:
      "Mallison & Martinez represents workers in complex wage-and-hour and civil rights cases. They needed a website that conveyed authority, made case-types easy to navigate, and gave prospective clients clear next steps.",
    approach: [
      "Editorial design language that signals seriousness and depth",
      "Practice-area architecture organized around client need",
      "Bilingual content support (English & Spanish)",
      "Secure intake forms with case-type routing",
    ],
    deliverables: [
      "Brand identity refinement",
      "Bilingual website",
      "Practice area & case results pages",
      "Secure client intake system",
      "SEO foundation & schema markup",
    ],
    results: [
      { metric: "+95%", label: "Qualified case inquiries" },
      { metric: "Top 3", label: "Google ranking for target practice areas" },
      { metric: "2 languages", label: "Bilingual experience" },
    ],
    techStack: ["React", "Tailwind", "Headless CMS", "Custom intake API"],
  },
  {
    slug: "minirf",
    client: "MiniRF",
    category: "Web Design & Technical Marketing",
    url: "https://minirf.com/",
    tagline:
      "RF components for engineers — presented with the precision the product deserves.",
    challenge:
      "MiniRF makes high-frequency RF components used in defense, satellite, and test equipment. Their site needed to support sophisticated technical browsing, downloadable datasheets, and a path to quoting — while feeling modern instead of dated like most industrial sites.",
    approach: [
      "Faceted product browsing built around real engineer search patterns",
      "Datasheet & technical documentation library",
      "Streamlined RFQ flow with multi-line item support",
      "Performance optimization for engineering teams on slow corporate networks",
    ],
    deliverables: [
      "Product catalog & filtering system",
      "Technical documentation library",
      "Custom RFQ workflow",
      "Performance & SEO overhaul",
    ],
    results: [
      { metric: "+250%", label: "RFQ submissions" },
      { metric: "-58%", label: "Time to find a product" },
      { metric: "+3x", label: "Organic search visibility" },
    ],
    techStack: ["React", "Algolia", "Headless CMS", "Custom RFQ API"],
  },
];

export const findCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);