
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
      className="language-selector"
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
