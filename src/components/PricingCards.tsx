
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTAButton from './CTAButton';

const PricingCards = () => {
  const { t } = useTranslation();

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* First Session */}
      <Card className="border border-theme-navy/20 dark:border-theme-lightnavy/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">{t('coaching.pricing.starter.title')}</CardTitle>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold">{t('coaching.pricing.starter.price')}</span>
            <span className="text-muted-foreground ml-1">{t('coaching.pricing.starter.period')}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {[0,, 1, 2, 3, 4, 5].map((index) => (
              t(`coaching.pricing.starter.features.${index}`) ? (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-theme-tangerine dark:text-theme-lighttangerine mr-2 mt-0.5" />
                  <span>{t(`coaching.pricing.starter.features.${index}`)}</span>
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
      <Card className="border border-theme-navy/20 dark:border-theme-lightnavy/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">{t('coaching.pricing.additionalSession.title')}</CardTitle>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold">{t('coaching.pricing.additionalSession.price')}</span>
            <span className="text-muted-foreground ml-1">{t('coaching.pricing.additionalSession.period')}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {[0, 1, 2, 3].map((index) => (
              t(`coaching.pricing.additionalSession.features.${index}`) ? (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-theme-tangerine dark:text-theme-lighttangerine mr-2 mt-0.5" />
                  <span>{t(`coaching.pricing.additionalSession.features.${index}`)}</span>
                </li>
              ) : null
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <CTAButton 
            onClick={openBookingLink}
            secondary={true}
            className="w-full"
          >
            {t('coaching.pricing.additionalSession.buttonText')}
          </CTAButton>
        </CardFooter>
      </Card>

      {/* Monthly */}
      <Card className="border border-theme-navy/20 dark:border-theme-lightnavy/20 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl">{t('coaching.pricing.monthly.title')}</CardTitle>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold">{t('coaching.pricing.monthly.price')}</span>
            <span className="text-muted-foreground ml-1">{t('coaching.pricing.monthly.period')}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {[0, 1, 2, 3, 4].map((index) => (
              t(`coaching.pricing.monthly.features.${index}`) ? (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-theme-tangerine dark:text-theme-lighttangerine mr-2 mt-0.5" />
                  <span>{t(`coaching.pricing.monthly.features.${index}`)}</span>
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
      <Card className="border-2 border-theme-tangerine dark:border-theme-lighttangerine shadow-lg hover:shadow-xl transition-shadow relative">
        <div className="absolute top-0 right-0 bg-theme-tangerine dark:bg-theme-lighttangerine text-white text-xs px-3 py-1 rounded-bl-md">
          {t('coaching.pricing.transformation.recommended')}
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{t('coaching.pricing.transformation.title')}</CardTitle>
          <div className="flex items-baseline mt-2">
            <span className="text-3xl font-bold">{t('coaching.pricing.transformation.price')}</span>
            <span className="text-muted-foreground ml-1">{t('coaching.pricing.transformation.period')}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <ul className="space-y-2">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              t(`coaching.pricing.transformation.features.${index}`) ? (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-theme-tangerine dark:text-theme-lighttangerine mr-2 mt-0.5" />
                  <span>{t(`coaching.pricing.transformation.features.${index}`)}</span>
                </li>
              ) : null
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <CTAButton 
            onClick={openBookingLink}
            className="w-full bg-theme-tangerine dark:bg-theme-lighttangerine hover:bg-theme-tangerine/90 dark:hover:bg-theme-lighttangerine/90 text-white"
          >
            {t('coaching.pricing.transformation.buttonText')}
          </CTAButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingCards;
