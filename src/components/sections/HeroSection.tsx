
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Youtube } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="hero-section" className="hero-section">
      <div className="container-width px-4 md:px-8 flex flex-col justify-center items-start h-full pt-24 md:pt-16">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-zinc-50">
            {t('homepage.hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white">
            {t('homepage.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <Link
              to="/coaching#contact-section"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-2xl shadow-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 min-h-[44px]"
            >
              {t('homepage.hero.ctaButton')}
            </Link>
            <a 
              href="https://youtube.com/playlist?list=PL9FEczFkBjTeQt3GXlvoKfNygvTiZ-qkb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="youtube-btn inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 min-h-[44px]"
              aria-label={t('homepage.hero.youtubeButton')}
            >
              <Youtube className="w-5 h-5 mr-2" />
              {t('homepage.hero.youtubeButton')}
            </a>
            <a 
              href="#free-guide" 
              className="cta-outline-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
