
import { useTranslation } from 'react-i18next';
import PricingCards from '../PricingCards';

interface CoachingPricingProps {
  onScrollToForm: () => void;
}

const CoachingPricing = ({ onScrollToForm }: CoachingPricingProps) => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('coaching.pricing.sectionTitle')}
          </h2>
        </div>
        
        {/* 1-on-1 coaching image before pricing cards */}
        <div className="mb-12 scroll-fade-in">
          <div className="relative rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/427ebe58-891e-44b0-85bd-c76e3fcd43ec.png"
              alt="Personal training with focused guidance and proper form"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
          </div>
        </div>
        
        <div className="scroll-fade-in">
          <PricingCards />
        </div>

        {/* CTA after pricing */}
        <div className="text-center mt-12 scroll-fade-in">
          <button 
            onClick={onScrollToForm}
            className="cta-button-primary text-lg px-8 py-4"
          >
            {t('homepage.hero.ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoachingPricing;
