
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';

const PricingCards = () => {
  const { t } = useTranslation();

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  // Define consistent card styles
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

  // Get correct card style based on theme
  const getCardStyle = () => {
    return document.documentElement.classList.contains('dark') 
      ? {...cardStyle, ...darkCardStyle}
      : cardStyle;
  };

  // Define check icon style
  const checkIconStyle = {
    color: '#F7882F', // Tangerine
    marginRight: '0.5rem',
    marginTop: '0.125rem',
    width: '1.25rem',
    height: '1.25rem',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* First Session */}
      <Card style={getCardStyle()}>
        <CardHeader>
          <CardTitle className="text-xl" style={{ 
            color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
          }}>
            {t('coaching.pricing.starter.title')}
          </CardTitle>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold" style={{ 
              color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
            }}>
              {t('coaching.pricing.starter.price')}
            </span>
            <span style={{ 
              color: document.documentElement.classList.contains('dark') ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' 
            }} className="ml-1">
              {t('coaching.pricing.starter.period')}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              t(`coaching.pricing.starter.features.${index}`) ? (
                <li key={index} className="flex items-start">
                  <Check style={checkIconStyle} />
                  <span style={{ 
                    color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
                  }}>
                    {t(`coaching.pricing.starter.features.${index}`)}
                  </span>
                </li>
              ) : null
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <CTAButton 
            onClick={openBookingLink}
            className="w-full"
          >
            {t('coaching.pricing.starter.buttonText')}
          </CTAButton>
        </CardFooter>
      </Card>

      {/* Additional Session */}
      <Card style={getCardStyle()}>
        <CardHeader>
          <CardTitle className="text-xl" style={{ 
            color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
          }}>
            {t('coaching.pricing.additionalSession.title')}
          </CardTitle>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold" style={{ 
              color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
            }}>
              {t('coaching.pricing.additionalSession.price')}
            </span>
            <span style={{ 
              color: document.documentElement.classList.contains('dark') ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' 
            }} className="ml-1">
              {t('coaching.pricing.additionalSession.period')}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {[0, 1, 2, 3].map((index) => (
              t(`coaching.pricing.additionalSession.features.${index}`) ? (
                <li key={index} className="flex items-start">
                  <Check style={checkIconStyle} />
                  <span style={{ 
                    color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
                  }}>
                    {t(`coaching.pricing.additionalSession.features.${index}`)}
                  </span>
                </li>
              ) : null
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <CTAButton 
            onClick={openBookingLink}
            className="w-full"
          >
            {t('coaching.pricing.additionalSession.buttonText')}
          </CTAButton>
        </CardFooter>
      </Card>

      {/* Monthly */}
      <Card style={getCardStyle()}>
        <CardHeader>
          <CardTitle className="text-xl" style={{ 
            color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
          }}>
            {t('coaching.pricing.monthly.title')}
          </CardTitle>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold" style={{ 
              color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
            }}>
              {t('coaching.pricing.monthly.price')}
            </span>
            <span style={{ 
              color: document.documentElement.classList.contains('dark') ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' 
            }} className="ml-1">
              {t('coaching.pricing.monthly.period')}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {[0, 1, 2, 3, 4].map((index) => (
              t(`coaching.pricing.monthly.features.${index}`) ? (
                <li key={index} className="flex items-start">
                  <Check style={checkIconStyle} />
                  <span style={{ 
                    color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
                  }}>
                    {t(`coaching.pricing.monthly.features.${index}`)}
                  </span>
                </li>
              ) : null
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <CTAButton 
            onClick={openBookingLink}
            className="w-full"
          >
            {t('coaching.pricing.monthly.buttonText')}
          </CTAButton>
        </CardFooter>
      </Card>

      {/* Transformation */}
      <Card style={{
        ...getCardStyle(),
        borderWidth: '2px',
        borderColor: '#F7882F', // Tangerine
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}>
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
        <CardHeader>
          <CardTitle className="text-xl" style={{ 
            color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
          }}>
            {t('coaching.pricing.transformation.title')}
          </CardTitle>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold" style={{ 
              color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
            }}>
              {t('coaching.pricing.transformation.price')}
            </span>
            <span style={{ 
              color: document.documentElement.classList.contains('dark') ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' 
            }} className="ml-1">
              {t('coaching.pricing.transformation.period')}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              t(`coaching.pricing.transformation.features.${index}`) ? (
                <li key={index} className="flex items-start">
                  <Check style={checkIconStyle} />
                  <span style={{ 
                    color: document.documentElement.classList.contains('dark') ? 'white' : 'inherit' 
                  }}>
                    {t(`coaching.pricing.transformation.features.${index}`)}
                  </span>
                </li>
              ) : null
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <CTAButton 
            onClick={openBookingLink}
            className="w-full"
          >
            {t('coaching.pricing.transformation.buttonText')}
          </CTAButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCards;
