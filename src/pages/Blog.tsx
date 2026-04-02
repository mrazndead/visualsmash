import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import blogHero from "@/assets/blog-hero.jpg";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  published_at: string;
  featured: boolean;
}

const categories = [
  "All", "AI Design", "Web Design", "UX Design", "Branding",
  "Marketing", "Graphic Design", "Traffic Design", "AI Software Development",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });

      if (!error && data) {
        setPosts(data as BlogPost[]);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const filtered = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = posts.filter((p) => p.featured);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

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

      {/* ── LOADING ── */}
      {loading && (
        <div className="py-32 text-center">
          <div className="inline-block h-8 w-8 animate-spin border-2 border-primary border-t-transparent rounded-full" />
        </div>
      )}

      {/* ── FEATURED POSTS ── */}
      {!loading && activeCategory === "All" && featured.length > 0 && (
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
                        {post.read_time}
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
      {!loading && (
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
                            {formatDate(post.published_at)}
                          </span>
                          <span className="text-border">·</span>
                          <span className="font-display text-[10px] text-muted-foreground">
                            {post.read_time}
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

            {!loading && filtered.length === 0 && (
              <p className="py-20 text-center font-display text-sm text-muted-foreground">
                No articles in this category yet. Check back soon.
              </p>
            )}
          </div>
        </section>
      )}

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
