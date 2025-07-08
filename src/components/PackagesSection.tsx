
import React from 'react';
import { useTranslation } from 'react-i18next';
import PricingCards from './PricingCards';

const PackagesSection = () => {
  const { t } = useTranslation();

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('coaching.pricing.sectionTitle')}
          </h2>
        </div>
        
        <div className="scroll-fade-in">
          <PricingCards />
        </div>
        
        <div className="text-center mt-12 scroll-fade-in">
          <button
            onClick={openBookingLink}
            className="cta-button-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            {t('coaching.hero.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
