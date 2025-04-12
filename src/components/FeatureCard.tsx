
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from './ui/badge';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isBadge?: boolean;
  isSmall?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, isBadge = false, isSmall = false }) => {
  if (isBadge) {
    const badgeSize = isSmall ? "w-6 h-6" : "w-8 h-8";
    const iconSize = isSmall ? 12 : 16;
    const textSize = isSmall ? "text-xs" : "text-sm";
    
    return (
      <div className="flex items-center gap-2 bg-elegant-charcoal bg-opacity-70 dark:bg-theme-navy px-3 py-2 rounded-full border border-elegant-silver border-opacity-20 dark:border-theme-lightnavy shadow-sm credential-badge">
        <div className={`${badgeSize} bg-theme-tangerine bg-opacity-20 dark:bg-theme-tangerine dark:bg-opacity-30 rounded-full flex items-center justify-center`}>
          <Icon size={iconSize} className="text-theme-tangerine" />
        </div>
        <span className={`${textSize} font-semibold text-white dark:text-white`}>{title}</span>
      </div>
    );
  }
  
  return (
    <div className="bg-elegant-charcoal bg-opacity-50 dark:bg-theme-navy p-6 rounded-lg border border-elegant-silver border-opacity-10 dark:border-theme-lightnavy/30 card-hover feature-card-dark">
      <div className="w-12 h-12 bg-theme-tangerine bg-opacity-20 dark:bg-theme-tangerine dark:bg-opacity-30 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-theme-tangerine" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white dark:text-white">{title}</h3>
      <p className="text-white dark:text-white dark:text-opacity-90">{description}</p>
    </div>
  );
};

export default FeatureCard;
