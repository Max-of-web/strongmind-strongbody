
import { useTranslation } from 'react-i18next';
import PricingCard from './pricing/PricingCard';

const PricingCards = () => {
  const { t } = useTranslation();

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* First Session */}
      <PricingCard 
        pricingKey="starter" 
        featureCount={6} 
        onBookingClick={openBookingLink} 
      />

      {/* Additional Session */}
      <PricingCard 
        pricingKey="additionalSession" 
        featureCount={4} 
        onBookingClick={openBookingLink} 
      />

      {/* Monthly */}
      <PricingCard 
        pricingKey="monthly" 
        featureCount={5} 
        onBookingClick={openBookingLink} 
      />

      {/* Transformation */}
      <PricingCard 
        pricingKey="transformation" 
        featureCount={7} 
        isHighlighted={true} 
        onBookingClick={openBookingLink} 
      />
    </div>
  );
};

export default PricingCards;
