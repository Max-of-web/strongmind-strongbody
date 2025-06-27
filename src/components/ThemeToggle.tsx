
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
        color={isDark ? "#6B7280" : "#1E3A8A"}
      />
      
      <Switch 
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label={isDark ? t('theme.light') : t('theme.dark')}
        className="data-[state=checked]:bg-[#1E3A8A] data-[state=unchecked]:bg-[#3B82F6]"
      />
      
      <Moon 
        size={18} 
        className={`transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-40'}`}
        color={isDark ? "#1E3A8A" : "#6B7280"}
      />
    </div>
  );
};

export default ThemeToggle;
