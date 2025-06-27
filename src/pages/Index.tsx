
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
  Award,
  GraduationCap,
  BookOpen,
  Briefcase,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import LowerBackGuide from '../components/LowerBackGuide';

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
                <a
                  href="https://calendly.com/lipskis-paulius/asmenine-treniruote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-primary"
                >
                  {t('homepage.hero.bookCallButton')}
                </a>
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
                  {t('homepage.achievements.items', { returnObjects: true }).map((item: string, idx: number) => (
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
                    src="/lovable-uploads/92dd7281-aa00-42c3-aa94-41ea33b2d176.png"
                    alt="Client training with weights"
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

        {/* Testimonials Section */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                {t('homepage.testimonials.sectionTitle')}
              </h2>
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
                <div className="rounded-full overflow-hidden w-56 h-56 mx-auto md:mx-0 border-4 border-theme-tangerine">
                  <img
                    src="/lovable-uploads/ff6b5571-dd3d-4852-b785-1fee300184fe.png"
                    alt="Paulius Lipskis"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 scroll-fade-in">
                <h2 className="section-title">{t('homepage.about.sectionTitle')}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <FeatureCard icon={GraduationCap} title={t('homepage.about.qualifications.physiotherapy')} description="" isBadge isSmall />
                  <FeatureCard icon={Award} title={t('homepage.about.qualifications.nasm')} description="" isBadge isSmall />
                  <FeatureCard icon={BookOpen} title={t('homepage.about.qualifications.nutrition')} description="" isBadge isSmall />
                  <FeatureCard icon={Briefcase} title={t('homepage.about.qualifications.personalTrainer')} description="" isBadge isSmall />
                </div>
                {t('homepage.about.bio', { returnObjects: true }).map((paragraph: string, idx: number) => (
                  <p key={idx} className="mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTABanner
          message={t('cta.finalCta.message')}
          buttonText={t('cta.finalCta.buttonText')}
          buttonLink="https://calendly.com/lipskis-paulius/asmenine-treniruote"
        />
      </main>
      <Footer />
    </>
  );
};

export default Index;
