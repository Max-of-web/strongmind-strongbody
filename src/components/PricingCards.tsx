
import { useTranslation } from 'react-i18next';
import PricingCard from './pricing/PricingCard';

const PricingCards = () => {
  const { t } = useTranslation();

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* 1-on-1 Coaching - Recommended */}
      <PricingCard 
        pricingKey="oneOnOneCoaching" 
        featureCount={3} 
        isHighlighted={true}
        onBookingClick={openBookingLink} 
      />

      {/* Online Training + WhatsApp Support - Recommended */}
      <PricingCard 
        pricingKey="onlineTraining" 
        featureCount={4} 
        isHighlighted={true}
        onBookingClick={openBookingLink} 
      />

      {/* Rehab Training */}
      <PricingCard 
        pricingKey="rehabTraining" 
        featureCount={4} 
        onBookingClick={openBookingLink} 
      />

      {/* Small Group Training */}
      <PricingCard 
        pricingKey="smallGroupTraining" 
        featureCount={4} 
        onBookingClick={openBookingLink} 
      />

      {/* Inner Shift Coaching - Premium */}
      <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
        <PricingCard 
          pricingKey="innerShiftCoaching" 
          featureCount={5} 
          isPremium={true}
          onBookingClick={openBookingLink} 
        />
      </div>
    </div>
  );
};

export default PricingCards;
