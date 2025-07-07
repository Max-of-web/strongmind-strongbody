
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Users, Heart, Dumbbell } from 'lucide-react';

const PackagesSection = () => {
  const { t } = useTranslation();

  const packages = [
    {
      key: 'oneOnOneCoaching',
      icon: Star,
      highlight: true
    },
    {
      key: 'onlineTraining',
      icon: Dumbbell,
      highlight: true
    },
    {
      key: 'rehabTraining',
      icon: Heart,
      highlight: false
    },
    {
      key: 'smallGroup',
      icon: Users,
      highlight: false
    }
  ];

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.packages.sectionTitle')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {packages.map(({ key, icon: Icon, highlight }) => (
            <div
              key={key}
              className={`scroll-fade-in ${
                highlight 
                  ? 'bg-theme-navy border-2 border-theme-tangerine shadow-lg transform hover:scale-105 transition-all duration-300' 
                  : 'bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300'
              } rounded-lg p-6 relative overflow-hidden`}
            >
              {highlight && (
                <div className="absolute top-4 right-4">
                  <div className="bg-theme-tangerine text-white text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                </div>
              )}
              
              <div className="flex items-center mb-4">
                <Icon 
                  size={32} 
                  className={`mr-4 ${highlight ? 'text-theme-tangerine' : 'text-gray-400'}`} 
                />
                <h3 className={`text-xl font-bold ${highlight ? 'text-white' : 'text-white'}`}>
                  {t(`homepage.packages.${key}.title`)}
                </h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(`homepage.packages.${key}.forWho`)}
                </p>
                
                <p className="text-gray-200 text-sm leading-relaxed">
                  {t(`homepage.packages.${key}.whatYouGet`)}
                </p>
                
                <div className={`text-2xl font-bold ${highlight ? 'text-theme-tangerine' : 'text-white'} pt-2`}>
                  {t(`homepage.packages.${key}.price`)}
                </div>
                
                {key === 'oneOnOneCoaching' && (
                  <div className="bg-theme-tangerine bg-opacity-20 border border-theme-tangerine rounded-lg p-3 mt-4">
                    <p className="text-theme-tangerine text-sm font-medium">
                      💡 {t(`homepage.packages.${key}.innerShiftNote`)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 scroll-fade-in">
          <a
            href="https://calendar.app.google/LU6UdzQr53kmsKjc6"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-primary inline-flex items-center gap-2"
          >
            {t('homepage.hero.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
