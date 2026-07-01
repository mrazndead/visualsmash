// Lazy-import loaders for secondary routes. Kept in a plain module so
// vite-plugin-react-swc's Fast Refresh remains happy (App.tsx exports only
// components).
export const routeLoaders = {
  about: () => import("@/pages/About"),
  useCases: () => import("@/pages/UseCases"),
  blog: () => import("@/pages/Blog"),
  blogPost: () => import("@/pages/BlogPost"),
  contact: () => import("@/pages/Contact"),
  portfolio: () => import("@/pages/Portfolio"),
  caseStudy: () => import("@/pages/CaseStudy"),
  techStack: () => import("@/pages/TechStack"),
  faq: () => import("@/pages/FAQ"),
  location: () => import("@/pages/LocationPage"),
  notFound: () => import("@/pages/NotFound"),
};