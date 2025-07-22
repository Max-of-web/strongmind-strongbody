
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.ts';
import ltTranslation from './locales/lt.ts';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      lt: {
        translation: ltTranslation
      }
    },
    lng: 'lt', // Set Lithuanian as default
    fallbackLng: 'lt', // Use Lithuanian as fallback instead of English
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
