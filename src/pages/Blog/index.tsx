import React from 'react';
import { useTranslation } from 'react-i18next';
import { GeoHead } from '@/seo/GeoHead';
import { BlogCard } from '@/features/articles/ui/BlogCard';
import staticPosts from '@/config/posts.json';
import { stripHtml, formatDate } from '@/utils/format';

export const BlogList: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('en') ? 'en' : 'es';

  const posts = currentLang === 'en' ? staticPosts.en : staticPosts.es;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://doctor-in.com/blog/#webpage",
        "url": "https://doctor-in.com/blog",
        "name": "Health & Travel Insights Blog | Doctor In",
        "description": "Health tips and guides for travelers and expats in Latin America."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://doctor-in.com/blog/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://doctor-in.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://doctor-in.com/blog"
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full bg-surface-alt">
      <GeoHead 
        title="Blog | Doctor In"
        description="Health tips and guides for travelers and expats in Latin America."
        jsonLd={jsonLd}
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

        {posts.length === 0 ? (
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

