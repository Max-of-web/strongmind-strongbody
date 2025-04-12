
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/integrations/supabase/client';

type Language = 'en' | 'lt';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  
  // Initialize language from localStorage or browser
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      return savedLang || (navigator.language.startsWith('lt') ? 'lt' : 'en');
    }
    return 'en';
  });

  // Load custom translations from Supabase
  useEffect(() => {
    const loadCustomTranslations = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from('translations')
          .select('key, value')
          .eq('language', language)
          .eq('namespace', 'translation');

        if (error) {
          console.error('Error fetching translations:', error);
        } else if (data && data.length > 0) {
          // Process the data and add to i18n
          const resources: Record<string, string> = {};
          
          data.forEach(item => {
            const pathParts = item.key.split('.');
            let current: any = resources;
            
            // Build the nested structure
            for (let i = 0; i < pathParts.length - 1; i++) {
              if (!current[pathParts[i]]) {
                current[pathParts[i]] = {};
              }
              current = current[pathParts[i]];
            }
            
            // Set the final value
            current[pathParts[pathParts.length - 1]] = item.value;
          });
          
          // Add the custom translations to i18n
          i18n.addResourceBundle(language, 'translation', resources, true, true);
        }
      } catch (error) {
        console.error('Error loading custom translations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Update i18next language
    i18n.changeLanguage(language);
    
    // Update localStorage for fallback
    localStorage.setItem('language', language);
    
    // Load any custom translations from Supabase
    loadCustomTranslations();
  }, [language, i18n]);

  const changeLanguage = (lang: Language) => {
    setIsLoading(true);
    setLanguage(lang);
    // The useEffect will handle the actual language change
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
