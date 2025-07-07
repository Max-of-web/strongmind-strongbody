
import { useTranslation } from 'react-i18next';
import PricingCard from './pricing/PricingCard';

const PricingCards = () => {
  const { t } = useTranslation();

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Movement Clarity Session */}
      <PricingCard 
        pricingKey="movementClarity" 
        featureCount={4} 
        onBookingClick={openBookingLink} 
      />

      {/* Body Reset Plan */}
      <PricingCard 
        pricingKey="bodyReset" 
        featureCount={4} 
        onBookingClick={openBookingLink} 
      />

      {/* Strong & Grounded - Most Popular */}
      <PricingCard 
        pricingKey="strongGrounded" 
        featureCount={4} 
        isHighlighted={true} 
        onBookingClick={openBookingLink} 
      />

      {/* Movement Reset Package */}
      <PricingCard 
        pricingKey="movementReset" 
        featureCount={4} 
        onBookingClick={openBookingLink} 
      />

      {/* Small Group Training */}
      <PricingCard 
        pricingKey="smallGroup" 
        featureCount={4} 
        onBookingClick={openBookingLink} 
      />

      {/* Inner Shift Add-On */}
      <PricingCard 
        pricingKey="innerShift" 
        featureCount={4} 
        isAddOn={true} 
        onBookingClick={openBookingLink} 
      />
    </div>
  );
};

export default PricingCards;
