import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

// Lazy loading all pages for optimal bundle split and Core Web Vitals
const Home = React.lazy(() => import('../pages/Home'));
const AboutUs = React.lazy(() => import('../pages/AboutUs').then(module => ({ default: module.AboutUs })));
const BlogList = React.lazy(() => import('../pages/Blog').then(module => ({ default: module.BlogList })));
const ArticlePage = React.lazy(() => import('../pages/Blog/ArticlePage').then(module => ({ default: module.ArticlePage })));
const ContactPage = React.lazy(() => import('../pages/Contact').then(module => ({ default: module.ContactPage })));
const TermsPage = React.lazy(() => import('../pages/Terms').then(module => ({ default: module.TermsPage })));
const PrivacyPage = React.lazy(() => import('../pages/Privacy').then(module => ({ default: module.PrivacyPage })));
const NotFoundPage = React.lazy(() => import('../pages/NotFound'));

// Loader Component for dynamic lazy bundles transition
const PageLoader: React.FC = () => {
  return (
    <div className="w-full h-screen bg-secondary flex flex-col justify-center items-center gap-4">
      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      <p className="text-surface font-body text-sm tracking-wider font-semibold animate-pulse">Doctor In is preparing your view...</p>
    </div>
  );
};

// Helper component to handle scrolling to hash elements or resetting scroll to top
const ScrollToHashElement: React.FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
};

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
