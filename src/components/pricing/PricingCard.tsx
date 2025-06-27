
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PricingFeatureList from './PricingFeatureList';
import { useTheme } from '@/hooks/useTheme';
import BookingButton from './BookingButton';

interface PricingCardProps {
  pricingKey: string;
  featureCount: number;
  isHighlighted?: boolean;
  onBookingClick: () => void;
}

const PricingCard = ({ 
  pricingKey, 
  featureCount, 
  isHighlighted = false, 
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

    return isHighlighted 
      ? {...baseStyle, ...highlightStyle}
      : baseStyle;
  };

  return (
    <Card style={getHighlightedCardStyle()}>
      {isHighlighted && (
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: '#1E3A8A', // Deep blue
          color: 'white',
          fontSize: '0.75rem',
          padding: '0.25rem 0.75rem',
          borderBottomLeftRadius: '0.375rem'
        }}>
          {t('coaching.pricing.transformation.recommended')}
        </div>
      )}
      <CardHeader>
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
