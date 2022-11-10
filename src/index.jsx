import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntlProvider } from 'react-intl';
// hash rounter is being used for dev purposes
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import { LOCALES, messages } from './i18n/locales';
import { QueryClient, QueryClientProvider } from 'react-query';
import ScrollToTop from './helpers/ScrollToTop';

const queryClient = new QueryClient();
const locale = LOCALES.RUSSIAN;

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.UKRAINIAN}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </IntlProvider>
    </Router>
  </React.StrictMode>,
);
