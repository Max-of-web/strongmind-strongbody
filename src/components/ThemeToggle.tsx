
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center gap-2 bg-theme-marine dark:bg-theme-lightmarine text-white px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-theme-lightmarine dark:hover:bg-theme-marine"
      aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      <span className="sr-only md:not-sr-only text-white">
        {theme === 'light' ? t('theme.dark') : t('theme.light')}
      </span>
    </button>
  );
};

export default ThemeToggle;
