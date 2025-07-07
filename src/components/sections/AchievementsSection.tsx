
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const AchievementsSection = () => {
  const { t } = useTranslation();

  // Get achievements as array with proper typing
  const achievementItems = t('homepage.achievements.items', { returnObjects: true });
  const achievementsArray = Array.isArray(achievementItems) ? achievementItems : [];

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="md:w-1/2 scroll-fade-in">
            <h2 className="section-title">{t('homepage.achievements.sectionTitle')}</h2>
            <p className="mb-6">
              "{t('homepage.hero.subtitle')}"
            </p>
            <ul className="space-y-4">
              {achievementsArray.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 scroll-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/3694bcc9-6d91-452e-8b51-4da202870714.png"
                alt="Group training session with coach and clients"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
