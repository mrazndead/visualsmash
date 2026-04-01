import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SEO } from "@/components/SEO";
import blogHero from "@/assets/blog-hero.jpg";

const blogPosts = [
  {
    slug: "ai-transforming-graphic-design",
    title: "How AI Is Transforming Graphic Design in 2025",
    excerpt:
      "From generative fill to AI-powered layout systems, artificial intelligence is rewriting the rules of graphic design. Here's how forward-thinking agencies are leveraging these tools without losing the human touch.",
    category: "AI Design",
    readTime: "8 min",
    date: "Mar 2025",
    featured: true,
    content: `Artificial intelligence has moved beyond novelty status in the design world. Today's AI-powered tools are fundamentally reshaping how graphic designers approach every stage of the creative process—from initial ideation to final production.

**The New Creative Partnership**

The most significant shift isn't about replacing designers—it's about augmenting their capabilities. Tools like Adobe Firefly, Midjourney, and Stable Diffusion have become essential brainstorming partners. Senior designers at top agencies now use generative AI to explore hundreds of visual directions in the time it once took to sketch a dozen.

**Production at Scale**

Where AI truly shines is in production workflows. Automated background removal, intelligent resizing, and style-consistent asset generation have compressed timelines that once stretched across weeks into days. For agencies handling Fortune 500 accounts with thousands of deliverables, this isn't a luxury—it's a competitive necessity.

**The Human Edge Remains**

Despite AI's capabilities, the strategic layer remains irreplaceable. Understanding brand nuance, cultural context, and emotional resonance still requires human judgment. The best agencies use AI as a force multiplier for senior talent, not a replacement for junior roles.

**What This Means for Brands**

Brands working with AI-augmented agencies get more exploration, faster iteration, and higher-quality output without inflated budgets. The question isn't whether your agency uses AI—it's how thoughtfully they integrate it into a human-led process.`,
  },
  {
    slug: "future-of-web-design-2025",
    title: "The Future of Web Design: Trends Defining the Next Era",
    excerpt:
      "Brutalist aesthetics, immersive 3D experiences, AI-personalized layouts, and performance-first design are reshaping the web. We break down the trends that actually matter.",
    category: "Web Design",
    readTime: "10 min",
    date: "Feb 2025",
    featured: true,
    content: `Web design is experiencing its most dramatic evolution since the responsive revolution. The convergence of new CSS capabilities, AI-powered personalization, and shifting user expectations is creating opportunities for brands willing to push boundaries.

**Brutalism Goes Mainstream**

What started as a counter-movement against polished corporate design has matured into a legitimate aesthetic language. Modern brutalism combines raw typography, bold grid systems, and intentional friction with sophisticated interaction design. It's not about being ugly—it's about being honest.

**Performance as a Design Decision**

Core Web Vitals aren't just an SEO metric anymore—they're a design constraint. The best web designers now think about perceived performance alongside visual impact. Skeleton screens, progressive loading, and animation budgets are part of the design system, not afterthoughts.

**AI-Driven Personalization**

Static websites are giving way to adaptive experiences. AI systems can now modify layout, content hierarchy, and even color schemes based on user behavior, time of day, and contextual signals. The "one design fits all" approach is rapidly becoming obsolete.

**Immersive Without the Bloat**

WebGL, Three.js, and modern CSS have made it possible to create immersive 3D experiences without the performance penalties of previous years. Smart agencies create wow moments through selective immersion rather than blanketing every page in 3D.`,
  },
  {
    slug: "ux-design-psychology-conversion",
    title: "UX Psychology: Design Patterns That Actually Convert",
    excerpt:
      "Beyond best practices—how cognitive psychology, behavioral economics, and user research combine to create digital experiences that drive measurable business outcomes.",
    category: "UX Design",
    readTime: "12 min",
    date: "Feb 2025",
    content: `Great UX design isn't about following trends—it's about understanding how humans think, decide, and act. The most effective digital experiences are built on deep psychological principles, not just aesthetic preferences.

**Cognitive Load and Decision Architecture**

Every interface asks users to process information and make decisions. The best UX designers reduce cognitive load through progressive disclosure, smart defaults, and contextual simplification. When Hick's Law meets thoughtful information architecture, conversion rates climb.

**The Trust Stack**

Conversion isn't a single moment—it's a cascade of micro-trust signals. From consistent typography to transparent pricing to thoughtful error states, users are constantly evaluating whether they trust your product. Each interaction either builds or erodes that trust.

**Friction as a Feature**

Not all friction is bad. Strategic friction—confirmation dialogs, thoughtful onboarding flows, deliberate speed bumps before irreversible actions—actually improves user satisfaction and reduces churn. The art is knowing where to add friction and where to remove it.

**Measuring What Matters**

Vanity metrics kill good UX. Effective UX teams measure task completion rates, time-to-value, error recovery rates, and long-term retention alongside conversion. A beautiful form that converts at 80% but generates 40% support tickets isn't good UX—it's good-looking bad UX.`,
  },
  {
    slug: "brand-strategy-digital-age",
    title: "Building a Brand That Survives the Algorithm",
    excerpt:
      "In a world of infinite content and shrinking attention spans, brand strategy has never been more critical—or more misunderstood. Here's what actually builds lasting brand equity.",
    category: "Branding",
    readTime: "9 min",
    date: "Jan 2025",
    content: `The brands that endure aren't the ones with the biggest ad budgets or the most viral moments. They're the ones with the clearest sense of identity, expressed consistently across every touchpoint.

**Brand as Operating System**

A brand isn't a logo, a color palette, or a tagline. It's an operating system—a set of principles that guide every decision from product design to customer service to how you write error messages. When your brand is your OS, consistency becomes effortless.

**The Authenticity Paradox**

Everyone claims to value authenticity, but truly authentic brands are rare because authenticity requires vulnerability. It means admitting what you're not good at, making promises you can actually keep, and showing real humans behind the corporate facade.

**Visual Identity in the Age of AI**

AI can generate a thousand logos overnight. This makes craft, intentionality, and strategic thinking more valuable, not less. A brand identity created with deep strategic insight and meticulous execution communicates something an AI-generated mark never can: this company cares enough to invest in getting it right.

**Consistency Across Chaos**

Your brand appears across websites, social feeds, packaging, pitch decks, customer support chats, and employee Slack channels. The brands that win are the ones that feel coherent across all these contexts while adapting their tone and format to each.`,
  },
  {
    slug: "marketing-automation-ai-workflows",
    title: "Marketing Automation Meets AI: The New Playbook",
    excerpt:
      "Smart automation isn't about removing humans—it's about removing busywork. How AI-powered marketing automation is creating more effective, more personal campaigns at scale.",
    category: "Marketing",
    readTime: "7 min",
    date: "Jan 2025",
    content: `Marketing automation has been around for over a decade, but the integration of AI is creating a fundamentally different category of tooling. The gap between companies using traditional automation and AI-augmented automation is widening rapidly.

**Beyond Drip Campaigns**

Traditional marketing automation excels at "if this, then that" logic. AI-powered automation introduces "if this pattern, then this strategy" thinking. Instead of pre-built sequences, AI systems adapt messaging, timing, and channel selection based on individual user behavior patterns.

**Content at the Speed of Relevance**

The biggest bottleneck in marketing has always been content creation. AI doesn't just speed up content production—it enables contextual content that adapts to where each user is in their journey. Personalized subject lines, dynamic landing pages, and adaptive email content are table stakes for AI-forward teams.

**The Data-Creative Loop**

The most powerful automation systems create feedback loops between data and creative. Performance data informs creative decisions, which generate new data, which refines the creative approach. This loop compounds over time, creating an ever-deepening understanding of what resonates with each audience segment.

**Human Strategy, Machine Execution**

The companies winning with marketing automation aren't the ones automating the most—they're the ones automating the right things. Strategy, brand voice, and creative direction remain human-led. Execution, optimization, and scaling become machine-augmented.`,
  },
  {
    slug: "prompt-engineering-creative-professionals",
    title: "Prompt Engineering for Creative Professionals",
    excerpt:
      "The designers and marketers who master prompt engineering will define the next generation of creative work. A practical guide to speaking AI's language fluently.",
    category: "AI Design",
    readTime: "11 min",
    date: "Dec 2024",
    content: `Prompt engineering isn't just a technical skill—it's becoming a creative discipline. For designers, marketers, and creative directors, the ability to effectively communicate with AI systems is rapidly becoming as important as traditional creative skills.

**Thinking in Systems, Not Sentences**

Effective prompts aren't just well-written—they're well-structured. The best prompt engineers think about their requests as systems: defining style parameters, establishing constraints, specifying output formats, and building iterative refinement loops.

**The Creative Brief as Prompt**

There's a direct parallel between writing an effective creative brief and crafting an effective prompt. Both require clarity of vision, specificity of constraints, and enough creative space for unexpected excellence. Designers who've spent years writing briefs have a significant advantage in the prompt engineering era.

**Building Prompt Libraries**

Top agencies are building internal prompt libraries—curated collections of proven prompt patterns for specific creative tasks. These libraries become intellectual property, encoding an agency's creative methodology into reusable, refineable assets.

**The Iteration Mindset**

The biggest mistake in prompt engineering is treating it as one-shot. Expert prompt engineers expect to iterate, building on successful outputs and refining unsuccessful ones. This iterative approach mirrors the traditional design process—and that's not a coincidence.`,
  },
  {
    slug: "color-theory-digital-branding",
    title: "Advanced Color Theory for Digital Branding",
    excerpt:
      "Color is the most immediate and emotional element of any brand. How to build color systems that work across screens, contexts, cultures, and accessibility requirements.",
    category: "Graphic Design",
    readTime: "9 min",
    date: "Dec 2024",
    content: `Color decisions in branding carry more weight than any other visual choice. Research consistently shows that color increases brand recognition by up to 80% and influences up to 90% of snap judgments about products.

**Beyond the Color Wheel**

Most digital brands still approach color with a primary/secondary/accent framework inherited from print design. Modern digital color systems need to account for dark mode, variable screen calibration, WCAG accessibility requirements, and contextual adaptability.

**Systematic Color Architecture**

Building a robust color system starts with understanding your color's role in the interface hierarchy. Semantic color tokens—success, warning, danger, info—need to work independently of brand colors. The best systems separate decorative color from functional color from interactive color.

**Cultural Color Intelligence**

In global branding, color meaning shifts dramatically across cultures. Red signals luck in China, danger in Western markets, and purity in India. Effective global brands build flexible color systems that can adapt regional associations while maintaining overall brand coherence.

**Accessibility as a Creative Constraint**

WCAG contrast requirements aren't limitations—they're creative constraints that produce better design. Brands that treat accessibility as a checkbox end up with bland, safe palettes. Brands that embrace it as a design challenge create vibrant, inclusive color systems that work for everyone.`,
  },
  {
    slug: "design-systems-scaling-brands",
    title: "Design Systems: Scaling Your Brand Without Losing Its Soul",
    excerpt:
      "A design system is more than a component library. It's the codified DNA of your brand—and the secret to maintaining quality as you scale across teams, products, and channels.",
    category: "UX Design",
    readTime: "10 min",
    date: "Nov 2024",
    content: `Every growing brand faces the same tension: how do you scale creative output without diluting quality? The answer is a well-built design system—but most companies get it wrong.

**The Component Trap**

Most design systems start (and stop) as component libraries. Buttons, cards, forms—necessary but insufficient. A true design system encodes your brand's decision-making framework: when to use which pattern, why certain spacing values exist, how illustration style adapts to context.

**Design Tokens as Brand DNA**

Design tokens—the atomic values that define your visual language—are the most underappreciated element of modern design systems. Spacing scales, type ramps, color relationships, and animation curves define how your brand feels, not just how it looks.

**Governance Without Bureaucracy**

The best design systems balance consistency with creative freedom. Hard rules for functional patterns (forms, navigation, error states), flexible guidelines for expressive patterns (marketing pages, feature launches, seasonal campaigns). Too rigid and the system kills creativity; too loose and it fails its purpose.

**Measuring System Health**

A design system's value isn't measured by adoption rates alone. Track design consistency scores, time-to-production for new features, accessibility compliance rates, and designer satisfaction. A system that's widely adopted but universally hated isn't healthy.`,
  },
  {
    slug: "ai-tools-software-design",
    title: "AI-Powered Software Design: Tools Reshaping the Industry",
    excerpt:
      "From Figma's AI features to AI-generated code, the software design landscape is evolving faster than ever. A curated look at the tools and workflows defining modern software design.",
    category: "AI Design",
    readTime: "8 min",
    date: "Nov 2024",
    content: `The software design toolchain is experiencing its most dramatic transformation since the shift from desktop to cloud-based design tools. AI integration isn't just adding features—it's changing what's possible.

**Design-to-Code Reality**

The gap between design and development has been narrowing for years, but AI is closing it rapidly. Tools that generate production-ready code from design files are moving from "impressive demo" to "daily workflow." The implications for team structure, timelines, and costs are enormous.

**Intelligent Prototyping**

AI-powered prototyping tools can now generate interactive prototypes from wireframes, user stories, or even verbal descriptions. This doesn't replace design thinking—it accelerates the exploration phase, allowing teams to test more ideas with users before committing to development.

**Automated Design QA**

One of AI's most practical applications in software design is automated quality assurance. AI systems can check designs against brand guidelines, accessibility standards, and platform-specific requirements in seconds. This catches inconsistencies that human review often misses.

**The New Design Stack**

Modern software design teams are building AI-augmented toolchains: Figma for design, AI for exploration and production, design tokens for system management, and automated testing for quality. The teams that master this stack will outperform those still working with traditional workflows.`,
  },
  {
    slug: "content-marketing-strategy-2025",
    title: "Content Marketing Strategy for the AI-Saturated Web",
    excerpt:
      "When everyone has access to AI content generation, what differentiates great content marketing? Original thinking, strategic depth, and a point of view that algorithms can't replicate.",
    category: "Marketing",
    readTime: "9 min",
    date: "Oct 2024",
    content: `The content marketing landscape has been fundamentally altered by AI. With every company now capable of producing high-volume content, the competitive advantage has shifted from quantity to quality, from coverage to conviction.

**The Point-of-View Premium**

In a world flooded with AI-generated "comprehensive guides," content with a genuine point of view stands out dramatically. Brands that take positions, share original research, and express authentic perspectives create content that humans actually want to read and share.

**Strategic Content Architecture**

Random acts of content don't build authority. The most effective content marketing programs are architecturally planned: pillar content establishes authority, supporting content builds topical depth, and conversion content captures intent. Each piece serves a strategic purpose.

**Distribution Over Production**

The bottleneck in content marketing is no longer creation—it's distribution. Smart teams spend 20% of their effort creating remarkable content and 80% ensuring it reaches the right audience through the right channels at the right time.

**Measuring Content Impact**

Content marketing metrics need an overhaul. Page views and time-on-site are vanity metrics. Revenue influence, pipeline acceleration, brand search lift, and audience retention tell the real story. The best content marketing teams can draw a clear line from content to business outcomes.`,
  },
];

const categories = ["All", "AI Design", "Web Design", "UX Design", "Branding", "Marketing", "Graphic Design"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.filter((p) => p.featured);

  return (
    <div className="relative">
      <SEO
        title="Blog – Visual Smash | AI Design, Branding & Creative Insights"
        description="Expert insights on AI-powered design, branding strategy, UX psychology, marketing automation, and the future of creative technology from Visual Smash."
        canonical="https://visualsmash.lovable.app/blog"
      />

      {/* ── HERO ── */}
      <section className="relative flex min-h-[60vh] flex-col justify-end overflow-hidden pb-16 pt-40">
        <div className="absolute inset-0 z-0">
          <img
            src={blogHero}
            alt="Visual Smash blog"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <div className="absolute inset-0 z-[1] grid-lines opacity-20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Insights & Perspectives
              </span>
            </div>
            <h1 className="text-display font-display font-black uppercase text-foreground">
              The{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Blog.</span>
            </h1>
            <p className="mt-4 max-w-xl font-display text-base font-light text-muted-foreground">
              Expert perspectives on AI design, creative strategy, and the technologies
              reshaping how brands connect with audiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED POSTS ── */}
      {activeCategory === "All" && (
        <section className="py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal className="mb-12">
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-secondary">
                Featured
              </p>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2">
              {featured.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group relative border border-border p-8 md:p-10 h-full flex flex-col cursor-pointer transition-all duration-500 hover:border-primary/40 hover:bg-muted/10"
                    onClick={() => setExpandedPost(expandedPost === post.slug ? null : post.slug)}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-border transition-colors group-hover:border-primary/20" />
                    <div className="flex items-center gap-3 mb-6">
                      <Tag size={12} className="text-primary" />
                      <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        {post.category}
                      </span>
                      <span className="text-border">·</span>
                      <Clock size={12} className="text-muted-foreground" />
                      <span className="font-display text-[10px] text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors mb-4">
                      {post.title}
                    </h2>
                    <p className="font-display text-sm font-light leading-relaxed text-muted-foreground flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-primary">
                      {expandedPost === post.slug ? "Read Less" : "Read More"} <ArrowRight size={12} />
                    </div>

                    {expandedPost === post.slug && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-8 pt-8 border-t border-border"
                      >
                        <div className="font-display text-sm font-light leading-relaxed text-foreground/80 whitespace-pre-line">
                          {post.content}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ALL POSTS GRID ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <ScrollReveal className="mb-12">
            <h2 className="text-title font-display font-black uppercase text-foreground">
              {activeCategory === "All" ? "All Articles" : activeCategory}
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid gap-0 divide-y divide-border">
            {filtered.map((post) => (
              <StaggerItem key={post.slug}>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="group py-8 md:py-10 px-4 cursor-pointer transition-colors hover:bg-muted/10"
                  onClick={() => setExpandedPost(expandedPost === post.slug ? null : post.slug)}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                          {post.category}
                        </span>
                        <span className="text-border">·</span>
                        <span className="font-display text-[10px] text-muted-foreground">
                          {post.date}
                        </span>
                        <span className="text-border">·</span>
                        <span className="font-display text-[10px] text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-display text-lg md:text-xl font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 max-w-2xl font-display text-sm font-light text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-primary shrink-0">
                      {expandedPost === post.slug ? "Close" : "Read"} <ArrowRight size={12} className={`transition-transform ${expandedPost === post.slug ? "rotate-90" : ""}`} />
                    </div>
                  </div>

                  {expandedPost === post.slug && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-8 pt-8 border-t border-border max-w-3xl"
                    >
                      <div className="font-display text-sm font-light leading-relaxed text-foreground/80 whitespace-pre-line">
                        {post.content}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 border-t border-border">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-12">
          <ScrollReveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Want to work together?
            </p>
            <h2 className="text-title font-display font-black uppercase text-foreground">
              Let's Create Something{" "}
              <span className="font-editorial italic font-light text-accent-gradient">Remarkable.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="mt-8">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground transition-all duration-300 hover:shadow-glow-blue"
              >
                Start a Conversation <ArrowRight size={14} />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
