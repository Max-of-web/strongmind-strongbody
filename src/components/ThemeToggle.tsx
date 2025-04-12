
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
      variant={theme === 'light' ? "secondary" : "outline"}
      className="flex items-center gap-2 border-white/80 hover:bg-white/10"
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
