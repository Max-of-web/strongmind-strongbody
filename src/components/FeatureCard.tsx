
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
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
