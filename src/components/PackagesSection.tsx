
import React from 'react';
import { useTranslation } from 'react-i18next';
import PricingCards from './PricingCards';

const PackagesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('coaching.pricing.sectionTitle')}
          </h2>
        </div>
        
        <PricingCards />
        
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
