
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PricingFeatureList from './PricingFeatureList';
import { useTheme } from '@/hooks/useTheme';

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

  // Get correct card style based on theme
  const getCardStyle = () => {
    const cardStyle = {
      borderColor: 'rgba(10, 35, 66, 0.2)',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'all 300ms ease',
      backgroundColor: 'white'
    };
    
    const darkCardStyle = {
      backgroundColor: '#0A2342', // Navy
      borderColor: 'rgba(255, 255, 255, 0.2)',
      color: 'white'
    };
    
    return theme === 'dark'
      ? {...cardStyle, ...darkCardStyle}
      : cardStyle;
  };

  const getHighlightedCardStyle = () => {
    const baseStyle = getCardStyle();
    const highlightStyle = {
      borderWidth: '2px',
      borderColor: '#F7882F', // Tangerine
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
          backgroundColor: '#F7882F', // Tangerine
          color: 'white',
          fontSize: '0.75rem',
          padding: '0.25rem 0.75rem',
          borderBottomLeftRadius: '0.375rem'
        }}>
          {t('coaching.pricing.transformation.recommended')}
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl" style={{ 
          color: theme === 'dark' ? 'white' : 'inherit' 
        }}>
          {t(`coaching.pricing.${pricingKey}.title`)}
        </CardTitle>
        <div className="flex items-baseline mt-2">
          <span className="text-3xl font-bold" style={{ 
            color: theme === 'dark' ? 'white' : 'inherit' 
          }}>
            {t(`coaching.pricing.${pricingKey}.price`)}
          </span>
          <span style={{ 
            color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' 
          }} className="ml-1">
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
        <button 
          onClick={onBookingClick}
          style={{
            backgroundColor: '#0A2342', // Navy blue - always dark
            color: '#FFFFFF',           // White text - always light
            fontWeight: '600',
            width: '100%',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            border: 'none',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'all 300ms ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#375177'; // Lighter navy for hover
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.15)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#0A2342'; // Back to navy
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
          }}
        >
          {t(`coaching.pricing.${pricingKey}.buttonText`)}
        </button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
