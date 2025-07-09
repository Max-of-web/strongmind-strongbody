
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Tailwind directives
import './index.css'; // Custom styles
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <App />
        <Toaster position="top-right" richColors closeButton />
      </I18nextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
