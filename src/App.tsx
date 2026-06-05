import { lazy, Suspense } from "react";
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

// Lazy-load secondary routes for faster initial load
const About = lazy(() => import("./pages/About"));
const UseCases = lazy(() => import("./pages/UseCases"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const TechStack = lazy(() => import("./pages/TechStack"));
const FAQ = lazy(() => import("./pages/FAQ"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ThemeLoader = () => {
  useSiteTheme();
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
