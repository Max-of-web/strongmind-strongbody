import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Star, Crown, ChevronDown } from 'lucide-react';
import PricingFeatureList from './PricingFeatureList';

interface PricingCardProps {
  pricingKey: string;
  featureCount: number;
  isHighlighted?: boolean;
  isPremium?: boolean;
  onBookingClick: () => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const PricingCard = ({ 
  pricingKey, 
  featureCount, 
  isHighlighted = false, 
  isPremium = false,
  onBookingClick,
  isExpanded,
  onToggleExpand
}: PricingCardProps) => {
  const { t } = useTranslation();

  // Get correct card style based on new color scheme
  const getCardStyle = () => {
    const cardStyle = {
      borderColor: '#374151',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'all 300ms ease',
      backgroundColor: '#1F2937',
      color: 'white'
    };
    
    return cardStyle;
  };

  const getHighlightedCardStyle = () => {
    const baseStyle = getCardStyle();
    
    const highlightStyle = {
      borderWidth: '2px',
      borderColor: '#1E3A8A', // Deep blue
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    };

    const premiumStyle = {
      borderWidth: '2px',
      borderColor: '#F59E0B', // Golden for premium
      boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.2), 0 10px 10px -5px rgba(245, 158, 11, 0.1)',
      background: 'linear-gradient(135deg, #1F2937 0%, #374151 100%)'
    };

    if (isPremium) {
      return {...baseStyle, ...premiumStyle};
    } else if (isHighlighted) {
      return {...baseStyle, ...highlightStyle};
    }
    
    return baseStyle;
  };

  const getBadgeText = () => {
    if (isPremium) {
      return 'PREMIUM';
    } else if (isHighlighted) {
      return t('coaching.pricing.badges.recommended');
    }
    return null;
  };

  const getBadgeStyle = () => {
    if (isPremium) {
      return {
        backgroundColor: '#F59E0B', // Golden
        color: 'white'
      };
    } else if (isHighlighted) {
      return {
        backgroundColor: '#1E3A8A', // Deep blue
        color: 'white'
      };
    }
    return {};
  };

  // Check if translation keys exist for additional content
  const hasNote = () => {
    try {
      const note = t(`coaching.pricing.${pricingKey}.note`, { defaultValue: '' });
      return note !== '';
    } catch {
      return false;
    }
  };

  const hasBottomText = () => {
    try {
      const bottomText = t(`coaching.pricing.${pricingKey}.bottomText`, { defaultValue: '' });
      return bottomText !== '';
    } catch {
      return false;
    }
  };

  return (
    <Collapsible open={isExpanded} onOpenChange={onToggleExpand}>
      <Card style={getHighlightedCardStyle()} className="relative">
        {(isHighlighted || isPremium) && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <Badge 
              style={getBadgeStyle()}
              className="px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1"
            >
              {isPremium ? <Crown size={12} /> : <Star size={12} />}
              {getBadgeText()}
            </Badge>
          </div>
        )}
        
        <CollapsibleTrigger className="w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg">
          <CardHeader className="pt-6 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl text-white mb-2">
                  {t(`coaching.pricing.${pricingKey}.title`)}
                </CardTitle>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">
                    {t(`coaching.pricing.${pricingKey}.price`)}
                  </span>
                  <span className="ml-1 text-gray-400">
                    {t(`coaching.pricing.${pricingKey}.period`)}
                  </span>
                </div>
              </div>
              <ChevronDown 
                className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <CardContent className="space-y-4 pt-0">
            <p className="text-sm text-gray-300">
              Who it's for: {t(`coaching.pricing.${pricingKey}.subtitle`)}
            </p>
            
            <div>
              <p className="text-sm text-gray-300 mb-3 font-medium">What you get:</p>
              <PricingFeatureList 
                featurePrefix={`coaching.pricing.${pricingKey}.features`} 
                featureCount={featureCount} 
              />
            </div>
            
            {/* Note section for packages that have it */}
            {hasNote() && (
              <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-sm text-green-200">
                  🟢 {t(`coaching.pricing.${pricingKey}.note`)}
                </p>
              </div>
            )}
            
            {/* Bottom text section */}
            {hasBottomText() && (
              <div className="mt-4 pt-3 border-t border-gray-600">
                <p className="text-sm text-gray-300 font-medium">
                  👉 {t(`coaching.pricing.${pricingKey}.bottomText`)}
                </p>
              </div>
            )}
            
            {/* Book button */}
            <div className="mt-6 pt-4 border-t border-gray-600">
              <button
                onClick={onBookingClick}
                className="w-full cta-button-primary text-center py-3 px-4 rounded-lg font-medium"
              >
                {t(`coaching.pricing.${pricingKey}.buttonText`)}
              </button>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default PricingCard;