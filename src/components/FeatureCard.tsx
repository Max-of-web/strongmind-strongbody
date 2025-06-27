
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
      <div className="flex items-center gap-2 bg-black bg-opacity-70 px-3 py-2 rounded-full border border-gray-600 shadow-sm credential-badge">
        <div className={`${badgeSize} bg-theme-gold bg-opacity-20 rounded-full flex items-center justify-center`}>
          <Icon size={iconSize} className="text-theme-gold" />
        </div>
        <span className={`${textSize} font-semibold text-white`}>{title}</span>
      </div>
    );
  }
  
  return (
    <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-gray-600 card-hover feature-card-dark">
      <div className="w-12 h-12 bg-theme-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-theme-gold" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white text-opacity-90">{description}</p>
    </div>
  );
};

export default FeatureCard;
