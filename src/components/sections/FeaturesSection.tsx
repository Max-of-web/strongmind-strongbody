
import { useTranslation } from 'react-i18next';
import { Brain, Dumbbell, Heart, Timer } from 'lucide-react';
import FeatureCard from '../FeatureCard';

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.features.sectionTitle')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="scroll-fade-in">
            <FeatureCard
              icon={Brain}
              title={t('homepage.features.dualExpertise.title')}
              description={t('homepage.features.dualExpertise.description')}
            />
          </div>
          <div className="scroll-fade-in">
            <FeatureCard
              icon={Dumbbell}
              title={t('homepage.features.adaptivePrograms.title')}
              description={t('homepage.features.adaptivePrograms.description')}
            />
          </div>
          <div className="scroll-fade-in">
            <FeatureCard
              icon={Heart}
              title={t('homepage.features.emotionalSupport.title')}
              description={t('homepage.features.emotionalSupport.description')}
            />
          </div>
          <div className="scroll-fade-in">
            <FeatureCard
              icon={Timer}
              title={t('homepage.features.longTermMindset.title')}
              description={t('homepage.features.longTermMindset.description')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
