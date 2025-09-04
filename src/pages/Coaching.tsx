import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MessageSquare, Check, Instagram, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import TestimonialCard from '../components/TestimonialCard';
import PricingCards from '../components/PricingCards';
const Coaching = () => {
  const {
    t
  } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Handle hash navigation (e.g., #contact-section)
    if (location.hash) {
      // Use setTimeout to ensure the page has rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.scroll-fade-in').forEach(el => {
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
    };
  }, [location.hash]);
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-section');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto animate-fade-in">
              {/* Profile Photo - Mobile: Above text, Desktop: Right side */}
              <div className="order-1 md:order-2 md:w-1/3 flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <img src="/lovable-uploads/6b62735b-caa1-4c49-8a96-b52c2dd5af3b.png" alt="Paulius Lipskis - Professional Portrait" className="w-full h-full object-cover object-[center_20%] rounded-lg shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-theme-navy opacity-20 rounded-lg"></div>
                </div>
              </div>
              
              {/* Hero Content - Mobile: Below photo, Desktop: Left side */}
              <div className="order-2 md:order-1 md:w-2/3 text-center md:text-left flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-center leading-tight whitespace-pre-line">
                  {t('coaching.hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8 text-center max-w-4xl mx-auto">
                  {t('coaching.hero.subtitle')}
                </p>
                <button onClick={() => navigate('/')} className="cta-button-primary inline-block">
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
              <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-30 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4 text-white">{t('coaching.services.personalizedProgram.title')}</h3>
                <p className="text-white">
                  {t('coaching.services.personalizedProgram.description')}
                </p>
              </div>
              
              <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-30 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4 text-white">{t('coaching.services.weeklyAdjustments.title')}</h3>
                <p className="text-white">
                  {t('coaching.services.weeklyAdjustments.description')}
                </p>
              </div>
              
              <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-30 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4 text-white">{t('coaching.services.psychologicalSupport.title')}</h3>
                <p className="text-white">
                  {t('coaching.services.psychologicalSupport.description')}
                </p>
              </div>
              
              <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-30 card-hover scroll-fade-in">
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
                
                {t('language') === 'lt' && <p className="mb-4 text-white">
                    Mano metodas sukurtas žmonėms, kurie nori aiškumo, struktūros ir ilgalaikės sėkmės savo sveikatingumo kelyje:
                  </p>}
                
                <p className="mb-6 text-white">
                  {t('coaching.target.description')}
                </p>
                
                <ul className="space-y-4">
                  {(t('coaching.target.audiences', {
                  returnObjects: true
                }) as string[]).map((audience: string, index: number) => <li key={index} className="flex items-start">
                      <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                      <span className="text-white">{audience}</span>
                    </li>)}
                </ul>
              </div>
              
              <div className="md:w-1/2 scroll-fade-in">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img src="/lovable-uploads/7a91b7ec-6167-4e40-bd4c-9460ff6826b2.png" alt="One-on-one personal training session" className="w-full h-auto" />
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
            <div className="mb-8 scroll-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
                <img src="/lovable-uploads/427ebe58-891e-44b0-85bd-c76e3fcd43ec.png" alt="Personal training with focused guidance and proper form" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="scroll-fade-in">
              <PricingCards />
            </div>

            {/* CTA after pricing */}
            <div className="text-center mt-12 scroll-fade-in">
              <button onClick={() => navigate('/')} className="cta-button-primary text-lg px-8 py-4">
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
                
                {(t('coaching.process.steps', {
                returnObjects: true
              }) as Array<{
                number: string;
                title: string;
                description: string;
              }>).map((step, index: number) => <div key={index} className="scroll-fade-in relative mb-12 pl-20">
                    <div className="absolute left-0 top-0 w-16 h-16 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-theme-tangerine">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-white">{step.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>
        
        {/* Expanded Testimonials */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                {t('homepage.testimonials.sectionTitle')}
              </h2>
            </div>
            
            {/* Group training community image */}
            <div className="mb-12 scroll-fade-in">
              <div className="relative rounded-lg overflow-hidden shadow-xl max-w-md mx-auto">
                <img src="/lovable-uploads/2a7d58f6-c98a-4706-a5a9-faa7910a150a.png" alt="Group training session showing community and progress" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t('homepage.testimonials.testimonials', {
              returnObjects: true
            }) as any[]).map((testimonial, index: number) => <div key={index} className="scroll-fade-in">
                  <TestimonialCard quote={testimonial.quote} name={testimonial.name} />
                </div>)}
            </div>
          </div>
        </section>
        
        {/* Contact & Application */}
        <section id="contact-section" className="section-padding bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width">
            <div className="scroll-fade-in">
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight text-center">
                Tavo kelias į stipresnį kūną prasideda čia – užpildyk formą
              </h2>
              
              <div className="mb-10">
                <ContactForm />
              </div>
              
              <h3 className="text-white text-lg font-semibold mb-4">Jei dar turi klausimų, susisiek:</h3>
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="bg-theme-tangerine bg-opacity-20 p-6 rounded-lg border border-theme-tangerine border-opacity-30">
                  <div className="flex items-center mb-2">
                    <MessageSquare size={20} className="mr-3 text-theme-tangerine" />
                    <a href="https://wa.me/37067951040" target="_blank" rel="noopener noreferrer" className="text-white hover:text-theme-tangerine transition-colors font-semibold">
                      WhatsApp
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 ml-8">
                    {t('coaching.contact.whatsAppNote')}
                  </p>
                </div>

                {/* Instagram */}
                <div className="bg-theme-tangerine bg-opacity-20 p-6 rounded-lg border border-theme-tangerine border-opacity-30">
                  <div className="flex items-center mb-2">
                    <Instagram size={20} className="mr-3 text-theme-tangerine" />
                    <a href="https://www.instagram.com/paulius_physio?igsh=dXd1bWFiajZwN293" target="_blank" rel="noopener noreferrer" className="text-white hover:text-theme-tangerine transition-colors font-semibold">
                      @paulius_physio
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 ml-8">
                    {t('coaching.contact.instagramNote')}
                  </p>
                </div>

                {/* Training Locations */}
                <div className="bg-theme-tangerine bg-opacity-20 p-6 rounded-lg border border-theme-tangerine border-opacity-30">
                  <div className="flex items-center mb-2">
                    <MapPin size={20} className="mr-3 text-theme-tangerine" />
                    
                  </div>
                  <div className="text-sm text-gray-300 ml-8">
                    <a href="https://maps.app.goo.gl/23ZNRSt67dN6G9o36" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-theme-tangerine transition-colors">
                      <p className="mb-1">{t('coaching.contact.locations.intro')}</p>
                      <ul className="space-y-1">
                        {(t('coaching.contact.locations.places', {
                        returnObjects: true
                      }) as string[]).map((place: string, index: number) => <li key={index}>• {place}</li>)}
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
    </>;
};
export default Coaching;