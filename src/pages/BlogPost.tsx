import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, Clock, Tag, Calendar } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";

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

const SITE = "https://visualsmash.lovable.app";

// Convert **bold** markdown subheadings to proper ## headings so they render
// as semantic H2 with anchors and TOC.
const enhanceContent = (raw: string) =>
  raw
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      const match = trimmed.match(/^\*\*(.+?)\*\*$/);
      if (match) return `## ${match[1]}`;
      return block;
    })
    .join("\n\n");

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const extractHeadings = (content: string) => {
  const re = /^##\s+(.+)$/gm;
  const out: { id: string; text: string }[] = [];
  let m;
  while ((m = re.exec(content)) !== null) {
    out.push({ id: slugify(m[1]), text: m[1] });
  }
  return out;
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setNotFound(false);
    setPost(null);
    (async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (cancelled) return;
      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setPost(data as BlogPost);
      const { data: rel } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("category", (data as BlogPost).category)
        .neq("slug", slug!)
        .order("published_at", { ascending: false })
        .limit(3);
      if (!cancelled && rel) setRelated(rel as BlogPost[]);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl font-black uppercase mb-4">Article not found</h1>
        <Link to="/blog" className="font-display text-sm uppercase tracking-widest text-primary underline-accent">
          ← Back to blog
        </Link>
      </div>
    );
  }

  const enhanced = enhanceContent(post.content);
  const headings = extractHeadings(enhanced);
  const url = `${SITE}/blog/${post.slug}`;
  const formatted = new Date(post.published_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        articleSection: post.category,
        datePublished: post.published_at,
        dateModified: post.published_at,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "Visual Smash" },
        publisher: {
          "@type": "Organization",
          name: "Visual Smash",
          logo: {
            "@type": "ImageObject",
            url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/70455fe2-15bd-4dd2-a405-f3cb3fef6556/id-preview-ab820fab--a02f9379-36d5-4f16-9b2b-ea77e5f17fd5.lovable.app-1774582250132.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="relative overflow-x-hidden">
      <SEO
        title={post.title}
        description={post.excerpt}
        canonical={url}
        type="article"
        jsonLd={jsonLd}
        keywords={`${post.category}, Stockton CA marketing agency, web design agency Stockton CA, Central Valley, San Joaquin County, Bay Area, Visual Smash blog`}
      />

      <article className="relative pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft size={12} /> Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6 text-xs">
              <Tag size={12} className="text-primary" />
              <span className="font-display font-bold uppercase tracking-[0.2em] text-primary">{post.category}</span>
              <span className="text-border">·</span>
              <Calendar size={12} className="text-muted-foreground" />
              <span className="font-display text-muted-foreground">{formatted}</span>
              <span className="text-border">·</span>
              <Clock size={12} className="text-muted-foreground" />
              <span className="font-display text-muted-foreground">{post.read_time}</span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-tight mb-6">
              {post.title}
            </h1>
            <p className="font-display text-lg font-light text-muted-foreground leading-relaxed mb-12">
              {post.excerpt}
            </p>
          </motion.div>

          {headings.length > 2 && (
            <nav className="mb-12 p-6 border border-border bg-card/40">
              <p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">
                Table of Contents
              </p>
              <ol className="space-y-2">
                {headings.map((h, i) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="font-display text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-primary/60 mr-2">{String(i + 1).padStart(2, "0")}</span>
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="prose prose-invert prose-lg max-w-none font-display
            prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-foreground
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-foreground
            prose-p:font-light prose-p:text-foreground/80 prose-p:leading-relaxed
            prose-strong:text-foreground prose-strong:font-bold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-li:text-foreground/80 prose-ul:my-4 prose-ol:my-4
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => {
                  const text = String(children);
                  return <h2 id={slugify(text)}>{children}</h2>;
                },
              }}
            >
              {enhanced}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <ScrollReveal className="mb-10">
              <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">
                Keep Reading
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase">More in {post.category}</h2>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group block p-6 border border-border bg-card/40 transition-all hover:border-primary/40 hover:bg-muted/10"
                >
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3 block">
                    {r.category}
                  </span>
                  <h3 className="font-display text-base font-black uppercase tracking-tight text-foreground group-hover:text-primary mb-2">
                    {r.title}
                  </h3>
                  <p className="font-display text-xs font-light text-muted-foreground line-clamp-3">{r.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 font-display text-[10px] font-bold uppercase tracking-widest text-primary">
                    Read <ArrowRight size={10} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 border-t border-border text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-2xl md:text-3xl font-black uppercase mb-4">
            Have a project in mind?
          </h2>
          <p className="font-display text-sm text-muted-foreground mb-8">
            Visual Smash is a Stockton, CA web design & marketing agency serving the Central Valley and Bay Area.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-primary px-10 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-primary-foreground hover:shadow-glow-blue"
          >
            Start a Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}