
import { useEffect } from 'react';
import { MessageSquare, Check, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';
import TestimonialCard from '../components/TestimonialCard';
import PricingCards from '../components/PricingCards';

const Coaching = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.scroll-fade-in').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
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
                  onClick={scrollToForm}
                  className="cta-button-primary inline-block"
                >
                  {t('homepage.hero.ctaButton')}
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* What You'll Get */}
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
        
        {/* Who It's For */}
        <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="md:w-1/2 scroll-fade-in">
                <h2 className="section-title text-white">{t('coaching.target.sectionTitle')}</h2>
                <p className="mb-6 text-white font-medium">
                  "{t('coaching.target.intro')}"
                </p>
                <p className="mb-6 text-white">
                  {t('coaching.target.description')}
                </p>
                
                <ul className="space-y-4">
                  {(t('coaching.target.audiences', { returnObjects: true }) as string[]).map((audience: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                      <span className="text-white">{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-1/2 scroll-fade-in">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/7a91b7ec-6167-4e40-bd4c-9460ff6826b2.png" 
                    alt="One-on-one personal training session" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-navy via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Packages & Pricing */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                {t('coaching.pricing.sectionTitle')}
              </h2>
            </div>
            
            {/* 1-on-1 coaching image before pricing cards */}
            <div className="mb-12 scroll-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
                <img
                  src="/lovable-uploads/427ebe58-891e-44b0-85bd-c76e3fcd43ec.png"
                  alt="Personal training with focused guidance and proper form"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="scroll-fade-in">
              <PricingCards />
            </div>

            {/* CTA after pricing */}
            <div className="text-center mt-12 scroll-fade-in">
              <button 
                onClick={scrollToForm}
                className="cta-button-primary text-lg px-8 py-4"
              >
                {t('homepage.hero.ctaButton')}
              </button>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
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
        
        {/* Expanded Testimonials */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                {t('coaching.testimonials.sectionTitle')}
              </h2>
            </div>
            
            {/* Group training community image */}
            <div className="mb-12 scroll-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
                <img
                  src="/lovable-uploads/2a7d58f6-c98a-4706-a5a9-faa7910a150a.png"
                  alt="Group training session showing community and progress"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote={t('coaching.testimonials.marta.quote')}
                  name={t('coaching.testimonials.marta.name')}
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote={t('coaching.testimonials.jonas.quote')}
                  name={t('coaching.testimonials.jonas.name')}
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote={t('coaching.testimonials.laura.quote')}
                  name={t('coaching.testimonials.laura.name')}
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote={t('coaching.testimonials.tomas.quote')}
                  name={t('coaching.testimonials.tomas.name')}
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote={t('coaching.testimonials.greta.quote')}
                  name={t('coaching.testimonials.greta.name')}
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote={t('coaching.testimonials.andrius.quote')}
                  name={t('coaching.testimonials.andrius.name')}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact & Application */}
        <section id="contact-section" className="section-padding bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="lg:w-2/5 scroll-fade-in">
                <h2 className="section-title text-white">{t('coaching.contact.sectionTitle')}</h2>
                <p className="mb-8 text-white">
                  {t('coaching.contact.intro')}
                </p>
                
                <div className="bg-theme-tangerine bg-opacity-20 p-6 rounded-lg border border-theme-tangerine border-opacity-30 mb-8">
                  <h4 className="font-semibold mb-3 text-white">{t('coaching.contact.locations.title')}</h4>
                  <p className="mb-2 text-white">{t('coaching.contact.locations.intro')}</p>
                  <ul className="space-y-2 text-white">
                    {(t('coaching.contact.locations.places', { returnObjects: true }) as string[]).map((place: string, index: number) => (
                      <li key={index}>• {place}</li>
                    ))}
                  </ul>
                </div>

                {/* Single WhatsApp section for short questions only */}
                <div className="bg-[#25D366] bg-opacity-20 p-6 rounded-lg border border-[#25D366] border-opacity-30">
                  <div className="flex items-center mb-3">
                    <MessageSquare size={24} className="text-[#25D366] mr-3" />
                    <h4 className="font-semibold text-white">{t('coaching.contact.whatsapp.label')}</h4>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">
                    {t('coaching.contact.whatsapp.description')}
                  </p>
                  <a 
                    href="https://wa.me/37067951040"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-all duration-300"
                  >
                    <MessageSquare size={18} />
                    WhatsApp
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="lg:w-3/5 scroll-fade-in">
                <ApplicationForm />
              </div>
            </div>

            {/* Single Google Calendar CTA under the form */}
            <div className="text-center mt-16 scroll-fade-in">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white max-w-4xl mx-auto">
                {t('coaching.contact.finalCta.title')}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
                {t('coaching.contact.finalCta.note')}
              </p>
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
                {t('coaching.contact.finalCta.button')}
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Coaching;
