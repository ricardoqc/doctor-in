import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface GeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  jsonLd?: Record<string, unknown> | null;
}

export const GeoHead: React.FC<GeoHeadProps> = ({ title, description, canonicalUrl, jsonLd }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Generative Engine Optimization (GEO) heavily relies on structured data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};
