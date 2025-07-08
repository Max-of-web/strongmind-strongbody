
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Laptop, Heart } from 'lucide-react';

const PricingCards = () => {
  const { t } = useTranslation();

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  const packages = [
    {
      key: 'oneOnOneCoaching',
      icon: <Star className="w-6 h-6 text-theme-tangerine" />,
      isHighlighted: true,
      badgeText: t('coaching.pricing.badges.mostPopular')
    },
    {
      key: 'onlineTraining', 
      icon: <Laptop className="w-6 h-6 text-theme-tangerine" />,
      isHighlighted: true,
      badgeText: t('coaching.pricing.badges.premium')
    },
    {
      key: 'rehabTraining',
      icon: <Heart className="w-6 h-6 text-theme-tangerine" />,
      isHighlighted: false
    },
    {
      key: 'smallGroupTraining',
      icon: <Users className="w-6 h-6 text-theme-tangerine" />,
      isHighlighted: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {packages.map((pkg) => (
        <Card 
          key={pkg.key}
          className={`relative transition-all duration-300 hover:scale-105 ${
            pkg.isHighlighted 
              ? 'border-2 border-theme-tangerine bg-theme-navy shadow-xl' 
              : 'border border-gray-600 bg-theme-navy bg-opacity-80'
          }`}
        >
          {pkg.isHighlighted && pkg.badgeText && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-theme-tangerine text-white px-4 py-1 text-sm font-bold rounded-full">
                {pkg.badgeText}
              </Badge>
            </div>
          )}
          
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-4">
              {pkg.icon}
              <CardTitle className="text-xl text-white">
                {t(`coaching.pricing.${pkg.key}.title`)}
              </CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-3 text-white">
              <p className="text-sm leading-relaxed">
                <strong className="text-theme-tangerine">
                  {t(`coaching.pricing.${pkg.key}.forWhom`)}
                </strong>
              </p>
              
              <p className="text-sm leading-relaxed">
                <strong className="text-theme-tangerine">
                  {t(`coaching.pricing.${pkg.key}.whatYouGet`)}
                </strong>
              </p>
              
              <p className="text-lg font-bold text-theme-tangerine">
                {t(`coaching.pricing.${pkg.key}.price`)}
              </p>
              
              {pkg.key === 'oneOnOneCoaching' && (
                <div className="mt-4 p-3 bg-theme-tangerine bg-opacity-20 rounded-lg border border-theme-tangerine border-opacity-30">
                  <p className="text-sm text-theme-tangerine font-semibold">
                    💡 {t('coaching.pricing.badges.recommended')}
                  </p>
                </div>
              )}
            </div>
            
            <button
              onClick={openBookingLink}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                pkg.isHighlighted
                  ? 'bg-theme-tangerine text-white hover:bg-opacity-90 transform hover:scale-105'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {t(`coaching.pricing.${pkg.key}.buttonText`)}
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PricingCards;
