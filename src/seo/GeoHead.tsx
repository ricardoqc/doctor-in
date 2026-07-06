import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export interface GeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, unknown> | null;
  /** Override the auto-detected current lang ('en' | 'es') */
  currentLang?: 'en' | 'es';
}

const BASE_URL = 'https://doctor-in.com';

/**
 * GeoHead — SEO + GEO meta tags component.
 * Automatically injects:
 *  - title, meta description
 *  - canonical URL
 *  - hreflang alternate links (EN / ES)
 *  - Open Graph tags for social sharing
 *  - JSON-LD structured data
 */
export const GeoHead: React.FC<GeoHeadProps> = ({
  title,
  description,
  canonicalUrl,
  jsonLd,
  currentLang = 'en',
}) => {
  const location = useLocation();

  // Build canonical: prefer explicit prop, else current pathname
  const canonical = canonicalUrl ?? `${BASE_URL}${location.pathname}`;

  // Derive the alternate-language URL:
  // If current page is under /es/ → alternate EN removes prefix
  // Otherwise → alternate ES adds /es prefix
  const isEsPath = location.pathname.startsWith('/es');
  const enUrl = isEsPath
    ? `${BASE_URL}${location.pathname.replace(/^\/es/, '') || '/'}`
    : `${BASE_URL}${location.pathname}`;
  const esUrl = isEsPath
    ? `${BASE_URL}${location.pathname}`
    : `${BASE_URL}/es${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      {/* Core meta */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Language */}
      <html lang={currentLang} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* hreflang for bilingual site — tells Google which version to show per region */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Open Graph — improves CTR from social sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${BASE_URL}/images/brands/Isotipo-2.svg`} />
      <meta property="og:site_name" content="Doctor In" />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Generative Engine Optimization (GEO) heavily relies on structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
