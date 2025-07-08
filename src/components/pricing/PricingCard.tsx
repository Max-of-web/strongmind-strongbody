
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PricingFeatureList from './PricingFeatureList';
import { useTheme } from '@/hooks/useTheme';
import BookingButton from './BookingButton';

interface PricingCardProps {
  pricingKey: string;
  featureCount: number;
  isHighlighted?: boolean;
  isAddOn?: boolean;
  onBookingClick: () => void;
}

const PricingCard = ({ 
  pricingKey, 
  featureCount, 
  isHighlighted = false, 
  isAddOn = false,
  onBookingClick 
}: PricingCardProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

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

    const addOnStyle = {
      borderWidth: '2px',
      borderColor: '#F59E0B', // Amber for add-on
      boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.1), 0 4px 6px -2px rgba(245, 158, 11, 0.05)'
    };

    if (isAddOn) {
      return {...baseStyle, ...addOnStyle};
    } else if (isHighlighted) {
      return {...baseStyle, ...highlightStyle};
    }
    
    return baseStyle;
  };

  const getBadgeText = () => {
    if (isAddOn) {
      return t('coaching.pricing.badges.addOn');
    } else if (isHighlighted) {
      return t('coaching.pricing.badges.mostPopular');
    }
    return null;
  };

  const getBadgeStyle = () => {
    if (isAddOn) {
      return {
        backgroundColor: '#F59E0B', // Amber
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

  return (
    <Card style={getHighlightedCardStyle()} className="relative">
      {(isHighlighted || isAddOn) && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <Badge 
            style={getBadgeStyle()}
            className="px-3 py-1 text-xs font-bold rounded-full"
          >
            {getBadgeText()}
          </Badge>
        </div>
      )}
      
      <CardHeader className="pt-6">
        <CardTitle className="text-xl text-white">
          {t(`coaching.pricing.${pricingKey}.title`)}
        </CardTitle>
        <div className="flex items-baseline mt-2">
          <span className="text-3xl font-bold text-white">
            {t(`coaching.pricing.${pricingKey}.price`)}
          </span>
          <span className="ml-1 text-gray-400">
            {t(`coaching.pricing.${pricingKey}.period`)}
          </span>
        </div>
        <p className="text-sm text-gray-300 mt-2">
          {t(`coaching.pricing.${pricingKey}.subtitle`)}
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        <PricingFeatureList 
          featurePrefix={`coaching.pricing.${pricingKey}.features`} 
          featureCount={featureCount} 
        />
      </CardContent>
      <CardFooter>
        <BookingButton 
          onClick={onBookingClick}
          buttonText={t(`coaching.pricing.${pricingKey}.buttonText`)}
          packageType={pricingKey as any}
        />
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
