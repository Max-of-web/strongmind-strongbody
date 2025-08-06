
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LowerBackGuide from '../components/LowerBackGuide';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AboutSection from '../components/sections/AboutSection';
import FinalCTASection from '../components/sections/FinalCTASection';
import WhatsAppCTASection from '../components/sections/WhatsAppCTASection';
import ContactForm from '../components/ContactForm';

const Index = () => {
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
        <HeroSection />
        <FeaturesSection />
        <AchievementsSection />
        
        {/* Lower Back Guide */}
        <section id="free-guide">
          <LowerBackGuide />
        </section>

        <TestimonialsSection />
        <AboutSection />
        
        {/* Contact Form */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <ContactForm />
          </div>
        </section>
        
        <FinalCTASection />
        <WhatsAppCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
