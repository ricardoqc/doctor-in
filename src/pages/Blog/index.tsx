import React from 'react';
import { useQuery } from '@apollo/client/react';
import { useTranslation } from 'react-i18next';
import { GeoHead } from '@/seo/GeoHead';
import { BlogCard } from '@/features/articles/ui/BlogCard';
import { GET_POSTS } from '@/features/articles/api/queries';

const stripHtml = (html: string) => {
  if (!html) return '';
  let clean = html.replace(/<[^>]*>/g, '');
  return clean
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};

const formatDate = (dateString: string, locale: string) => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  } catch (e) {
    return dateString;
  }
};

const BlogSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((n) => (
      <div key={n} className="flex flex-col h-full bg-surface-alt rounded-3xl overflow-hidden border border-surface-alt/50 animate-pulse">
        <div className="h-56 bg-dark-alt/5" />
        <div className="p-8 flex-grow space-y-4">
          <div className="h-4 bg-dark-alt/5 rounded w-1/4" />
          <div className="h-8 bg-dark-alt/10 rounded w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-dark-alt/5 rounded w-full" />
            <div className="h-4 bg-dark-alt/5 rounded w-5/6" />
          </div>
          <div className="h-4 bg-dark-alt/10 rounded w-1/3 mt-6" />
        </div>
      </div>
    ))}
  </div>
);

export const BlogList: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('en') ? 'en' : 'es';

  const { data, loading, error } = useQuery<any>(GET_POSTS, {
    fetchPolicy: 'cache-first'
  });

  const posts = data?.posts?.nodes || [];

  return (
    <div className="w-full bg-surface-alt">
      <GeoHead 
        title="Blog | Doctor In"
        description="Health tips and guides for travelers and expats in Latin America."
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-[120px] pb-20">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h1 className="text-secondary text-[40px] lg:text-[56px] font-heading font-bold leading-tight mb-6">
            Health & Travel <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg text-dark-alt/60 font-body">
            Expert advice on staying healthy during your Latin American adventure. Essential tips, vaccination guides, and more.
          </p>
        </div>

        {loading ? (
          <BlogSkeleton />
        ) : error ? (
          <div className="text-center py-20 bg-primary/5 rounded-[32px] border border-primary/20 max-w-[600px] mx-auto px-6">
            <p className="text-primary font-heading font-bold text-lg mb-4">
              {currentLang.startsWith('es') ? 'Error al cargar los artículos' : 'Error loading articles'}
            </p>
            <p className="text-dark-alt/60 text-sm font-body mb-6">{error.message}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2.5 bg-primary text-white font-bold rounded-full text-sm hover:bg-secondary transition-colors cursor-pointer"
            >
              {currentLang.startsWith('es') ? 'Reintentar' : 'Retry'}
            </button>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-surface rounded-[32px] border border-surface-alt max-w-[600px] mx-auto px-6">
            <p className="text-secondary font-heading font-bold text-lg mb-4">
              {currentLang.startsWith('es') ? 'No se encontraron artículos' : 'No articles found'}
            </p>
            <p className="text-dark-alt/60 text-sm font-body">
              {currentLang.startsWith('es') 
                ? 'Pronto publicaremos nuevo contenido en español.' 
                : 'We will be publishing new content shortly.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => {
              const cleanedExcerpt = stripHtml(post.excerpt);
              const firstCategory = post.categories?.nodes?.[0]?.name || 'Travel Health';
              const formattedDate = formatDate(post.date, currentLang);
              const featuredImg = post.featuredImage?.node?.sourceUrl || '/images/blog_travel_health_1778509526333.png';

              return (
                <BlogCard 
                  key={post.id}
                  title={post.title}
                  category={firstCategory}
                  excerpt={cleanedExcerpt}
                  image={featuredImg}
                  date={formattedDate}
                  slug={post.slug}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

