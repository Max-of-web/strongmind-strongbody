
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PricingCard from './pricing/PricingCard';

const PricingCards = () => {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  const handleToggleExpand = (cardKey: string) => {
    setExpandedCard(expandedCard === cardKey ? null : cardKey);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* The Rebuild Method */}
      <PricingCard 
        pricingKey="rehabTraining" 
        featureCount={4} 
        onBookingClick={openBookingLink}
        isExpanded={expandedCard === 'rehabTraining'}
        onToggleExpand={() => handleToggleExpand('rehabTraining')}
      />

      {/* Online Training */}
      <PricingCard 
        pricingKey="onlineTraining" 
        featureCount={4} 
        onBookingClick={openBookingLink}
        isExpanded={expandedCard === 'onlineTraining'}
        onToggleExpand={() => handleToggleExpand('onlineTraining')}
      />

      {/* Personal Training */}
      <PricingCard 
        pricingKey="oneOnOneCoaching" 
        featureCount={3} 
        onBookingClick={openBookingLink}
        isExpanded={expandedCard === 'oneOnOneCoaching'}
        onToggleExpand={() => handleToggleExpand('oneOnOneCoaching')}
      />

      {/* Small Group Training */}
      <PricingCard 
        pricingKey="smallGroupTraining" 
        featureCount={3} 
        onBookingClick={openBookingLink}
        isExpanded={expandedCard === 'smallGroupTraining'}
        onToggleExpand={() => handleToggleExpand('smallGroupTraining')}
      />
    </div>
  );
};

export default PricingCards;
