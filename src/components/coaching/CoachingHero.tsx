
import { useTranslation } from 'react-i18next';

interface CoachingHeroProps {
  onScrollToForm: () => void;
}

const CoachingHero = ({ onScrollToForm }: CoachingHeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 bg-theme-navy dark:bg-theme-darknavy">
      <div className="container-width px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto animate-fade-in">
          {/* Profile Photo - Mobile: Above text, Desktop: Right side */}
          <div className="order-1 md:order-2 md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/lovable-uploads/6b62735b-caa1-4c49-8a96-b52c2dd5af3b.png"
                alt="Paulius Lipskis - Professional Portrait"
                className="w-full h-full object-cover object-[center_20%] rounded-lg shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-theme-navy opacity-20 rounded-lg"></div>
            </div>
          </div>
          
          {/* Hero Content - Mobile: Below photo, Desktop: Left side */}
          <div className="order-2 md:order-1 md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t('coaching.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6">
              {t('coaching.hero.subtitle')}
            </p>
            <p className="text-base text-gray-300 mb-8">
              {t('coaching.hero.helperText')}
            </p>
            <button 
              onClick={onScrollToForm}
              className="cta-button-primary inline-block"
            >
              {t('homepage.hero.ctaButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingHero;
