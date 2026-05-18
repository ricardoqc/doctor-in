import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client/react';
import { HelmetProvider } from 'react-helmet-async';
import { apolloClient } from './graphql/client/apolloClient';
import './i18n/config';
import { AppRouter } from './router/AppRouter';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ApolloProvider client={apolloClient}>
        <AppRouter />
      </ApolloProvider>
    </HelmetProvider>
  </React.StrictMode>
);
