
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CoachingHero from '../components/coaching/CoachingHero';
import CoachingServices from '../components/coaching/CoachingServices';
import CoachingTarget from '../components/coaching/CoachingTarget';
import CoachingPricing from '../components/coaching/CoachingPricing';
import CoachingProcess from '../components/coaching/CoachingProcess';
import CoachingTestimonials from '../components/coaching/CoachingTestimonials';
import CoachingContact from '../components/coaching/CoachingContact';

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
        <CoachingHero onScrollToForm={scrollToForm} />
        <CoachingServices />
        <CoachingTarget />
        <CoachingPricing onScrollToForm={scrollToForm} />
        <CoachingProcess />
        <CoachingTestimonials />
        <CoachingContact />
      </main>
      <Footer />
    </>
  );
};

export default Coaching;
