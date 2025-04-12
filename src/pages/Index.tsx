import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Dumbbell, Heart, Timer, Check, ChevronRight, Award, GraduationCap, BookOpen, Briefcase } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import LowerBackGuide from '../components/LowerBackGuide';
const Index = () => {
  useEffect(() => {
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
  }, []);
  return <>
      <Header />
      <main>
        {/* Hero Section - Updated with new messaging */}
        <section className="hero-section">
          <div className="container-width px-4 md:px-8 flex flex-col justify-center items-start h-full">
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-zinc-50 lg:text-6xl">
                Level Up Your Life – Build Habits, Gain Momentum
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white">
                Through consistent guidance, smart movement, and practical mindset shifts, I help you take control of your physical health and fitness journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://calendly.com/lipskis-paulius/asmenine-treniruote" target="_blank" rel="noopener noreferrer" className="cta-button-primary">
                  Book a Discovery Call
                </a>
                <a href="#free-guide" className="cta-button-secondary border border-white text-white hover:text-white">
                  Get Free Guide
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Makes This Coaching Different - Updated approach */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                What Makes This Coaching Different
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="scroll-fade-in">
                <FeatureCard icon={Brain} title="Smart Movement" description="Training that respects your body's mechanics and adapts to your unique structure and patterns." />
              </div>
              
              <div className="scroll-fade-in">
                <FeatureCard icon={Dumbbell} title="Adaptive Programs" description="Training programs that evolve as you progress, always keeping you challenged and engaged." />
              </div>
              
              <div className="scroll-fade-in">
                <FeatureCard icon={Heart} title="Mindset Coaching" description="Practical strategies to overcome mental barriers that often prevent physical progress." />
              </div>
              
              <div className="scroll-fade-in">
                <FeatureCard icon={Timer} title="Habit Building" description="Creating sustainable routines rather than quick fixes, focusing on lifelong health and fitness." />
              </div>
            </div>
          </div>
        </section>
        
        {/* What You'll Achieve - Updated messaging */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="md:w-1/2 scroll-fade-in">
                <h2 className="section-title">What You'll Achieve</h2>
                <p className="mb-6">
                  "This isn't about perfection. It's about showing up, one real step at a time."
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span>Reduced pain and discomfort through proper movement patterns</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span>Smarter training approach that adapts to your energy levels</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span>Sustainable habits that fit into your lifestyle</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span>Stronger body awareness and connection</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span>Increased confidence in your movement abilities</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 scroll-fade-in">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img src="/lovable-uploads/92dd7281-aa00-42c3-aa94-41ea33b2d176.png" alt="Client training with weights" className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Lower Back Pain Guide Section */}
        <section id="free-guide">
          <LowerBackGuide />
        </section>
        
        {/* Testimonials Preview - Updated for higher contrast */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                What Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="scroll-fade-in">
                <TestimonialCard quote="Paulius understood my back pain like no other trainer before. His approach is methodical yet flexible, and I've made more progress in 3 months than in years of traditional therapy." name="Laura K." />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard quote="What makes Paulius different is how he adapts to your mood and energy. Some days we go hard, others we focus on technique. It's always productive and never feels like wasted time." name="Tomas B." />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard quote="The mindset coaching aspect of his training was exactly what I needed. I've not only gotten stronger physically but also developed a healthier relationship with exercise and movement." name="Milda P." />
              </div>
            </div>
            
            <div className="text-center scroll-fade-in">
              <Link to="/coaching" className="inline-flex items-center text-theme-tangerine hover:underline font-semibold">
                See more testimonials
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Mini About Section - Updated with clearer role definition */}
        <section id="about" className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              <div className="md:w-1/3 scroll-fade-in">
                <div className="rounded-full overflow-hidden w-56 h-56 mx-auto md:mx-0 border-4 border-theme-tangerine">
                  <img src="/lovable-uploads/ff6b5571-dd3d-4852-b785-1fee300184fe.png" alt="Paulius Lipskis" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="md:w-2/3 scroll-fade-in">
                <h2 className="section-title">About Paulius Lipskis</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <FeatureCard icon={GraduationCap} title="BSc Physiotherapy" description="" isBadge isSmall />
                  <FeatureCard icon={Award} title="NASM Certificate" description="" isBadge isSmall />
                  <FeatureCard icon={BookOpen} title="MSc Precision Nutrition" description="" isBadge isSmall />
                  <FeatureCard icon={Briefcase} title="Personal Trainer (OTA Academy)" description="" isBadge isSmall />
                </div>
                <p className="mb-6">
                  With a background in physiotherapy, I've spent the last decade helping people transform their relationship with their bodies. I believe in training that respects your body's signals while challenging your limits.
                </p>
                <p className="mb-6">
                  Whether you're healing, training, or just trying to feel more like yourself again — this is where it all clicks together. My approach combines evidence-based exercise science with practical mindset coaching to create sustainable programs.
                </p>
                <p>
                  Based in Vilnius, I work with clients at Reformatas Gym and SEB Arena, providing personalized coaching that addresses both movement mechanics and the mental aspects of physical transformation.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Banner */}
        <CTABanner message="Ready to level up your life and build momentum with sustainable habits?" buttonText="Book Your Free Discovery Call" buttonLink="https://calendly.com/lipskis-paulius/asmenine-treniruote" />
      </main>
      <Footer />
    </>;
};
export default Index;