import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, ChevronRight, MessageCircle, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GeoHead } from '@/seo/GeoHead';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { stripHtml, formatDate, calculateReadTime } from '@/utils/format';
import staticPosts from '@/config/posts.json';


export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('en') ? 'en' : 'es';

  const post = staticPosts.es.find((p: any) => p.slug === slug) || staticPosts.en.find((p: any) => p.slug === slug);
  const postLang = post?.uri?.startsWith('/en/') ? 'en' : 'es';
  const recentPosts = (postLang === 'en' ? staticPosts.en : staticPosts.es)
    .filter((p: any) => p.slug !== slug)
    .slice(0, 3);

  const loading = false;
  const error = null;

  const [activePost, setActivePost] = useState<any>(null);

  useEffect(() => {
    if (post) {
      setActivePost(post);
    }
  }, [post]);

  useEffect(() => {
    // If the new slug is NOT a translation of the currently active post, clear it
    if (activePost && activePost.slug !== slug) {
      const isTranslation = activePost.translations?.some((t: any) => t.slug === slug);
      if (!isTranslation) {
        setActivePost(null);
      }
    }
  }, [slug, activePost]);

  // Keep a ref of the current post so we can access translations synchronously
  // on the languageChanged event — before any async state updates happen.
  const postRef = useRef<any>(null);
  useEffect(() => {
    if (post) postRef.current = post;
  }, [post]);

  // Listen to i18n language changes and redirect to the correct translation immediately.
  // We use the i18n event directly (instead of depending on Apollo state) so that
  // we navigate BEFORE any re-fetch occurs, avoiding race conditions.
  useEffect(() => {
    const handleLanguageChange = (newLang: string) => {
      const currentPost = postRef.current;
      if (!currentPost || !slug) return;

      const normalizedNewLang = newLang.startsWith('en') ? 'en' : 'es';
      const postLang = currentPost.uri?.startsWith('/en/') ? 'en' : 'es';

      if (postLang === normalizedNewLang) return; // Already correct language, nothing to do

      const translationsList: any[] = currentPost.translations || [];
      const matchingTranslation = translationsList.find((t: any) => {
        const lang = t.uri?.startsWith('/en/') ? 'en' : 'es';
        return lang === normalizedNewLang;
      });

      if (matchingTranslation?.slug) {
        navigate(`/blog/${matchingTranslation.slug}`, { replace: true });
      } else {
        navigate('/blog', { replace: true });
      }
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, slug, navigate]);

  const postToRender = activePost || post;

  if (loading && !postToRender) {
    return (
      <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-secondary font-body text-sm font-semibold animate-pulse">
          {currentLang.startsWith('es') ? 'Cargando artículo...' : 'Loading article...'}
        </p>
      </div>
    );
  }

  if (error || (!loading && !postToRender)) {
    return (
      <div className="w-full bg-white py-24 px-6">
        <div className="max-w-[600px] mx-auto text-center space-y-6">
          <h1 className="text-secondary text-3xl font-heading font-bold">
            {currentLang.startsWith('es') ? 'Artículo no encontrado' : 'Article not found'}
          </h1>
          <p className="text-dark-alt/60 font-body">
            {currentLang.startsWith('es') 
              ? 'Lo sentimos, la entrada de blog que buscas no existe o fue movida.' 
              : 'Sorry, the blog post you are looking for does not exist or has been moved.'}
          </p>
          <Link to="/blog">
            <Button variant="primary" className="mt-4 flex gap-2 items-center mx-auto">
              <ArrowLeft size={16} />
              {currentLang.startsWith('es') ? 'Volver al Blog' : 'Back to Blog'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const readTime = calculateReadTime(postToRender.content || '');
  const formattedDate = formatDate(postToRender.date, currentLang);
  const featuredImg = postToRender.featuredImage?.node?.sourceUrl || '/images/blog_travel_health_1778509526333.png';
  const authorName = postToRender.author?.node?.name || 'Doctor In';
  const authorAvatar = postToRender.author?.node?.avatar?.url || '/images/generated-1778086207159.png';
  const firstCategory = postToRender.categories?.nodes?.[0]?.name || 'Travel Health';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": postToRender.title,
    "datePublished": postToRender.date,
    "image": [featuredImg],
    "author": {
      "@type": "Person",
      "name": authorName
    }
  };

  return (
    <div className={`w-full bg-white transition-opacity duration-300 ${loading ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
      <GeoHead 
        title={`${postToRender.title} | Doctor In Blog`}
        description={stripHtml(postToRender.excerpt || '').substring(0, 155)}
        jsonLd={jsonLd}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-[120px] pb-20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          {/* Main Content Area */}
          <article className="flex-1 max-w-[800px]">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-8 text-sm font-body">
              <Link to="/" className="text-primary hover:underline cursor-pointer">Home</Link>
              <ChevronRight size={14} className="text-dark-alt/30" />
              <Link to="/blog" className="text-primary hover:underline cursor-pointer">Blog</Link>
              <ChevronRight size={14} className="text-dark-alt/30" />
              <span className="text-dark-alt/60">{firstCategory}</span>
            </nav>

            {/* Title */}
            <h1 className="text-secondary text-[32px] lg:text-[48px] font-heading font-bold leading-[1.2] mb-8">
              {postToRender.title}
            </h1>

            {/* Author Row */}
            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-surface-alt">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center overflow-hidden">
                <img src={authorAvatar} alt={authorName} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-secondary font-heading font-bold">{authorName}</p>
                <div className="flex items-center gap-4 text-dark-alt/50 text-xs mt-1 font-body">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {formattedDate}</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {readTime} {currentLang.startsWith('es') ? 'min de lectura' : 'min read'}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src={featuredImg} 
                alt={postToRender.title} 
                className="w-full h-[300px] lg:h-[450px] object-cover rounded-[32px] shadow-premium"
              />
            </div>

            {/* Article Body (WordPress Content) */}
            <div 
              className="wordpress-content"
              dangerouslySetInnerHTML={{ __html: postToRender.content || '' }}
            />

            {/* Social Share */}
            <div className="mt-16 pt-8 border-t border-surface-alt flex items-center justify-between">
              <span className="text-secondary font-heading font-bold flex items-center gap-2">
                <Share2 size={18} /> {currentLang.startsWith('es') ? 'Comparte esta guía' : 'Share this guide'}
              </span>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-surface-alt hover:bg-accent/20 transition-all flex items-center justify-center text-secondary cursor-pointer">
                  <MessageCircle size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-surface-alt hover:bg-accent/20 transition-all flex items-center justify-center text-secondary cursor-pointer">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-[380px] space-y-10">
            
            {/* Help Widget */}
            <div className="bg-primary p-8 lg:p-10 rounded-[32px] text-surface shadow-urgent relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-125 transition-transform duration-700" />
              <h3 className="text-[24px] lg:text-[28px] font-heading font-bold mb-4 relative z-10 leading-tight">
                {currentLang.startsWith('es') ? '¿Necesitas atención médica?' : 'Need Medical Attention?'}
              </h3>
              <p className="text-white/80 font-body text-base mb-8 relative z-10">
                {currentLang.startsWith('es') 
                  ? 'Nuestros médicos certificados te atienden directamente en tu hotel en toda Latinoamérica. Disponibles 24/7.' 
                  : 'Our certified, multilingual doctors can assist you directly at your hotel across Latin America. Available 24/7.'}
              </p>
              <Button 
                href={t('common.whatsappEmergencyLink')}
                target="_blank"
                rel="noopener noreferrer"
                variant="light" 
                size="lg" 
                className="w-full !text-primary font-bold shadow-2xl flex gap-2.5 items-center justify-center relative z-10"
              >
                <WhatsAppIcon className="text-primary" />
                {currentLang.startsWith('es') ? 'WhatsApp Doctor Ahora' : 'WhatsApp a Doctor Now'}
              </Button>
              <p className="text-white/40 text-xs text-center mt-3 relative z-10 leading-relaxed">
                {currentLang.startsWith('es') 
                  ? 'Para emergencias que pongan en riesgo tu vida, contacta los servicios de emergencia locales.' 
                  : 'For life-threatening emergencies, contact local emergency services immediately.'}
              </p>
            </div>

            {/* Popular/Recent Articles */}
            <div className="bg-surface-alt p-8 rounded-[32px] border border-surface-alt/50">
              <h4 className="text-secondary text-[20px] font-heading font-bold mb-6">
                {currentLang.startsWith('es') ? 'Artículos Recientes' : 'Recent Articles'}
              </h4>
              <div className="space-y-6">
                {recentPosts
                  .filter((p: any) => p.slug !== slug)
                  .slice(0, 3)
                  .map((art: any) => {
                    const formattedArtDate = formatDate(art.date, currentLang);
                    const artImg = art.featuredImage?.node?.sourceUrl || '/images/blog_travel_health_1778509526333.png';
                    return (
                      <Link key={art.id} to={`/blog/${art.slug}`} className="flex gap-4 group cursor-pointer">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-dark-alt/5">
                          <img src={artImg} alt={art.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h5 className="text-secondary font-heading font-bold text-sm leading-tight group-hover:text-primary transition-colors">{art.title}</h5>
                          <span className="text-dark-alt/40 text-[12px] mt-1 font-body">{formattedArtDate}</span>
                        </div>
                      </Link>
                    );
                  })}
              </div>
              <Link to="/blog" className="block w-full text-center text-primary font-heading font-bold text-sm mt-8 hover:underline">
                {currentLang.startsWith('es') ? 'Ver Todos los Artículos' : 'View All Articles'}
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

