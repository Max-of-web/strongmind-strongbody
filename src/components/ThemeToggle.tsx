
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      <span className="sr-only md:not-sr-only">
        {theme === 'light' ? t('theme.dark') : t('theme.light')}
      </span>
    </button>
  );
};

export default ThemeToggle;
