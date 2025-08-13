
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PricingFeatureListProps {
  featurePrefix: string;
  featureCount: number;
}

const PricingFeatureList = ({ featurePrefix, featureCount }: PricingFeatureListProps) => {
  const { t } = useTranslation();

  return (
    <ul className="space-y-2">
      {Array.from({ length: featureCount }).map((_, index) => (
        t(`${featurePrefix}.${index}`) ? (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 shrink-0" />
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
