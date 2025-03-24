
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
      <div className="flex items-center gap-2 bg-elegant-charcoal bg-opacity-70 px-3 py-2 rounded-full border border-elegant-silver border-opacity-20 shadow-sm">
        <div className={`${badgeSize} bg-elegant-gold bg-opacity-20 rounded-full flex items-center justify-center`}>
          <Icon size={iconSize} className="text-elegant-gold" />
        </div>
        <span className={`${textSize} font-semibold text-elegant-light`}>{title}</span>
      </div>
    );
  }
  
  return (
    <div className="bg-elegant-charcoal bg-opacity-50 p-6 rounded-lg border border-elegant-silver border-opacity-10 card-hover">
      <div className="w-12 h-12 bg-elegant-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-elegant-gold" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-elegant-light text-opacity-80">{description}</p>
    </div>
  );
};

export default FeatureCard;
