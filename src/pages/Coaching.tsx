import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Check, Instagram, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import TestimonialCard from '../components/TestimonialCard';
import PricingCards from '../components/PricingCards';
import TrustStripSection from '../components/sections/TrustStripSection';
import FAQSection from '../components/sections/FAQSection';
import YouTubeSection from '../components/sections/YouTubeSection';

const CALENDLY_URL = 'https://calendar.app.google/LU6UdzQr53kmsKjc6';

const Coaching = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.hash]);

  const scrollToPackages = () => {
    document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto animate-fade-in">
              <div className="order-1 md:order-2 md:w-1/3 flex justify-center md:justify-end">
                <div className="relative w-56 h-56 md:w-72 md:h-72">
                  <img
                    src="/lovable-uploads/6b62735b-caa1-4c49-8a96-b52c2dd5af3b.png"
                    alt="Paulius Lipskis - Physiotherapist & Coach"
                    className="w-full h-full object-cover object-[center_20%] rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-lg border-2 border-theme-tangerine/30"></div>
                </div>
              </div>

              <div className="order-2 md:order-1 md:w-2/3 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight whitespace-pre-line">
                  {t('coaching.hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto md:mx-0">
                  {t('coaching.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-center md:items-start justify-center md:justify-start">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 min-h-[44px]"
                  >
                    {t('coaching.hero.primaryCta')}
                  </a>
                  <button
                    onClick={scrollToPackages}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white/90 hover:text-white underline-offset-4 hover:underline transition min-h-[44px]"
                  >
                    {t('coaching.hero.seePackages')} ↓
                  </button>
                </div>
                <p className="mt-5 text-xs md:text-sm text-white/70 tracking-wide text-center md:text-left">
                  {t('coaching.hero.trustLine')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <TrustStripSection />

        {/* Packages & Pricing */}
        <section id="packages-section" className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                {t('coaching.pricing.sectionTitle')}
              </h2>
            </div>

            <div className="scroll-fade-in">
              <PricingCards />
            </div>

            <div className="text-center mt-12 scroll-fade-in">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-primary text-lg px-8 py-4 inline-flex items-center justify-center min-h-[44px]"
              >
                {t('coaching.hero.primaryCta')}
              </a>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="md:w-1/2 scroll-fade-in">
                <h2 className="section-title text-white">{t('coaching.target.sectionTitle')}</h2>
                <p className="mb-6 text-white/90">{t('coaching.target.description')}</p>
                <ul className="space-y-4">
                  {(t('coaching.target.audiences', { returnObjects: true }) as string[]).map(
                    (audience, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                        <span className="text-white">{audience}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="md:w-1/2 scroll-fade-in">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/lovable-uploads/7a91b7ec-6167-4e40-bd4c-9460ff6826b2.png"
                    alt="One-on-one personal training session"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                {t('coaching.process.sectionTitle')}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-theme-tangerine"></div>
                {(t('coaching.process.steps', { returnObjects: true }) as Array<{
                  number: string;
                  title: string;
                  description: string;
                }>).map((step, index) => (
                  <div key={index} className="scroll-fade-in relative mb-10 pl-20">
                    <div className="absolute left-0 top-0 w-16 h-16 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-theme-tangerine">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-white/90">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Free YouTube workouts */}
        <YouTubeSection />

        {/* Testimonials */}
        <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 text-white">
                {t('homepage.testimonials.sectionTitle')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t('homepage.testimonials.testimonials', { returnObjects: true }) as any[]).map(
                (testimonial, index) => (
                  <div key={index} className="scroll-fade-in">
                    <TestimonialCard quote={testimonial.quote} name={testimonial.name} />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          titleKey="coaching.faq.sectionTitle"
          itemsKey="coaching.faq.items"
        />

        {/* Contact & Application */}
        <section id="contact-section" className="section-padding bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width max-w-4xl">
            <div className="scroll-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight text-center">
                {t('coaching.contact.formHeadline')}
              </h2>

              <div className="mb-10">
                <ContactForm />
              </div>

              <h3 className="text-white text-lg font-semibold mb-4">
                {t('coaching.contact.stillHaveQuestions')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-theme-tangerine bg-opacity-20 p-5 rounded-lg border border-theme-tangerine border-opacity-30">
                  <div className="flex items-center mb-2">
                    <MessageSquare size={20} className="mr-3 text-theme-tangerine" />
                    <a
                      href="https://wa.me/37067951040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-theme-tangerine transition-colors font-semibold"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 ml-8">{t('coaching.contact.whatsAppNote')}</p>
                </div>

                <div className="bg-theme-tangerine bg-opacity-20 p-5 rounded-lg border border-theme-tangerine border-opacity-30">
                  <div className="flex items-center mb-2">
                    <Instagram size={20} className="mr-3 text-theme-tangerine" />
                    <a
                      href="https://www.instagram.com/paulius_physio?igsh=dXd1bWFiajZwN293"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-theme-tangerine transition-colors font-semibold"
                    >
                      @paulius_physio
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 ml-8">{t('coaching.contact.instagramNote')}</p>
                </div>

                <div className="bg-theme-tangerine bg-opacity-20 p-5 rounded-lg border border-theme-tangerine border-opacity-30">
                  <div className="flex items-center mb-2">
                    <MapPin size={20} className="mr-3 text-theme-tangerine" />
                    <span className="text-white font-semibold">
                      {t('coaching.contact.locations.label')}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 ml-8">
                    <a
                      href="https://maps.app.goo.gl/23ZNRSt67dN6G9o36"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-theme-tangerine transition-colors"
                    >
                      <ul className="space-y-1">
                        {(t('coaching.contact.locations.places', { returnObjects: true }) as string[]).map(
                          (place, index) => (
                            <li key={index}>• {place}</li>
                          )
                        )}
                      </ul>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Coaching;
