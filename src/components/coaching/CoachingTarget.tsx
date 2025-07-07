
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CoachingTarget = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
      <div className="container-width">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="md:w-1/2 scroll-fade-in">
            <h2 className="section-title text-white">{t('coaching.target.sectionTitle')}</h2>
            <p className="mb-6 text-white font-medium">
              "{t('coaching.target.intro')}"
            </p>
            <p className="mb-6 text-white">
              {t('coaching.target.description')}
            </p>
            
            <ul className="space-y-4">
              {(t('coaching.target.audiences', { returnObjects: true }) as string[]).map((audience: string, index: number) => (
                <li key={index} className="flex items-start">
                  <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                  <span className="text-white">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 scroll-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/7a91b7ec-6167-4e40-bd4c-9460ff6826b2.png" 
                alt="One-on-one personal training session" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-theme-navy via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingTarget;
