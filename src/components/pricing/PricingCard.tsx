import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
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
  onBookingClick,
  isExpanded,
  onToggleExpand
}: PricingCardProps) => {
  const { t } = useTranslation();

  const hasTranslation = (key: string) => {
    try {
      const value = t(`coaching.pricing.${pricingKey}.${key}`, { defaultValue: '' });
      return value !== '';
    } catch {
      return false;
    }
  };

  return (
    <Collapsible open={isExpanded} onOpenChange={onToggleExpand}>
      <Card className="relative bg-theme-navy bg-opacity-50 rounded-xl shadow-lg text-white transition-all duration-300 ease-out hover:shadow-xl card-hover border border-white border-opacity-30 hover:border-theme-tangerine hover:shadow-[0_0_0_2px_rgba(227,154,76,0.25)]">
        <CollapsibleTrigger className="w-full text-left focus:outline-none focus:ring-2 focus:ring-[#E39A4C]/50 focus:ring-offset-2 rounded-xl group">
          <div className="bg-transparent border-b border-[#2A2F36] rounded-t-xl transition-colors duration-200">
            <CardHeader className="pt-6 pb-4 text-center">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <CardTitle className="text-xl font-bold mb-2 text-white">
                    {t(`coaching.pricing.${pricingKey}.title`)}
                  </CardTitle>
                  {hasTranslation('tagline') && (
                    <p className="text-xs text-[#D1D5DB] mb-2 leading-relaxed">
                      {t(`coaching.pricing.${pricingKey}.tagline`)}
                    </p>
                  )}
                  {hasTranslation('description') && (
                    <p className="text-xs text-[#D1D5DB] leading-relaxed">
                      {t(`coaching.pricing.${pricingKey}.description`)}
                    </p>
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
              {/* Who it's for */}
              <p className="text-sm text-gray-100">
                {t('coaching.pricing.whoItsFor')}: {t(`coaching.pricing.${pricingKey}.subtitle`)}
              </p>
              
              {/* What you get */}
              <div>
                <p className="text-sm text-gray-100 mb-3 font-medium">{t('coaching.pricing.whatYouGet')}:</p>
                <PricingFeatureList 
                  featurePrefix={`coaching.pricing.${pricingKey}.features`} 
                  featureCount={featureCount} 
                />
              </div>

              {/* Why it works */}
              {hasTranslation('whyItWorks') && (
                <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm text-white/80 italic">
                    {t(`coaching.pricing.${pricingKey}.whyItWorks`)}
                  </p>
                </div>
              )}
              
              {/* Note (e.g. commitment) */}
              {hasTranslation('note') && (
                <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                  <p className="text-sm text-green-200">
                    🟢 {t(`coaching.pricing.${pricingKey}.note`)}
                  </p>
                </div>
              )}
              
              {/* Bottom text */}
              {hasTranslation('bottomText') && (
                <div className="mt-4 pt-3 border-t border-[#2A2F36]">
                  <p className="text-sm text-gray-100 font-medium">
                    👉 {t(`coaching.pricing.${pricingKey}.bottomText`)}
                  </p>
                </div>
              )}
              
              {/* Price at bottom */}
              <div className="mt-6 pt-4 border-t border-[#2A2F36]">
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl font-bold text-white/90">
                    {t(`coaching.pricing.${pricingKey}.price`)}
                  </span>
                  <span className="ml-1 text-[#D1D5DB] text-base">
                    {t(`coaching.pricing.${pricingKey}.period`)}
                  </span>
                </div>
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
