# Project Architecture and Guidelines

## Overview

This application is scaffolded using React, Vite, and TypeScript. It utilizes a modular, scalable architecture based on Feature-Sliced Design (FSD) principles. It is built to consume a headless WordPress CMS via GraphQL.

## Architecture

We use a feature-based directory structure to keep the codebase maintainable and scalable.

*   `src/features/`: Contains feature modules. Each feature is a self-contained module encompassing its own API calls, types, and UI components.
    *   Example: `features/articles/`
        *   `api/`: GraphQL queries, mutations, and Apollo hooks related to articles.
        *   `types/`: TypeScript interfaces and types generated or created for articles.
        *   `ui/`: React components specifically used for rendering articles.
*   `src/components/ui/`: Contains generic, reusable UI components (e.g., Buttons, Inputs, Modals) that are not tied to a specific feature.
*   `src/layouts/`: Components that define page structures (e.g., Header, Footer, Sidebars).
*   `src/pages/`: Page-level components that compose features and layouts. These act as route handlers.
*   `src/seo/`: Contains SEO-related components and utilities, including the core `<GeoHead />` component.
*   `src/graphql/`: Global GraphQL configuration, including the Apollo Client setup.
*   `src/i18n/`: Internationalization configuration and translation files.
*   `src/router/`: Application routing configuration.

## Internationalization (i18n)

We use `react-i18next` for internationalization. The default language is English (`en`), with Spanish (`es`) as the fallback.

*   **Configuration**: The main i18n setup is in `src/i18n/config.ts`.
*   **Translation Files**: JSON files located in `src/i18n/locales/{language}/translation.json`.
*   **Adding New Keys**:
    1.  Open the relevant `translation.json` files for all supported languages.
    2.  Add your new key-value pair. Maintain a logical nested structure for larger sets of keys.
    3.  Use the `useTranslation` hook in your components to consume the translations:
        ```tsx
        import { useTranslation } from 'react-i18next';
        
        const MyComponent = () => {
          const { t } = useTranslation();
          return <h1>{t('welcome')}</h1>;
        };
        ```

## GraphQL Queries and Type Generation

We consume data from our headless WordPress instance using Apollo Client. To ensure type safety, we use `@graphql-codegen/cli` to generate TypeScript types from our GraphQL queries.

*   **Writing Queries**: Place your GraphQL queries inside the corresponding feature's API directory (e.g., `src/features/articles/api/queries.ts`) using the `gql` template literal tag.
*   **Generating Types**: 
    1. Ensure your `codegen.yml` or `codegen.ts` is correctly configured to point to the WordPress GraphQL endpoint.
    2. Run the codegen script (usually `npm run generate` or `yarn generate`).
    3. Use the generated types and hooks in your UI components.

## Strict SEO and GEO Guidelines

Generative Engine Optimization (GEO) and traditional SEO are critical for this application. We rely heavily on structured data (Schema.org) and proper metadata.

*   **The `<GeoHead />` Component**: Every indexable page MUST use the `src/seo/GeoHead.tsx` component. This component manages both traditional SEO tags (title, description, canonical) and GEO-critical structured data.
*   **Implementation Rule**: Do NOT write bare `<Helmet>` tags in your page components. Always use `<GeoHead />`.
*   **Example Usage**:
    ```tsx
    import { GeoHead } from '@/seo/GeoHead';

    const ArticlePage = ({ article }) => {
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "author": {
          "@type": "Person",
          "name": article.authorName
        },
        "datePublished": article.publishDate
      };

      return (
        <>
          <GeoHead 
            title={`${article.title} | My Website`}
            description={article.excerpt}
            canonicalUrl={`https://mywebsite.com/article/${article.slug}`}
            jsonLd={jsonLd}
          />
          {/* Page Content */}
        </>
      );
    };
    ```
*   **Validation**: Always validate your JSON-LD output using Google's Rich Results Test tool during development.
