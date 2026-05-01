
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LowerBackGuide from '../components/LowerBackGuide';
import HeroSection from '../components/sections/HeroSection';
import TrustStripSection from '../components/sections/TrustStripSection';
import ProblemSolutionSection from '../components/sections/ProblemSolutionSection';
import OutcomesSection from '../components/sections/OutcomesSection';
import PackagesTeaserSection from '../components/sections/PackagesTeaserSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AboutSection from '../components/sections/AboutSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTASection from '../components/sections/FinalCTASection';

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
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStripSection />
        <ProblemSolutionSection />
        <OutcomesSection />
        <PackagesTeaserSection />
        <TestimonialsSection />
        <AboutSection />
        <section id="free-guide">
          <LowerBackGuide />
        </section>
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
