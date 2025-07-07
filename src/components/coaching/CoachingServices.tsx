
import { useTranslation } from 'react-i18next';

const CoachingServices = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('coaching.services.sectionTitle')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-10 card-hover scroll-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-white">{t('coaching.services.personalizedProgram.title')}</h3>
            <p className="text-white">
              {t('coaching.services.personalizedProgram.description')}
            </p>
          </div>
          
          <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-10 card-hover scroll-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-white">{t('coaching.services.weeklyAdjustments.title')}</h3>
            <p className="text-white">
              {t('coaching.services.weeklyAdjustments.description')}
            </p>
          </div>
          
          <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-10 card-hover scroll-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-white">{t('coaching.services.psychologicalSupport.title')}</h3>
            <p className="text-white">
              {t('coaching.services.psychologicalSupport.description')}
            </p>
          </div>
          
          <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-10 card-hover scroll-fade-in">
            <h3 className="text-xl font-semibold mb-4 text-white">{t('coaching.services.directCommunication.title')}</h3>
            <p className="text-white">
              {t('coaching.services.directCommunication.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingServices;
