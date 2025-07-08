
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Heart, Zap } from 'lucide-react';

const PackagesSection = () => {
  const { t } = useTranslation();

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  const packages = [
    {
      id: 'oneOnOne',
      icon: <Star className="w-6 h-6" />,
      isPremium: true,
      hasAddOn: true
    },
    {
      id: 'online',
      icon: <Zap className="w-6 h-6" />,
      isPremium: true,
      hasAddOn: false
    },
    {
      id: 'rehab',
      icon: <Heart className="w-6 h-6" />,
      isPremium: false,
      hasAddOn: false
    },
    {
      id: 'smallGroup',
      icon: <Users className="w-6 h-6" />,
      isPremium: false,
      hasAddOn: false
    }
  ];

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('coaching.pricing.sectionTitle')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`relative transition-all duration-300 hover:transform hover:scale-105 ${
                pkg.isPremium 
                  ? 'bg-gradient-to-br from-theme-navy to-theme-darknavy border-2 border-theme-lightnavy shadow-xl' 
                  : 'bg-theme-darkgray border border-theme-border'
              }`}
            >
              {pkg.isPremium && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-theme-tangerine text-white px-3 py-1 text-xs font-bold rounded-full">
                    {t('coaching.pricing.badges.premium')}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${
                    pkg.isPremium ? 'bg-theme-lightnavy' : 'bg-theme-border'
                  }`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-xl text-white">
                    {t(`coaching.pricing.${pkg.id}.title`)}
                  </CardTitle>
                </div>
                
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-white">
                    {t(`coaching.pricing.${pkg.id}.price`)}
                  </div>
                  <div className="text-sm text-gray-300">
                    {t(`coaching.pricing.${pkg.id}.period`)}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-theme-tangerine mb-2">
                    {t(`coaching.pricing.${pkg.id}.forWho.title`)}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {t(`coaching.pricing.${pkg.id}.forWho.description`)}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-theme-tangerine mb-2">
                    {t(`coaching.pricing.${pkg.id}.whatYouGet.title`)}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {t(`coaching.pricing.${pkg.id}.whatYouGet.description`)}
                  </p>
                </div>
                
                {pkg.hasAddOn && (
                  <div className="mt-4 p-3 bg-theme-tangerine/10 border border-theme-tangerine/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-theme-tangerine" />
                      <span className="font-semibold text-theme-tangerine">
                        {t('coaching.pricing.innerShift.title')}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 mb-2">
                      {t('coaching.pricing.innerShift.description')}
                    </p>
                    <p className="text-xs font-medium text-theme-tangerine">
                      {t('coaching.pricing.innerShift.recommendation')}
                    </p>
                  </div>
                )}
                
                <button
                  onClick={openBookingLink}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.isPremium
                      ? 'bg-theme-tangerine hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-theme-navy hover:bg-theme-lightnavy text-white'
                  }`}
                >
                  {t(`coaching.pricing.${pkg.id}.buttonText`)}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 scroll-fade-in">
          <button
            onClick={openBookingLink}
            className="cta-button-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            {t('homepage.hero.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
