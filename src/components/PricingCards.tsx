
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PricingCard from './pricing/PricingCard';
import { pricingConfig } from '@/config/pricingConfig';

const PricingCards = () => {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const openBookingLink = () => {
    window.open('https://calendar.app.google/LU6UdzQr53kmsKjc6', '_blank');
  };

  const handleToggleExpand = (cardKey: string) => {
    setExpandedCard(expandedCard === cardKey ? null : cardKey);
  };

  // Define pricing cards to display
  const pricingCards = [
    {
      plan: pricingConfig.personalTraining,
      option: 'single' as const,
      featureCount: 3,
      cardKey: 'personalTraining-single'
    },
    {
      plan: pricingConfig.personalTraining,
      option: 'pack8' as const,
      featureCount: 3,
      cardKey: 'personalTraining-pack8'
    },
    {
      plan: pricingConfig.personalTraining,
      option: 'pack12' as const,
      featureCount: 3,
      cardKey: 'personalTraining-pack12'
    },
    {
      plan: pricingConfig.rehabTraining,
      option: 'single' as const,
      featureCount: 4,
      cardKey: 'rehabTraining-single'
    },
    {
      plan: pricingConfig.rehabTraining,
      option: 'pack8' as const,
      featureCount: 4,
      cardKey: 'rehabTraining-pack8'
    },
    {
      plan: pricingConfig.innerShiftCoaching,
      option: 'monthly' as const,
      featureCount: 5,
      cardKey: 'innerShiftCoaching-monthly'
    },
    {
      plan: pricingConfig.innerShiftCoaching,
      option: 'pack3months' as const,
      featureCount: 5,
      cardKey: 'innerShiftCoaching-pack3months'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pricingCards.map((card) => (
        <PricingCard
          key={card.cardKey}
          plan={card.plan}
          option={card.option}
          featureCount={card.featureCount}
          onBookingClick={openBookingLink}
          isExpanded={expandedCard === card.cardKey}
          onToggleExpand={() => handleToggleExpand(card.cardKey)}
        />
      ))}
    </div>
  );
};

export default PricingCards;
