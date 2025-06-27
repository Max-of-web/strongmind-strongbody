
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <div className="flex items-center gap-2 p-1">
      <Sun 
        size={18} 
        className={`transition-opacity duration-300 ${isDark ? 'opacity-40' : 'opacity-100'}`}
        color={isDark ? "#8E9196" : "#D4AF37"}
      />
      
      <Switch 
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label={isDark ? t('theme.light') : t('theme.dark')}
        className="data-[state=checked]:bg-[#000000] data-[state=unchecked]:bg-[#D4AF37]"
      />
      
      <Moon 
        size={18} 
        className={`transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-40'}`}
        color={isDark ? "#D4AF37" : "#8E9196"}
      />
    </div>
  );
};

export default ThemeToggle;
