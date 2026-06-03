import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Palette, BarChart3, MousePointer2, Fingerprint,
  Workflow, Sparkles, Globe, Cpu, ArrowRight, CheckCircle2, Brain,
  TrendingUp, Users, Lightbulb, Layers, HelpCircle, MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SEO } from "@/components/SEO";
import { LineReveal, FloatingOrb, ParallaxLayer, MaskReveal, RotatingBorder } from "@/components/AnimatedElements";
import usecasesVisual from "@/assets/usecases-visual.webp";
import abstractGlass from "@/assets/abstract-glass.webp";
import holographicUi from "@/assets/holographic-ui.webp";
import fluidArt from "@/assets/fluid-art.webp";
import wireframeArch from "@/assets/wireframe-arch.webp";

const useCases = [
  {
    icon: Palette, number: "01", title: "Graphic Design",
    tagline: "Visuals That Stop Thumbs.",
    body: "From editorial layouts and social media campaigns to large-format print and packaging—our design work is rooted in 20+ years of Fortune 500 visual storytelling. Every composition is deliberate, every color choice strategic.",
    extended: "We've designed everything from Super Bowl campaign assets to luxury real estate brochures that sell $50M properties. Our process starts with deep brand immersion—understanding your audience's visual language before we touch a single pixel. The result is design that doesn't just look beautiful; it performs. Higher engagement rates, stronger brand recall, and creative that your competitors wish they'd made first.",
    deepDive: "Our graphic design practice spans the full spectrum—from hyper-detailed icon systems to massive environmental graphics. We create modular design systems that scale from a social story to a Times Square billboard without losing an ounce of impact. Every asset we produce comes with production-ready files, responsive variants, and animation-ready layers for motion teams.",
    results: ["340% average increase in social engagement", "47% higher click-through rates on campaign assets", "Brand recall scores 2.8x above industry benchmarks"],
    tags: ["Print & Digital", "Social Assets", "Packaging", "Editorial", "Campaign Creative", "Motion Graphics", "Environmental Design"],
    accent: "primary" as const,
    image: fluidArt,
  },
  {
    icon: BarChart3, number: "02", title: "Technical Marketing",
    tagline: "Data-Driven Campaigns That Convert.",
    body: "We architect multi-channel marketing strategies backed by analytics, A/B testing, and performance optimization. Two decades of running campaigns for Fortune 500 brands taught us that creativity without measurement is just decoration.",
    extended: "Our technical marketing practice bridges the gap between creative intuition and hard data. We build attribution models, set up conversion tracking architectures, and design experiments that reveal what actually moves your audience. From programmatic ad strategies to SEO-optimized content ecosystems, we engineer marketing machines that compound over time.",
    deepDive: "We deploy marketing intelligence stacks that integrate Google Analytics 4, Mixpanel, Looker Studio, and custom data warehouses. Our team builds predictive models for customer lifetime value, churn probability, and campaign ROI forecasting. We've managed ad budgets exceeding $50M annually across Google, Meta, LinkedIn, and programmatic display networks—always optimizing toward incrementality, not vanity metrics.",
    results: ["4.2x average ROAS across managed campaigns", "62% reduction in customer acquisition cost", "Revenue attribution accuracy improved to 94%"],
    tags: ["Analytics", "A/B Testing", "Performance", "Multi-Channel", "Attribution", "SEO", "Programmatic"],
    accent: "secondary" as const,
    image: holographicUi,
  },
  {
    icon: MousePointer2, number: "03", title: "UX Design",
    tagline: "Experiences That Feel Inevitable.",
    body: "We obsess over the human side of digital. User research, journey mapping, wireframing, prototyping, and interaction design—we engineer every touchpoint to eliminate friction and maximize delight.",
    extended: "Our UX process is rigorous and research-driven. We conduct stakeholder interviews, competitive audits, user testing sessions, and heuristic evaluations before designing a single screen. We create detailed user personas, map complete customer journeys, build interactive prototypes in Figma, and validate every major decision with real users.",
    deepDive: "We've conducted over 2,000 user interviews and usability tests across our career. Our UX audits follow a proprietary 127-point framework that evaluates cognitive load, information architecture, micro-interactions, accessibility compliance, and emotional resonance. We design for the full spectrum—from enterprise dashboards serving 50,000 daily users to consumer apps targeting Gen Z audiences. Every prototype we ship includes detailed interaction specifications, animation curves, and developer handoff documentation.",
    results: ["340% average conversion rate improvement", "68% reduction in user-reported friction points", "NPS scores increased by 42 points on average"],
    tags: ["User Research", "Journey Mapping", "Prototyping", "Interaction Design", "Usability Testing", "Accessibility", "Design Systems"],
    accent: "primary" as const,
    image: wireframeArch,
  },
  {
    icon: Fingerprint, number: "04", title: "Branding",
    tagline: "Identities That Outlast Trends.",
    body: "We build brand ecosystems—not just logos. From naming and positioning to visual identity systems, brand guidelines, and voice architecture. Your brand should be recognized in a split second and remembered forever.",
    extended: "Our branding process begins with strategic positioning—finding the white space in your market where your brand can own a category. We develop comprehensive brand architectures including logo systems, typography pairings, color systems with accessibility baked in, photography direction, and detailed brand guidelines.",
    deepDive: "We approach branding as a business strategy tool, not just a design exercise. Our Brand DNA workshops distill your company's essence into a strategic positioning matrix that guides every creative decision. We create living brand systems with 200+ page guidelines covering voice, visual, experiential, and digital expressions. Our brand work has been recognized by Communication Arts, Brand New, and The Dieline. We've named over 30 companies and products, developed sonic branding, and created brand rituals that build cult-like customer loyalty.",
    results: ["Brand recognition scores averaging 89% in target markets", "2.4x premium pricing power post-rebrand", "Employee brand alignment scores above 92%"],
    tags: ["Brand Strategy", "Visual Identity", "Guidelines", "Voice & Tone", "Naming", "Sonic Branding", "Brand Architecture"],
    accent: "secondary" as const,
    image: abstractGlass,
  },
  {
    icon: Workflow, number: "05", title: "Marketing Automation",
    tagline: "Intelligent Systems, Zero Waste.",
    body: "We design and deploy marketing automation pipelines that nurture leads, segment audiences, and trigger campaigns at precisely the right moment. Email sequences, CRM integrations, behavioral triggers—all orchestrated to scale your impact.",
    extended: "We've built automation systems for companies processing millions of customer interactions monthly. Our workflows integrate with HubSpot, Salesforce, Marketo, and custom CRM solutions. We design intelligent drip campaigns with dynamic content personalization and build reporting dashboards that give your team real-time visibility.",
    deepDive: "Our automation architects have collectively designed over 500 marketing automation systems. We build multi-touch nurture sequences that adapt in real-time based on engagement signals, purchase intent, and behavioral patterns. Our lead scoring models use machine learning to predict conversion probability with 87% accuracy. We also design customer lifecycle automation—from onboarding sequences to win-back campaigns to loyalty programs. Every system we build includes a comprehensive documentation package, team training sessions, and 90-day optimization support.",
    results: ["312% average increase in qualified leads", "Lead-to-customer conversion improved by 78%", "Marketing team efficiency increased 4x"],
    tags: ["Email Flows", "CRM Integration", "Lead Scoring", "Behavioral Triggers", "Personalization", "Lifecycle Marketing", "Revenue Operations"],
    accent: "primary" as const,
    image: holographicUi,
  },
  {
    icon: Sparkles, number: "06", title: "Prompt Engineering",
    tagline: "Mastering the AI Conversation.",
    body: "We craft precision prompts and AI workflows that generate on-brand creative assets, marketing copy, and data insights at scale. Our prompt engineering practice is a competitive advantage that accelerates production while maintaining quality.",
    extended: "We've developed proprietary prompt frameworks for brand-consistent content generation, image creation pipelines, and automated creative QA systems. We train your team on our methodologies and build custom GPTs and AI agents tailored to your specific creative workflows.",
    deepDive: "Our prompt engineering team has developed over 150 production-grade prompt chains used daily by creative teams worldwide. We build multi-step AI pipelines that handle everything from brief interpretation to final creative output—complete with brand guardrails, tone consistency checks, and automated quality scoring. We've created custom fine-tuned models for luxury brands, built AI-powered copywriting engines that maintain voice consistency across 12 languages, and designed visual AI workflows that generate campaign-ready assets in minutes instead of days.",
    results: ["73% reduction in content production time", "Brand consistency scores maintained at 96%", "10x increase in creative output volume"],
    tags: ["AI Workflows", "Creative Prompts", "Content Generation", "Custom GPTs", "Brand AI", "Fine-Tuning", "AI Agents"],
    accent: "secondary" as const,
    image: abstractGlass,
  },
  {
    icon: Globe, number: "07", title: "Web Design",
    tagline: "Websites That Win Awards & Customers.",
    body: "We design and build high-performance websites that look like nothing else on the internet. Responsive, blazing fast, and accessibility-first—from microsites to complex platforms.",
    extended: "Every website we build scores 90+ on Lighthouse across all metrics. We use modern frameworks with a focus on Core Web Vitals, semantic HTML, and WCAG 2.1 AA compliance. Our design approach combines editorial typography, cinematic imagery, and micro-interactions that create moments of delight.",
    deepDive: "We've designed and developed over 200 websites ranging from single-page campaign microsites to enterprise platforms serving millions of monthly visitors. Our tech stack is deliberately versatile—React, Next.js, headless CMS architectures, and custom animation libraries. We build with performance budgets from day one, ensuring sub-2-second load times even on 3G connections. Our design process includes comprehensive responsive breakpoint design, dark mode considerations, reduced-motion accessibility, and internationalization support. We create bespoke interaction patterns that become signature brand moments.",
    results: ["Average Lighthouse score of 96 across all projects", "42% increase in time-on-site", "Conversion rates 3.1x above industry average"],
    tags: ["Responsive Design", "Performance", "Accessibility", "Animation", "CMS Integration", "Headless Architecture", "Progressive Enhancement"],
    accent: "primary" as const,
    image: wireframeArch,
  },
  {
    icon: Cpu, number: "08", title: "Software Design with AI",
    tagline: "AI-Native Product Design.",
    body: "We design software products that leverage AI at their core—intelligent dashboards, generative content tools, predictive interfaces, and AI-powered user experiences.",
    extended: "We sit at the intersection of product design, AI engineering, and user experience. We design AI-powered products where the technology enhances rather than complicates the user's workflow. Our portfolio includes intelligent content management systems, predictive analytics dashboards, and generative design tools.",
    deepDive: "We've designed AI-native products for startups and enterprises alike—from a generative creative suite used by 50,000+ designers to an AI-powered real estate valuation platform processing billions in property data. Our approach centers on 'AI transparency'—making intelligent systems feel trustworthy and controllable. We design confidence indicators, explainability layers, and graceful fallback patterns. Our team combines deep UX expertise with technical understanding of LLMs, computer vision, and recommendation systems to create products that feel magical but remain grounded in real utility.",
    results: ["User adoption rates 2.7x above industry average", "Task completion time reduced by 64%", "Customer satisfaction scores averaging 4.8/5"],
    tags: ["AI Integration", "Product Design", "Intelligent UI", "Generative Tools", "ML Interfaces", "AI Transparency", "Conversational UX"],
    accent: "secondary" as const,
    image: holographicUi,
  },
  {
    icon: Workflow, number: "09", title: "Email Marketing Automation",
    tagline: "Inboxes That Print Revenue.",
    body: "We design, build, and optimize end-to-end email marketing programs—platform setup, audience segmentation, lifecycle flows, and creative that turns subscribers into customers and customers into advocates.",
    extended: "From welcome series and abandoned-cart recovery to win-back campaigns and VIP loyalty tracks, we engineer email programs across Klaviyo, HubSpot, Mailchimp, Customer.io, Iterable, and Braze. Every send is grounded in segmentation logic, deliverability hygiene, and creative that actually gets opened.",
    deepDive: "Our email marketing practice combines deliverability engineering, behavioral segmentation, and editorial-grade creative. We architect SPF/DKIM/DMARC infrastructure, warm dedicated sending IPs, and build dynamic content blocks that personalize at scale. We design AMP-for-email experiences, interactive carousels, and dark-mode-perfect templates. Our reporting dashboards track revenue per recipient, list health, and incremental lift—so every campaign learns from the last.",
    results: ["38% average open rate (industry avg: 21%)", "5.2x revenue per email vs. previous baseline", "Deliverability rates sustained above 98%"],
    tags: ["Lifecycle Flows", "Segmentation", "Deliverability", "A/B Testing", "Klaviyo & HubSpot", "Template Design", "Revenue Reporting"],
    accent: "primary" as const,
    image: holographicUi,
  },
  {
    icon: Sparkles, number: "10", title: "Product Launch Content & Collateral",
    tagline: "Launches Engineered for Liftoff.",
    body: "Content writing and creative collateral built specifically for product launches—messaging frameworks, sales decks, one-pagers, landing pages, demo scripts, and campaign assets that align teams and convert audiences from day one.",
    extended: "We've launched products for Series B startups, Fortune 500 enterprises, and luxury consumer brands. Our launch packages include positioning narratives, press materials, sales enablement collateral, internal comms, and the full creative campaign system—coordinated so marketing, sales, and product speak with one voice.",
    deepDive: "Our launch practice integrates strategic copywriting, brand storytelling, and production design. We run messaging workshops to extract category-defining narratives, then translate them across every surface: investor decks, analyst briefings, paid media, organic social, video scripts, email sequences, and sales playbooks. We've shipped launch kits with 80+ deliverables in under six weeks—each piece tonally consistent, on-brand, and ready for global rollout.",
    results: ["Average 4.6x pipeline lift in launch quarter", "Press coverage in 28+ tier-1 publications per launch", "Sales-team adoption of new collateral within 7 days"],
    tags: ["Messaging Strategy", "Sales Decks", "Landing Pages", "PR & Press Kits", "Demo Scripts", "Campaign Creative", "Launch Playbooks"],
    accent: "secondary" as const,
    image: fluidArt,
  },
  {
    icon: Brain, number: "11", title: "AI Brain Development for Small Business",
    tagline: "Your Digital Consultant, On-Brand 24/7.",
    body: "We build your AI Brain—a private digital consultant trained on your company's content, brand guidelines, processes, and product knowledge. Your team asks questions, drafts content, and makes decisions with an AI that actually knows your business.",
    extended: "An AI Brain is more than a chatbot. It's a curated knowledge system grounded in your brand voice, sales playbooks, customer FAQs, technical documentation, and historical creative—so every output sounds like you, follows your guidelines, and respects your context. Visual Smash designs the data architecture, ingests your sources, tunes the retrieval, and ships a secure interface your team can use day one.",
    deepDive: "We architect AI Brains using retrieval-augmented generation (RAG), vector databases, and brand-aware prompt frameworks. We ingest brand books, product docs, sales scripts, support tickets, and creative archives—then layer guardrails for tone, accuracy, and compliance. Deployments include a branded chat interface, role-based access, audit logging, and continuous learning workflows. We train your team on prompting best practices and provide 90-day optimization to refine retrieval quality and expand capabilities.",
    results: ["62% reduction in content turnaround time", "On-brand consistency scores above 94%", "ROI realized within first 90 days for SMB deployments"],
    tags: ["RAG Architecture", "Brand Voice AI", "Knowledge Base", "Custom GPTs", "Vector Search", "Secure Deployment", "Team Training"],
    accent: "primary" as const,
    image: abstractGlass,
  },
];

const methodology = [
  { icon: Lightbulb, step: "01", title: "Discover", desc: "Deep-dive into your brand, market, and objectives. We listen before we create. Stakeholder interviews, competitive audits, and market research form the foundation.", color: "primary" },
  { icon: Target, step: "02", title: "Strategize", desc: "Define the approach, set success metrics, and align creative vision with business goals. Strategic briefs, mood boards, and concept development.", color: "secondary" },
  { icon: Layers, step: "03", title: "Execute", desc: "Craft, build, and refine. Iterative sprints with transparent communication at every stage. Weekly reviews, real-time collaboration, and meticulous attention to detail.", color: "primary" },
  { icon: TrendingUp, step: "04", title: "Amplify", desc: "Launch, measure, and optimize. We don't walk away—we ensure the work performs. Post-launch analytics, optimization sprints, and ongoing creative support.", color: "secondary" },
];

import { Target } from "lucide-react";

const servicesFaqs = [
  {
    q: "Are you a full-service web design and marketing agency in Stockton, CA?",
    a: "Yes. Visual Smash is a Stockton, California–based web design and marketing agency offering custom websites, branding, UX, SEO, paid media, email automation, and AI-powered creative. We serve clients across Stockton, Lodi, Tracy, Modesto, Manteca, the broader San Joaquin County, the Central Valley, and the San Francisco Bay Area."
  },
  {
    q: "How much does a custom website from a Stockton web design agency cost?",
    a: "Most small-business websites we build in the Central Valley land between $6,000 and $25,000, depending on page count, integrations, and content production. Enterprise platforms, ecommerce stores, and AI-enabled web applications scale from $35,000 upward. We send a fixed-fee proposal after a free 30-minute discovery call."
  },
  {
    q: "How long does it take to launch a new website?",
    a: "A typical Stockton small-business site launches in 4–6 weeks. Brand-led marketing sites with custom photography and motion design average 8–10 weeks. Headless ecommerce builds, multilingual sites, and complex web apps run 10–16 weeks. We share a week-by-week timeline before kickoff."
  },
  {
    q: "Do you offer SEO and local SEO services for Stockton businesses?",
    a: "Yes. Every site we ship includes on-page SEO, schema markup, Core Web Vitals tuning, and a local SEO foundation: Google Business Profile optimization, NAP consistency, local landing pages, and review-generation flows. We also offer ongoing SEO retainers focused on ranking for high-intent Central Valley search terms."
  },
  {
    q: "Can you redesign an existing WordPress, Shopify, Webflow, or Wix site?",
    a: "Absolutely. We migrate and redesign WordPress, Shopify, Webflow, Wix, Squarespace, and custom-coded sites. We preserve SEO equity with full redirect mapping, keyword preservation, and structured-data migration so traffic stays intact through the relaunch."
  },
  {
    q: "Do you build ecommerce websites?",
    a: "Yes — Shopify, WooCommerce, BigCommerce, and headless commerce on Next.js. We design product pages that convert, integrate Klaviyo and Meta/Google ads, and engineer checkout flows that lift average order value and reduce cart abandonment."
  },
  {
    q: "What makes Visual Smash different from other Stockton marketing agencies?",
    a: "Twenty years of Fortune 500 creative experience delivered with the speed and intimacy of a boutique studio. We pair senior designers and strategists with proprietary AI workflows, so you get agency-grade craft at a Central Valley price point — and we cap our roster at 2–3 new partnerships per quarter to protect quality."
  },
  {
    q: "Do you only work with clients in Stockton, California?",
    a: "Stockton is home base, but we serve clients throughout the Central Valley (Lodi, Tracy, Modesto, Manteca, Sacramento) and the San Francisco Bay Area, plus remote engagements across the U.S. Our process is fully remote-friendly with optional on-site workshops for local clients."
  },
  {
    q: "Do you offer ongoing marketing retainers or one-time projects?",
    a: "Both. Project engagements are ideal for a website launch, rebrand, or campaign. Monthly retainers cover continuous design, SEO, content, paid media, and marketing automation — perfect for growing Stockton and Bay Area brands that need a dedicated creative partner."
  },
  {
    q: "How do I get a proposal from your Stockton web design team?",
    a: "Email visualsmash@gmail.com with a short brief — goals, audience, timeline, and rough budget. We respond within 24 hours and book a 30-minute discovery call. You'll receive a tailored proposal with scope, milestones, and a fixed investment within 5 business days."
  }
];

const serviceAreas = [
  { city: "Stockton, CA", note: "Headquarters — Downtown, Miracle Mile, Brookside, Lincoln Village, Weston Ranch, Spanos Park" },
  { city: "Lodi, CA", note: "Wine-country brands, hospitality, and downtown Lodi retail" },
  { city: "Tracy, CA", note: "Logistics, ecommerce, and Tri-Valley B2B clients" },
  { city: "Modesto, CA", note: "Agriculture, healthcare, and Stanislaus County professional services" },
  { city: "Manteca & Ripon, CA", note: "Home services, construction, and family-owned businesses" },
  { city: "Sacramento, CA", note: "Government contractors, nonprofits, and Capital Region startups" },
  { city: "San Joaquin County", note: "Local SEO, multi-location franchise, and county-wide campaigns" },
  { city: "SF Bay Area", note: "Tech, fintech, biotech, and venture-backed launch partners" },
];

export default function UseCases() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="pt-24">
      <SEO pageKey="use-cases"
        title="Services | Stockton CA Marketing Agency & Web Development"
        description="Stockton CA web design & marketing services: custom websites, branding, UX, SEO, AI software, and marketing automation for Stockton, CA, Central Valley & Bay Area."
        canonical="https://visualsmash.lovable.app/use-cases"
        keywords="Stockton CA marketing agency, Stockton CA creative studio, Stockton CA web development services, Stockton marketing agency, Stockton creative studio, Stockton web development, Stockton web developer, web development agency Stockton, web development services Stockton CA, web design agency Stockton CA, web designer Stockton, website design Stockton, custom web design Stockton, responsive web design Stockton, ecommerce web design Stockton, marketing agency Stockton CA, creative agency Stockton, branding agency Stockton, design agency Stockton, advertising agency Stockton, digital marketing agency Stockton, UX design Stockton, marketing automation Stockton, AI marketing Stockton, graphic design Stockton, logo design Stockton, SEO agency Stockton, social media marketing Stockton, email marketing Stockton, Central Valley web design agency, Bay Area web design agency"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "name": "Services — Web Design & Marketing Agency Stockton CA",
              "description": "Core web design, branding, UX, SEO, AI, and automation services from a Stockton, CA agency serving the Central Valley and Bay Area.",
              "url": "https://visualsmash.lovable.app/use-cases"
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://visualsmash.lovable.app/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://visualsmash.lovable.app/use-cases" }
              ]
            },
            {
              "@type": "ItemList",
              "name": "Services",
              "itemListElement": useCases.map((u, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                  "@type": "Service",
                  "name": u.title,
                  "description": u.body,
                  "areaServed": ["Stockton, CA", "San Joaquin County", "Central Valley", "San Francisco Bay Area"],
                  "provider": { "@type": "Organization", "name": "Visual Smash", "url": "https://visualsmash.lovable.app" }
                }
              }))
            },
            {
              "@type": "FAQPage",
              "mainEntity": servicesFaqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": { "@type": "Answer", "text": f.a }
              }))
            }
          ]
        }}
      />

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <FloatingOrb size={400} color="primary" x="80%" y="10%" delay={0} />
        <FloatingOrb size={250} color="secondary" x="5%" y="60%" delay={2} />
        <RotatingBorder className="top-20 right-10 hidden lg:block opacity-15" />

        <motion.div style={{ opacity: heroOpacity }} className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal>
            <LineReveal className="mb-6" />
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              What We Do
            </p>
          </ScrollReveal>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-display font-display font-black uppercase leading-none text-foreground"
            >
              Use{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Cases.</span>
            </motion.h1>
          </div>
          <ScrollReveal delay={0.3}>
            <p className="mt-8 max-w-2xl font-display text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              Eight disciplines. Twenty years of mastery. Every one battle-tested across Fortune 500
              campaigns, luxury brands, and high-growth startups. This is where strategy meets execution.
            </p>
          </ScrollReveal>
        </motion.div>
      </section>

      {/* ── VISUAL BREAK ── */}
      <ParallaxLayer speed={0.3}>
        <section className="relative overflow-hidden">
          <img
            src={usecasesVisual}
            alt="Abstract 3D shapes representing our creative capabilities"
            loading="lazy" decoding="async"
            width={1280}
            height={600}
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </section>
      </ParallaxLayer>

      {/* ── USE CASES LIST ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="sr-only">Our Disciplines</h2>
          <div className="space-y-12">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.number} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden border border-border transition-all duration-500 hover:border-primary/40 border-glow"
                >
                  {/* Header with image */}
                  <div className="grid lg:grid-cols-[1fr_300px]">
                    <div className="p-8 md:p-10 relative">
                      <div className={`absolute -top-20 -right-20 h-64 w-64 rounded-full blur-3xl transition-all duration-700 ${
                        uc.accent === "primary" ? "bg-primary/3 group-hover:bg-primary/8" : "bg-secondary/3 group-hover:bg-secondary/8"
                      }`} />
                      <div className={`absolute top-0 right-0 w-20 h-px ${uc.accent === "primary" ? "bg-primary/20" : "bg-secondary/20"}`} />
                      <div className={`absolute top-0 right-0 w-px h-20 ${uc.accent === "primary" ? "bg-primary/20" : "bg-secondary/20"}`} />

                      <div className="relative">
                        <div className="mb-6 flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <motion.div
                              whileHover={{ rotate: 15, scale: 1.2 }}
                              transition={{ type: "spring", stiffness: 300 }}
                              className={`flex h-12 w-12 items-center justify-center border transition-colors duration-300 ${
                                uc.accent === "primary" ? "border-primary/30 group-hover:border-primary/60" : "border-secondary/30 group-hover:border-secondary/60"
                              }`}
                            >
                              <uc.icon size={20} className={`transition-colors duration-300 ${uc.accent === "primary" ? "text-primary" : "text-secondary"}`} />
                            </motion.div>
                            <span className="font-display text-xs font-bold tracking-widest text-muted-foreground/40">{uc.number}</span>
                          </div>
                        </div>

                        <h3 className="mb-2 font-display text-2xl font-black uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-gradient md:text-3xl">
                          {uc.title}
                        </h3>
                        <p className={`mb-4 font-editorial text-sm italic ${uc.accent === "primary" ? "text-primary/70" : "text-secondary/70"}`}>
                          {uc.tagline}
                        </p>
                        <p className="mb-4 font-display text-sm font-light leading-relaxed text-muted-foreground">{uc.body}</p>
                        <p className="mb-4 font-display text-sm font-light leading-relaxed text-muted-foreground/80">{uc.extended}</p>
                        <p className="mb-6 font-display text-sm font-light leading-relaxed text-muted-foreground/70">{uc.deepDive}</p>

                        {/* Results */}
                        <div className="mb-6 space-y-2">
                          {uc.results.map((result, ri) => (
                            <motion.div
                              key={ri}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + ri * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2 size={14} className={`shrink-0 mt-0.5 ${uc.accent === "primary" ? "text-primary" : "text-secondary"}`} />
                              <span className="font-display text-xs font-medium text-foreground/70">{result}</span>
                            </motion.div>
                          ))}
                        </div>

                        <div className={`h-px w-16 mb-6 ${uc.accent === "primary" ? "bg-primary/30" : "bg-secondary/30"}`} />

                        <div className="flex flex-wrap gap-2">
                          {uc.tags.map((tag) => (
                            <span key={tag} className={`font-display text-[10px] font-bold uppercase tracking-widest border px-3 py-1 transition-colors duration-300 ${
                              uc.accent === "primary"
                                ? "border-primary/20 text-primary/60 group-hover:border-primary/40 group-hover:text-primary/80"
                                : "border-secondary/20 text-secondary/60 group-hover:border-secondary/40 group-hover:text-secondary/80"
                            }`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Side image */}
                    <div className="relative hidden lg:block overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        src={uc.image}
                        alt={`${uc.title} visual`}
                        loading="lazy" decoding="async"
                        width={300}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISUAL DIVIDER ── */}
      <ParallaxLayer speed={0.4}>
        <section className="relative overflow-hidden">
          <img
            src={abstractGlass}
            alt="Abstract crystalline creative visual"
            loading="lazy" decoding="async"
            width={1280}
            height={720}
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background opacity-60" />
        </section>
      </ParallaxLayer>

      {/* ── METHODOLOGY ── */}
      <section className="border-y border-border py-24 relative">
        <FloatingOrb size={200} color="secondary" x="85%" y="20%" delay={1} />
        <RotatingBorder className="bottom-10 left-10 hidden lg:block opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <LineReveal className="mb-6" />
            <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4">How We Work</p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Our <span className="font-editorial italic font-light text-accent-gradient">Process.</span>
            </h2>
            <p className="mt-4 max-w-xl font-display text-sm font-light text-muted-foreground">
              A proven four-phase methodology refined over 20 years and 500+ projects.
              Rigorous enough for Fortune 500 governance, agile enough for startup speed.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((p) => (
              <StaggerItem key={p.step}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative border border-border p-6 transition-all duration-300 hover:border-primary/40 group h-full hover-lift border-glow"
                >
                  <div className="absolute -top-3 left-6 bg-background px-2">
                    <span className={`font-display text-xs font-bold tracking-widest ${p.color === "primary" ? "text-primary" : "text-secondary"}`}>{p.step}</span>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p.icon size={20} className={`mt-2 mb-4 ${p.color === "primary" ? "text-primary" : "text-secondary"} transition-colors group-hover:text-foreground`} />
                  </motion.div>
                  <h4 className="mb-3 font-display text-lg font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">{p.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── NUMBERS BAND ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/3 to-primary/5" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "20+", label: "Years Experience" },
              { value: "96", label: "Avg Lighthouse Score" },
              { value: "4.2×", label: "Average ROAS" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div whileHover={{ scale: 1.05 }} className="group">
                  <p className="font-display text-3xl md:text-4xl font-black text-accent-gradient">{stat.value}</p>
                  <p className="mt-1 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <LineReveal className="mb-6" />
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Service Area
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Web Design &amp; Marketing Across the{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Central Valley.</span>
            </h2>
            <p className="mt-4 max-w-2xl font-display text-sm font-light leading-relaxed text-muted-foreground">
              Visual Smash is a Stockton, California web design and marketing agency serving small businesses,
              ecommerce brands, and enterprises across San Joaquin County, the Central Valley, and the San Francisco Bay Area.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <StaggerItem key={area.city}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="border border-border p-5 h-full hover:border-primary/40 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                        {area.city}
                      </h3>
                      <p className="mt-2 font-display text-xs font-light leading-relaxed text-muted-foreground">
                        {area.note}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── SERVICES FAQ ── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle size={16} className="text-primary" />
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Services FAQ
              </p>
            </div>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Stockton Web Design{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Questions, Answered.</span>
            </h2>
            <p className="mt-4 max-w-2xl font-display text-sm font-light leading-relaxed text-muted-foreground">
              Pricing, timelines, SEO, ecommerce, redesigns, and how we partner with businesses across Stockton,
              the Central Valley, and the Bay Area.
            </p>
          </ScrollReveal>
          <div className="divide-y divide-border">
            {servicesFaqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={Math.min(i, 6) * 0.04}>
                <article className="py-6">
                  <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-display text-sm font-light leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-lines opacity-15" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
        <FloatingOrb size={350} color="primary" x="50%" y="30%" delay={0} />
        <RotatingBorder className="top-10 right-10 hidden lg:block opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal>
            <LineReveal className="mx-auto max-w-xs mb-8" />
            <p className="mb-6 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">Ready to Start?</p>
            <h2 className="text-display font-display font-black uppercase text-foreground">
              Your Next <span className="font-editorial italic font-light text-accent-gradient">Move.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-display text-base font-light text-muted-foreground">
              Whether it's one discipline or all eight—we tailor our approach to your ambitions.
              Let's build something that defines your category.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mt-10">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-4 bg-primary px-12 py-5 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-glow-blue animate-pulse-glow"
              >
                Start a Conversation
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
