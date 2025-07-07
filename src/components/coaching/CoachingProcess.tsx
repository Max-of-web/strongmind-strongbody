
import { useTranslation } from 'react-i18next';

const CoachingProcess = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 text-white">
            {t('coaching.process.sectionTitle')}
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-theme-tangerine"></div>
            
            {(t('coaching.process.steps', { returnObjects: true }) as Array<{number: string, title: string, description: string}>).map((step, index: number) => (
              <div key={index} className="scroll-fade-in relative mb-12 pl-20">
                <div className="absolute left-0 top-0 w-16 h-16 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-theme-tangerine">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingProcess;
