
import { Flag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'lt' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="language-selector"
      aria-label={`Switch to ${language === 'en' ? 'Lithuanian' : 'English'} language`}
    >
      <Flag size={18} />
      <span>{language === 'en' ? 'LT' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
