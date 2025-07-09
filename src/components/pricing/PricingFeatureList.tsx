
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PricingFeatureListProps {
  featurePrefix: string;
  featureCount: number;
}

const PricingFeatureList = ({ featurePrefix, featureCount }: PricingFeatureListProps) => {
  const { t } = useTranslation();

  // Define check icon style with deep blue color
  const checkIconStyle = {
    color: '#3B82F6', // Light blue
    marginRight: '0.5rem',
    marginTop: '0.125rem',
    width: '1.25rem',
    height: '1.25rem',
  };

  return (
    <ul className="space-y-2">
      {Array.from({ length: featureCount }).map((_, index) => (
        t(`${featurePrefix}.${index}`) ? (
          <li key={index} className="flex items-start">
            <Check style={checkIconStyle} />
            <span className="text-white">
              {t(`${featurePrefix}.${index}`)}
            </span>
          </li>
        ) : null
      ))}
    </ul>
  );
};

export default PricingFeatureList;
