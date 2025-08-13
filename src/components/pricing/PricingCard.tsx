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
      borderColor: 'hsl(var(--border))',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'all 300ms ease',
      backgroundColor: 'hsl(var(--card))',
      color: 'hsl(var(--card-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '0.75rem',
      overflow: 'hidden'
    };
    
    return cardStyle;
  };

  const getHighlightedCardStyle = () => {
    const baseStyle = getCardStyle();
    
    const highlightStyle = {
      borderColor: 'hsl(var(--primary))',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px hsl(var(--primary) / 0.1)'
    };

    const premiumStyle = {
      borderColor: 'hsl(45 100% 60%)', // Golden for premium
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px hsl(45 100% 60% / 0.2)'
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
        backgroundColor: 'hsl(45 100% 60%)', // Golden
        color: 'white'
      };
    } else if (isHighlighted) {
      return {
        backgroundColor: 'hsl(var(--primary))',
        color: 'hsl(var(--primary-foreground))'
      };
    }
    return {};
  };

  const getTopBarColor = () => {
    if (isPremium) {
      return 'linear-gradient(90deg, hsl(45 100% 50%) 0%, hsl(45 100% 65%) 100%)'; // Golden gradient for premium
    } else if (isHighlighted) {
      return 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(217 91% 70%) 100%)'; // Brand blue gradient for highlighted
    }
    return 'linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(217 91% 70%) 100%)'; // Default brand gradient
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
      <Card style={getHighlightedCardStyle()} className="relative mb-6">
        {/* Colored top bar with gradient */}
        <div 
          className="h-1 w-full"
          style={{ background: getTopBarColor() }}
        />
        
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
        
        <CollapsibleTrigger className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-b-lg hover:bg-muted/50 transition-colors">
          <CardHeader className="pt-6 pb-4 px-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl font-bold mb-3 text-card-foreground">
                  {t(`coaching.pricing.${pricingKey}.title`)}
                </CardTitle>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-card-foreground">
                    {t(`coaching.pricing.${pricingKey}.price`)}
                  </span>
                  <span className="ml-2 text-base text-muted-foreground">
                    {t(`coaching.pricing.${pricingKey}.period`)}
                  </span>
                </div>
              </div>
              <ChevronDown 
                className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
          <div className="max-h-[70vh] md:max-h-none overflow-y-auto">
            <CardContent className="space-y-4 pt-0 px-6 pb-6 bg-card/50">
              <p className="text-sm text-muted-foreground">
                Who it's for: {t(`coaching.pricing.${pricingKey}.subtitle`)}
              </p>
              
              <div>
                <p className="text-sm text-muted-foreground mb-3 font-medium">What you get:</p>
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
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground font-medium">
                    👉 {t(`coaching.pricing.${pricingKey}.bottomText`)}
                  </p>
                </div>
              )}
              
              {/* Book button */}
              <div className="mt-6 pt-4 border-t border-border">
                <button
                  onClick={onBookingClick}
                  className="w-full cta-button-primary text-center py-3 px-4 rounded-lg font-medium"
                >
                  {t(`coaching.pricing.${pricingKey}.buttonText`)}
                </button>
              </div>
            </CardContent>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default PricingCard;