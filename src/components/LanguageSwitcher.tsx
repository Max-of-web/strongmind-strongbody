
import { Flag, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { language, changeLanguage, isLoading } = useLanguage();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'lt' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-theme-navy dark:bg-theme-lightnavy text-white px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-theme-tangerine dark:hover:bg-theme-darktangerine"
      aria-label={`Switch to ${language === 'en' ? 'Lithuanian' : 'English'} language`}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 size={18} className="animate-spin" />
      ) : (
        <Flag size={18} />
      )}
      <span>{language === 'en' ? 'LT' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
