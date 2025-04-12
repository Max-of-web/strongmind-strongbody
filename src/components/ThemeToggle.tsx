
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <Button 
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className={`
        flex items-center gap-2
        ${theme === 'light' 
          ? 'bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300' 
          : 'bg-slate-700 hover:bg-slate-600 text-white border-slate-600'}
      `}
      aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      <span className="sr-only md:not-sr-only">
        {theme === 'light' ? t('theme.dark') : t('theme.light')}
      </span>
    </Button>
  );
};

export default ThemeToggle;
