import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useSiteTheme } from "@/hooks/useSiteTheme";
import Home from "./pages/Home";
import { routeLoaders } from "@/lib/routeLoaders";

// Lazy-load secondary routes for faster initial load.
const About = lazy(routeLoaders.about);
const UseCases = lazy(routeLoaders.useCases);
const Blog = lazy(routeLoaders.blog);
const BlogPost = lazy(routeLoaders.blogPost);
const Contact = lazy(routeLoaders.contact);
const Portfolio = lazy(routeLoaders.portfolio);
const CaseStudy = lazy(routeLoaders.caseStudy);
const TechStack = lazy(routeLoaders.techStack);
const FAQ = lazy(routeLoaders.faq);
const LocationPage = lazy(routeLoaders.location);
const NotFound = lazy(routeLoaders.notFound);

const queryClient = new QueryClient();

const ThemeLoader = () => {
  useSiteTheme();
  return null;
};

/** Prefetch secondary route chunks after the browser goes idle. */
const IdlePrefetch = () => {
  useEffect(() => {
    const ric =
      (window as any).requestIdleCallback ||
      ((cb: any) => setTimeout(cb, 1500));
    const id = ric(() => {
      // Fire in low-priority order; failures are silent.
      Object.values(routeLoaders).forEach((load) => {
        try { load(); } catch {}
      });
    });
    return () => {
      const cic = (window as any).cancelIdleCallback || clearTimeout;
      try { cic(id); } catch {}
    };
  }, []);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <PageTransition>
      <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<CaseStudy />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/web-design-stockton" element={<LocationPage />} />
          <Route path="/web-design-lodi" element={<LocationPage />} />
          <Route path="/web-design-tracy" element={<LocationPage />} />
          <Route path="/web-design-modesto" element={<LocationPage />} />
          <Route path="/web-design-manteca" element={<LocationPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ThemeLoader />
          <IdlePrefetch />
          <ScrollToTop />
          <Navigation />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
