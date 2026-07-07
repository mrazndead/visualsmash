export interface LocationData {
  slug: string;
  city: string;
  state: string;
  county: string;
  lat: number;
  lng: number;
  population: string;
  intro: string;
  industries: string[];
  neighborhoodCopy: string;
  localFaqs: { q: string; a: string }[];
}

export const locations: LocationData[] = [
  {
    slug: "web-design-stockton",
    city: "Stockton",
    state: "CA",
    county: "San Joaquin County",
    lat: 37.9577,
    lng: -121.2908,
    population: "320,000+",
    intro:
      "Visual Smash is the web design and marketing agency Stockton businesses choose when they're done settling for ordinary. We build conversion-focused websites, brand systems, and AI-powered marketing for companies across the Central Valley — from downtown Stockton to Lincoln Village, Brookside, and Spanos Park.",
    industries: [
      "Agriculture & food",
      "Real estate & development",
      "Healthcare & medical",
      "Law firms & professional services",
      "Logistics & manufacturing",
      "Restaurants & hospitality",
    ],
    neighborhoodCopy:
      "We've worked with Stockton brands rooted in the Port, the Miracle Mile, the University of the Pacific corridor, and the agricultural businesses that define San Joaquin County. Local context shapes every site we ship.",
    localFaqs: [
      { q: "Are you actually based in Stockton, CA?", a: "Yes. Visual Smash operates out of Stockton and serves clients throughout San Joaquin County, the Central Valley, Sacramento, and the Bay Area. We're happy to meet in person around Lincoln Center, the Miracle Mile, or downtown." },
      { q: "Do you work with small businesses in Stockton?", a: "Most of our Stockton work is with small and mid-sized businesses — law firms, contractors, medical practices, restaurants, and family-owned operations. Scope is always tuned to your budget." },
      { q: "Can you help my Stockton business rank on Google Maps?", a: "Yes. Local SEO for Stockton includes Google Business Profile optimization, NAP consistency across directories, review flows, and local landing pages targeting neighborhoods like Brookside, Lincoln Village, Spanos Park, and Weston Ranch." },
    ],
  },
  {
    slug: "web-design-lodi",
    city: "Lodi",
    state: "CA",
    county: "San Joaquin County",
    lat: 38.1341,
    lng: -121.2722,
    population: "70,000+",
    intro:
      "Visual Smash brings premium web design and marketing to Lodi — built for the wineries, tasting rooms, family-owned restaurants, and small businesses that give Lodi its character. Just 14 miles north of our Stockton studio.",
    industries: [
      "Wineries & tasting rooms",
      "Restaurants & hospitality",
      "Boutique retail",
      "Agriculture",
      "Real estate",
      "Professional services",
    ],
    neighborhoodCopy:
      "From Downtown Lodi and the Wine & Roses corridor to the appellations of the Lodi AVA, we design sites that reflect the craft and authenticity local brands are known for.",
    localFaqs: [
      { q: "Do you build websites for Lodi wineries?", a: "Yes — winery sites are a specialty. We build tasting-room booking, wine club sign-ups, ecommerce for shipping-compliant states, and cellar-door content that reflects the Lodi AVA's identity." },
      { q: "How far is your studio from Lodi?", a: "About 14 miles south, in Stockton. We regularly meet clients in Downtown Lodi and along School Street; most production runs remote with weekly reviews." },
      { q: "Can you handle DTC wine ecommerce?", a: "Yes. We build Shopify and custom stacks with age verification, state-by-state shipping rules, wine-club subscriptions, and integrations with fulfillment partners." },
    ],
  },
  {
    slug: "web-design-tracy",
    city: "Tracy",
    state: "CA",
    county: "San Joaquin County",
    lat: 37.7397,
    lng: -121.4252,
    population: "95,000+",
    intro:
      "Visual Smash designs and builds modern, fast-loading websites for Tracy businesses — covering the Tracy Hills, Mountain House, and I-205 corridor that connects the Central Valley to the Bay Area.",
    industries: [
      "Logistics & distribution",
      "Construction & contractors",
      "Real estate",
      "Tech-adjacent startups",
      "Retail & ecommerce",
      "Professional services",
    ],
    neighborhoodCopy:
      "Tracy's fast growth means most businesses are racing to keep their digital presence ahead of demand. We build sites that scale — from one-page launches to full ecommerce platforms.",
    localFaqs: [
      { q: "Do you work with Tracy and Mountain House commuter businesses?", a: "Yes. A lot of Tracy work is Bay Area-adjacent — startups, contractors, and service businesses along the I-205 corridor that need a site that reads modern to both markets." },
      { q: "Can you build logistics or 3PL websites?", a: "Yes. Tracy's logistics cluster is a common client type — we build quoting flows, driver-recruitment funnels, and integrations with TMS/WMS systems." },
      { q: "How quickly can a Tracy business launch a new site?", a: "Marketing sites ship in 4–8 weeks. Rapid single-page launches can go live in under 2 weeks when timing matters." },
    ],
  },
  {
    slug: "web-design-modesto",
    city: "Modesto",
    state: "CA",
    county: "Stanislaus County",
    lat: 37.6391,
    lng: -120.9969,
    population: "220,000+",
    intro:
      "Visual Smash partners with Modesto businesses on websites, branding, and digital marketing across Stanislaus County. From McHenry Avenue to Vintage Faire, we build digital experiences that bring local brands forward.",
    industries: [
      "Agriculture & food processing",
      "Healthcare",
      "Real estate",
      "Manufacturing",
      "Hospitality",
      "Professional services",
    ],
    neighborhoodCopy:
      "Modesto's mix of established industry and entrepreneurial energy demands sites that read both credible and modern. We've delivered work across the Central Valley that does exactly that.",
    localFaqs: [
      { q: "Do you work with Modesto and Stanislaus County businesses?", a: "Yes. We regularly partner with Modesto brands across McHenry, Vintage Faire, and Downtown — from healthcare groups to ag-processing operations." },
      { q: "Are you a Modesto-based agency?", a: "We're headquartered in Stockton, about 30 miles north. Most Modesto engagements run remotely with on-site meetings scheduled when useful." },
      { q: "Do you handle Spanish-language sites for Modesto's bilingual market?", a: "Yes. We build bilingual (EN/ES) sites with proper hreflang, translated content, and structured data that ranks in both languages." },
    ],
  },
  {
    slug: "web-design-manteca",
    city: "Manteca",
    state: "CA",
    county: "San Joaquin County",
    lat: 37.7974,
    lng: -121.2161,
    population: "85,000+",
    intro:
      "Visual Smash builds websites and brand systems for Manteca businesses — from the Promenade Shops at Orchard Valley to growing residential developments and the small businesses that anchor the community.",
    industries: [
      "Retail & ecommerce",
      "Construction",
      "Real estate",
      "Healthcare",
      "Restaurants",
      "Professional services",
    ],
    neighborhoodCopy:
      "Manteca's growth along the 120 and 99 corridors creates real opportunity for businesses ready to invest in a digital presence that matches the city's trajectory.",
    localFaqs: [
      { q: "Do you work with Manteca and Lathrop businesses?", a: "Yes — we cover the 99/120 corridor including Manteca, Lathrop, and Ripon. New residential growth and the Promenade Shops make it a strong market for retail and service brands." },
      { q: "Can you help launch a new Manteca business?", a: "Yes. Startup packages include brand identity, a launch site, Google Business Profile setup, and a marketing foundation ready to grow with you." },
      { q: "Do you build sites for Manteca contractors and trades?", a: "Yes. Contractor sites include quote-request flows, service-area schema, before/after galleries, and financing integrations when relevant." },
    ],
  },
];

export const findLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);