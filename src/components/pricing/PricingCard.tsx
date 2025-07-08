
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PricingFeatureList from './PricingFeatureList';
import { useTheme } from '@/hooks/useTheme';
import BookingButton from './BookingButton';

interface PricingCardProps {
  pricingKey: string;
  featureCount: number;
  isHighlighted?: boolean;
  isAddOn?: boolean;
  onBookingClick: () => void;
}

const PricingCard = ({ 
  pricingKey, 
  featureCount, 
  isHighlighted = false, 
  isAddOn = false,
  onBookingClick 
}: PricingCardProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  // This component is deprecated - new packages are handled by the main PricingCards component
  return null;
};

export default PricingCard;
