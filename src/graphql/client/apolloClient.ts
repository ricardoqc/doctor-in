import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import i18n from 'i18next';

const httpLink = createHttpLink({
  uri: () => {
    const currentLang = i18n.language || 'en';
    const baseWpUrl = import.meta.env.VITE_WP_GRAPHQL_URL || 'https://cms.doctor-in.com/graphql';

    // Resolve endpoint based on Polylang language configuration
    if (baseWpUrl.includes('cms.doctor-in.com')) {
      if (currentLang.startsWith('en')) {
        return 'https://cms.doctor-in.com/en/index.php?graphql';
      } else {
        return 'https://cms.doctor-in.com/index.php?graphql';
      }
    } else {
      // Dynamic fallback for custom endpoint configuration
      if (currentLang.startsWith('en')) {
        return baseWpUrl.replace(/\/graphql\/?$/, '/en/index.php?graphql');
      } else {
        return baseWpUrl.replace(/\/graphql\/?$/, '/index.php?graphql');
      }
    }
  },
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
    },
  },
});

// NOTE: Cache clearing is no longer automatic on languageChanged.
// Components that need fresh data per language use fetchPolicy: 'network-only' directly.
// The Apollo httpLink URI function already reads i18n.language at call time,
// so each network request will automatically hit the correct Polylang endpoint.
