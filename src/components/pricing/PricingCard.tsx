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

  const getCardClasses = () => {
    const baseClasses = "border border-border/20 shadow-lg bg-card text-card-foreground transition-all duration-300 ease-out hover:shadow-xl";
    
    if (isPremium) {
      return `${baseClasses} border-amber-500/40 shadow-amber-500/10`;
    } else if (isHighlighted) {
      return `${baseClasses} border-primary/40 shadow-primary/10`;
    }
    
    return baseClasses;
  };

  const getTopBarClasses = () => {
    if (isPremium) {
      return "bg-gradient-to-r from-amber-500/20 to-amber-400/20 border-b border-amber-500/30";
    } else if (isHighlighted) {
      return "bg-gradient-to-r from-primary/20 to-primary/10 border-b border-primary/30";
    }
    return "bg-gradient-to-r from-muted/30 to-muted/20 border-b border-border/20";
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
      <Card className={`relative ${getCardClasses()}`}>
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
        
        <CollapsibleTrigger className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 rounded-lg group">
          <div className={`${getTopBarClasses()} rounded-t-lg group-hover:bg-opacity-80 transition-colors duration-200`}>
            <CardHeader className="pt-6 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold mb-2 text-foreground">
                    {t(`coaching.pricing.${pricingKey}.title`)}
                  </CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-foreground">
                      {t(`coaching.pricing.${pricingKey}.price`)}
                    </span>
                    <span className="ml-1 text-muted-foreground text-base">
                      {t(`coaching.pricing.${pricingKey}.period`)}
                    </span>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ease-out ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </CardHeader>
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
          <div className="max-h-[70vh] md:max-h-none overflow-y-auto">
            <CardContent className="space-y-4 pt-0 px-6 pb-6 bg-muted/5">
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
                <div className="mt-4 pt-3 border-t border-border/20">
                  <p className="text-sm text-muted-foreground font-medium">
                    👉 {t(`coaching.pricing.${pricingKey}.bottomText`)}
                  </p>
                </div>
              )}
              
              {/* Book button */}
              <div className="mt-6 pt-4 border-t border-border/20">
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