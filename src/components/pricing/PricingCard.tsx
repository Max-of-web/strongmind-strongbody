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
    const baseClasses = "bg-theme-navy bg-opacity-50 rounded-xl border border-white border-opacity-30 shadow-lg text-white transition-all duration-300 ease-out hover:shadow-xl card-hover";
    
    if (isPremium) {
      return `${baseClasses} hover:border-theme-tangerine hover:shadow-[0_0_0_2px_rgba(227,154,76,0.25)]`;
    } else if (isHighlighted) {
      return `${baseClasses} hover:border-theme-tangerine hover:shadow-[0_0_0_2px_rgba(227,154,76,0.25)]`;
    }
    
    return `${baseClasses} hover:border-theme-tangerine hover:shadow-[0_0_0_2px_rgba(227,154,76,0.25)]`;
  };

  const getTopBarClasses = () => {
    return "bg-transparent border-b border-[#2A2F36]";
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
        backgroundColor: '#E39A4C', // Bronze
        color: 'white'
      };
    } else if (isHighlighted) {
      return {
        backgroundColor: '#1E3A8A', // Keep existing blue for recommended
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
        
        <CollapsibleTrigger className="w-full text-left focus:outline-none focus:ring-2 focus:ring-[#E39A4C]/50 focus:ring-offset-2 rounded-xl group">
          <div className={`${getTopBarClasses()} rounded-t-xl transition-colors duration-200`}>
            <CardHeader className="pt-6 pb-4 text-center">
               <div className="flex flex-col items-center justify-center text-center">
                 <div className="mb-4">
                   <CardTitle className="text-xl font-bold mb-2 text-white">
                     {t(`coaching.pricing.${pricingKey}.title`)}
                   </CardTitle>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-white/90">
                        {t(`coaching.pricing.${pricingKey}.price`)}
                      </span>
                      <span className="ml-1 text-[#D1D5DB] text-base">
                        {t(`coaching.pricing.${pricingKey}.period`)}
                      </span>
                    </div>
                    {pricingKey === 'oneOnOneCoaching' && (
                      <div className="mt-2">
                        <span className="text-sm text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-md border border-green-400/20">
                          45 € už treniruotę perkant 8 treniruočių paketą
                        </span>
                      </div>
                    )}
                    {pricingKey === 'onlineTraining' && (
                      <div className="mt-2">
                        <span className="text-sm text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-md border border-green-400/20">
                          90 € mokant už trijų mėnesių paketą
                        </span>
                      </div>
                    )}
                    {pricingKey === 'rehabTraining' && (
                      <div className="mt-2">
                        <span className="text-sm text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-md border border-green-400/20">
                          55 € mokant už 8 treniruočių paketą
                        </span>
                      </div>
                    )}
                    {pricingKey === 'smallGroupTraining' && (
                      <div className="mt-2">
                        <span className="text-sm text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-md border border-green-400/20">
                          arba 160 € mokant už mėnesį
                        </span>
                      </div>
                    )}
                 </div>
                 <ChevronDown 
                   className={`h-5 w-5 text-[#D1D5DB] transition-transform duration-300 ease-out ${
                     isExpanded ? 'rotate-180' : ''
                   }`}
                 />
               </div>
            </CardHeader>
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
          <div className="max-h-[70vh] overflow-y-auto">
            <CardContent className="space-y-4 pt-0 p-5 md:p-6 bg-[#0F1115]">
              <p className="text-sm text-gray-100">
                {t('coaching.pricing.whoItsFor')}: {t(`coaching.pricing.${pricingKey}.subtitle`)}
              </p>
              
              <div>
                <p className="text-sm text-gray-100 mb-3 font-medium">{t('coaching.pricing.whatYouGet')}:</p>
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
                <div className="mt-4 pt-3 border-t border-[#2A2F36]">
                  <p className="text-sm text-gray-100 font-medium">
                    👉 {t(`coaching.pricing.${pricingKey}.bottomText`)}
                  </p>
                </div>
              )}
              
              {/* Book button */}
              <div className="mt-6 pt-4 border-t border-[#2A2F36]">
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