
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
  
  // Initialize language with Lithuanian as default
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      return savedLang || 'lt'; // Default to Lithuanian
    }
    return 'lt';
  });

  // Load custom translations from Supabase with proper fallback
  useEffect(() => {
    const loadCustomTranslations = async () => {
      setIsLoading(true);
      try {
        console.log(`Loading custom translations for language: ${language}`);
        
        const { data, error } = await supabase
          .from('translations')
          .select('key, value')
          .eq('language', language)
          .eq('namespace', 'translation');

        if (error) {
          console.warn('Error fetching translations from Supabase, using local fallback:', error);
          // Don't throw error, just use local translations
        } else if (data && data.length > 0) {
          console.log(`Loaded ${data.length} custom translations from Supabase`);
          
          // Process the data and add to i18n
          const resources: Record<string, any> = {};
          
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
          
          // Merge custom translations with existing ones (don't override, just extend)
          i18n.addResourceBundle(language, 'translation', resources, true, false);
          console.log('Custom translations merged successfully');
        } else {
          console.log('No custom translations found in Supabase, using local translations');
        }
      } catch (error) {
        console.warn('Network error loading custom translations, using local fallback:', error);
        // Don't throw error, just use local translations
      } finally {
        setIsLoading(false);
      }
    };

    // First, ensure i18next language is set and local translations are loaded
    i18n.changeLanguage(language).then(() => {
      console.log(`i18next language changed to: ${language}`);
      console.log('Local translations loaded, checking for custom translations...');
      
      // Update localStorage
      localStorage.setItem('language', language);
      
      // Then try to load custom translations from Supabase
      loadCustomTranslations();
    }).catch((error) => {
      console.error('Error changing i18next language:', error);
      setIsLoading(false);
    });
  }, [language, i18n]);

  const changeLanguage = (lang: Language) => {
    console.log(`Changing language to: ${lang}`);
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
