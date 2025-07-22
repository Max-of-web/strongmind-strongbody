
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LowerBackGuide from '../components/LowerBackGuide';
import ApplicationForm from '../components/ApplicationForm';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AboutSection from '../components/sections/AboutSection';
import FinalCTASection from '../components/sections/FinalCTASection';
import WhatsAppCTASection from '../components/sections/WhatsAppCTASection';

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
        
        {/* Coaching Application Form */}
        <section id="coaching-form" className="py-16 bg-elegant-dark">
          <div className="container-width px-4">
            <ApplicationForm />
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
