
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hero-section" className="hero-section">
      <div className="container-width px-4 md:px-8 flex flex-col justify-center items-start h-full pt-20 md:pt-12">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-5 text-zinc-50">
            {t('homepage.hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90">
            {t('homepage.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Link
              to="/coaching#contact-section"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              {t('homepage.hero.ctaButton')}
            </Link>
            <Link
              to="/coaching#packages-section"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white/90 hover:text-white underline-offset-4 hover:underline transition"
            >
              {t('homepage.hero.secondaryCta')} →
            </Link>
          </div>
          <p className="mt-5 text-xs md:text-sm text-white/70 tracking-wide">
            {t('homepage.hero.trustLine')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
