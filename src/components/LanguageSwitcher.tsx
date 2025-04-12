
import { Flag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, changeLanguage, isLoading } = useLanguage();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'lt' : 'en';
    changeLanguage(newLang);
  };

  return (
    <Button 
      onClick={toggleLanguage}
      variant="outline"
      className="flex items-center gap-2 border-white/80 text-white dark:text-white" 
      disabled={isLoading}
      aria-label={`Switch to ${language === 'en' ? 'Lithuanian' : 'English'} language`}
    >
      <Flag size={18} className="mr-2 text-white" />
      <span className="text-white">{language === 'en' ? 'LT' : 'EN'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
