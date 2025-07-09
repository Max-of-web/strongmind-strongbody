
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
            <Link
              to="/coaching#contact-section"
              className="cta-button-primary"
            >
              {t('homepage.hero.ctaButton')}
            </Link>
            <a href="#free-guide" className="cta-button-secondary">
              {t('homepage.hero.getFreeGuideButton')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
