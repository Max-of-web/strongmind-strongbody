
import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof import('../i18n/locales/en').default;
    };
  }
}

// Completely disable JSX namespace augmentation from react-i18next
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Force TypeScript to use React's built-in JSX types only
    }
  }
}
