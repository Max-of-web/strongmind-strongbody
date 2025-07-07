
import { useEffect } from 'react';
import { Calendar, MessageSquare, Check, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';
import TestimonialCard from '../components/TestimonialCard';
import PricingCards from '../components/PricingCards';

const Coaching = () => {
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

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Updated with larger profile photo and fade effect */}
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
                  1-on-1 Personal Coaching With Paulius Lipskis
                </h1>
                <p className="text-xl md:text-2xl text-white mb-8">
                  Build habits, gain momentum, and level up your life through consistent guidance, smart movement, and practical mindset coaching.
                </p>
                <a 
                  href="https://calendar.app.google/LU6UdzQr53kmsKjc6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-primary inline-block"
                >
                  Book Your First Session
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* What You'll Get - Updated with new messaging */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                What You'll Get
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-10 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4 text-white">Personalized Program</h3>
                <p className="text-white">
                  A training program built specifically for your goals, limitations, and lifestyle, not a one-size-fits-all template. Includes exercises, progression plan, and recovery protocols.
                </p>
              </div>
              
              <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-10 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4 text-white">Weekly Adjustments</h3>
                <p className="text-white">
                  Regular program refinement based on your feedback and progress. Your program evolves as you develop, ensuring continuous challenge and adaptation.
                </p>
              </div>
              
              <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-10 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4 text-white">Mindset Coaching</h3>
                <p className="text-white">
                  Practical strategies to overcome mental barriers, develop sustainable habits, and maintain motivation throughout your fitness journey.
                </p>
              </div>
              
              <div className="bg-theme-navy bg-opacity-50 p-6 rounded-lg border border-white border-opacity-10 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4 text-white">Direct Communication</h3>
                <p className="text-white">
                  Access to me via WhatsApp for questions, form checks, and accountability. You're never alone in your journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who It's For - Updated with clearer emphasis on habit building */}
        <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="md:w-1/2 scroll-fade-in">
                <h2 className="section-title text-white">Who It's For</h2>
                <p className="mb-6 text-white">
                  "This isn't about perfection. It's about showing up, one real step at a time."
                </p>
                <p className="mb-6 text-white">
                  My coaching is ideal for individuals who are committed to making meaningful changes to their physical health and building sustainable habits. This program is especially beneficial for:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span className="text-white">Professionals dealing with pain or discomfort from sedentary work</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span className="text-white">Individuals recovering from injuries who need safe, guided progression</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span className="text-white">People who have tried multiple fitness approaches without lasting success</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-theme-tangerine shrink-0 mt-1 mr-3" />
                    <span className="text-white">Those looking to develop a healthier relationship with exercise and their bodies</span>
                  </li>
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
                Packages & Pricing
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
          </div>
        </section>
        
        {/* How It Works - Updated to emphasize habit building */}
        <section className="section-padding bg-theme-navy dark:bg-theme-darknavy">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2 text-white">
                How It Works
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-theme-tangerine"></div>
                
                <div className="scroll-fade-in relative mb-12 pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-theme-tangerine">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Application</h3>
                  <p className="text-white">
                    Fill out the application form below or book a discovery call. This helps me understand your goals, history, and current challenges.
                  </p>
                </div>
                
                <div className="scroll-fade-in relative mb-12 pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-theme-tangerine">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Discovery Call</h3>
                  <p className="text-white">
                    We'll have a 30-minute call to discuss your application in more detail and determine if we're a good fit for working together.
                  </p>
                </div>
                
                <div className="scroll-fade-in relative mb-12 pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-theme-tangerine">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Initial Assessment</h3>
                  <p className="text-white">
                    Our first session includes a comprehensive physical assessment and deeper discussion about your goals, limitations, and preferences.
                  </p>
                </div>
                
                <div className="scroll-fade-in relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-theme-tangerine">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Ongoing Coaching</h3>
                  <p className="text-white">
                    Whether you're healing, training, or just trying to feel more like yourself again — this is where it all clicks together. I'll be there every step of the way to guide and support you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expanded Testimonials */}
        <section className="section-padding bg-elegant-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                Client Success Stories
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
                  quote="Before working with Paulius, I'd given up on finding a solution for my chronic back pain. His approach combines careful attention to form with an understanding of the psychological aspects of pain. I'm now able to exercise without fear and have regained confidence in my body."
                  name="Marta S."
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote="Paulius understands that progress isn't linear. When I struggled with consistency, instead of making me feel guilty, he helped me identify the underlying barriers and create a more realistic approach. This mindset shift was what finally helped me stay consistent."
                  name="Jonas R."
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote="As someone who's tried many personal trainers, I can confidently say Paulius's approach is unique. His focus on building sustainable habits and making small, consistent changes has completely transformed how I approach fitness."
                  name="Laura K."
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote="I appreciated how Paulius adapted my program during particularly stressful work periods. Instead of pushing me to maintain the same intensity, he modified my training to support recovery while still making progress. This flexibility made all the difference."
                  name="Tomas B."
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote="After my injury, I was afraid to push myself. Paulius gradually rebuilt my confidence through careful progression. His knowledge of rehabilitation created the perfect environment for recovery."
                  name="Greta M."
                />
              </div>
              
              <div className="scroll-fade-in">
                <TestimonialCard 
                  quote="The combination of physical training and mindset coaching has been transformative. I've achieved physical goals I never thought possible, but more importantly, I've developed a sustainable approach to fitness that I can maintain for life."
                  name="Andrius P."
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
                <h2 className="section-title text-white">Get In Touch</h2>
                <p className="mb-8 text-white">
                  Have questions before applying? Reach out directly via phone, WhatsApp, or schedule a free discovery call.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <Phone size={20} className="text-theme-tangerine" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Phone</h4>
                      <a href="tel:+37067951040" className="text-white hover:text-theme-tangerine transition-colors">
                        +370 6795 1040
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare size={20} className="text-theme-tangerine" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">WhatsApp</h4>
                      <a 
                        href="https://wa.me/37067951040" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-theme-tangerine transition-colors"
                      >
                        Direct message
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-theme-tangerine bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <Calendar size={20} className="text-theme-tangerine" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white">Discovery Call</h4>
                      <a 
                        href="https://calendar.app.google/LU6UdzQr53kmsKjc6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-theme-tangerine transition-colors"
                      >
                        Schedule a free 30-minute call
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-theme-tangerine bg-opacity-20 p-6 rounded-lg border border-theme-tangerine border-opacity-30">
                  <h4 className="font-semibold mb-3 text-white">Training Locations</h4>
                  <p className="mb-2 text-white">Available for in-person coaching at:</p>
                  <ul className="space-y-2 text-white">
                    <li>• Reformatas Gym, Vilnius</li>
                    <li>• SEB Arena, Vilnius</li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:w-3/5 scroll-fade-in">
                <ApplicationForm />
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
