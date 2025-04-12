
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  // Use explicit inline styles to ensure proper styling in both modes
  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#e2e8f0' : '#334155',
    color: theme === 'light' ? '#1e293b' : '#f8fafc',
    border: `1px solid ${theme === 'light' ? '#cbd5e1' : '#475569'}`,
    transition: 'all 200ms',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
  };

  const iconStyle = {
    width: '18px',
    height: '18px'
  };

  return (
    <Button 
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
      style={buttonStyle}
      aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
    >
      {theme === 'light' ? <Moon style={iconStyle} /> : <Sun style={iconStyle} />}
      <span className="sr-only md:not-sr-only">
        {theme === 'light' ? t('theme.dark') : t('theme.light')}
      </span>
    </Button>
  );
};

export default ThemeToggle;
