
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Brain,
  Dumbbell,
  Heart,
  Timer,
  Check,
  ChevronRight,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import LowerBackGuide from '../components/LowerBackGuide';
import PackagesSection from '../components/PackagesSection';

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    document.querySelectorAll('.scroll-fade-in').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Get achievements as array with proper typing
  const achievementItems = t('homepage.achievements.items', { returnObjects: true });
  const achievementsArray = Array.isArray(achievementItems) ? achievementItems : [];

  // Get bio paragraphs as array with proper typing
  const bioParagraphs = t('homepage.about.bio', { returnObjects: true });
  const bioArray = Array.isArray(bioParagraphs) ? bioParagraphs : [];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container-width px-4 md:px-8 flex flex-col justify-center items-start h-full">
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-50 lg:text-6xl">
                {t('homepage.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white">
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

        {/* What Makes This Coaching Different */}
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

        {/* What You'll Achieve */}
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

        {/* Lower Back Guide */}
        <section id="free-guide">
          <LowerBackGuide />
        </section>

        {/* Packages Section */}
        <PackagesSection />

        {/* Testimonials Section */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                {t('homepage.testimonials.sectionTitle')}
              </h2>
            </div>
            
            {/* Group training image to show community aspect */}
            <div className="mb-12 scroll-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
                <img
                  src="/lovable-uploads/652c7f10-f762-42d6-b1f0-fe385f04f1f0.png"
                  alt="Group training session showing community and teamwork"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <TestimonialCard
                quote={t('homepage.testimonials.laura.quote')}
                name={t('homepage.testimonials.laura.name')}
              />
              <TestimonialCard
                quote={t('homepage.testimonials.tomas.quote')}
                name={t('homepage.testimonials.tomas.name')}
              />
              <TestimonialCard
                quote={t('homepage.testimonials.milda.quote')}
                name={t('homepage.testimonials.milda.name')}
              />
            </div>
            <div className="text-center scroll-fade-in">
              <Link
                to="/coaching"
                className="inline-flex items-center text-theme-tangerine hover:underline font-semibold"
              >
                {t('homepage.testimonials.viewMoreLink')}
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="md:w-1/3 scroll-fade-in">
                <div className="rounded-full overflow-hidden w-56 h-56 mx-auto md:mx-0 border-4 border-theme-navy">
                  <img
                    src="/lovable-uploads/6b62735b-caa1-4c49-8a96-b52c2dd5af3b.png"
                    alt="Paulius Lipskis - Professional Portrait"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
              </div>
              <div className="md:w-2/3 scroll-fade-in">
                <h2 className="section-title">{t('homepage.about.sectionTitle')}</h2>
                {bioArray.map((paragraph: string, idx: number) => (
                  <p key={idx} className="mb-6">
                    {paragraph}
                  </p>
                ))}
                
                {/* Artistic personality element */}
                <div className="mt-8 scroll-fade-in">
                  <div className="relative rounded-lg overflow-hidden shadow-lg max-w-md">
                    <img
                      src="/lovable-uploads/d830177e-dac6-4c7e-ab8e-b7aab18c2027.png"
                      alt="Unique artistic training approach"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Updated with better font styling */}
        <section className="py-16 text-white" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="container-width px-4 text-center">
            {/* Main encouraging message with improved styling */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white max-w-4xl mx-auto leading-relaxed font-sans">
              {t('homepage.cta.finalMessage')}
            </h3>
            
            {/* Payment note - smaller and lighter */}
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('homepage.cta.finalPaymentNote')}
            </p>
            
            {/* Strong CTA Button */}
            <a 
              href="https://calendar.app.google/LU6UdzQr53kmsKjc6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-theme-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-theme-darknavy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{
                backgroundColor: '#1E3A8A',
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              {t('homepage.cta.finalButtonText')}
              <ExternalLink size={20} />
            </a>
          </div>
        </section>

        {/* WhatsApp CTA Section - Centered */}
        <section className="py-12 bg-[#25D366] text-white">
          <div className="container-width px-4 text-center">
            <div className="flex items-center justify-center mb-3">
              <MessageSquare size={28} className="mr-3" />
              <h3 className="text-lg md:text-xl font-semibold">
                {t('homepage.cta.whatsappMessage')}
              </h3>
            </div>
            <p className="text-sm mb-6 opacity-90 max-w-md mx-auto">
              {t('homepage.cta.whatsappNote')}
            </p>
            <a 
              href="https://wa.me/37067951040"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <MessageSquare size={20} />
              WhatsApp
              <ExternalLink size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
