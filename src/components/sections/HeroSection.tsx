
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container-width px-4 md:px-8 flex flex-col justify-center items-start h-full pt-24 md:pt-16">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-zinc-50">
            {t('homepage.hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white">
            {t('homepage.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              {t('homepage.hero.ctaButton')}
            </button>
            <a 
              href="#free-guide" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {t('homepage.hero.getFreeGuideButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
