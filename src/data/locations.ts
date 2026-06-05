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
  },
];

export const findLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);