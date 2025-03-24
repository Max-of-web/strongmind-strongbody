
import { useEffect } from 'react';
import { Calendar, MessageSquare, Check, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ApplicationForm from '../components/ApplicationForm';
import TestimonialCard from '../components/TestimonialCard';

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
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-coach-navy">
          <div className="container-width px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                1-on-1 Personal Coaching With Paulius Lipskis
              </h1>
              <p className="text-xl md:text-2xl text-coach-light text-opacity-90 mb-8">
                Personalized training that addresses your unique physical needs and mental barriers, designed for long-term sustainable results.
              </p>
              <a 
                href="#contact-section" 
                className="cta-button-primary inline-block"
              >
                Book Your First Session
              </a>
            </div>
          </div>
        </section>
        
        {/* What You'll Get */}
        <section className="section-padding bg-coach-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                What You'll Get
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-coach-navy bg-opacity-50 p-6 rounded-lg border border-coach-light border-opacity-10 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4">Personalized Program</h3>
                <p>
                  A training program built specifically for your goals, limitations, and lifestyle, not a one-size-fits-all template. Includes exercises, progression plan, and recovery protocols.
                </p>
              </div>
              
              <div className="bg-coach-navy bg-opacity-50 p-6 rounded-lg border border-coach-light border-opacity-10 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4">Weekly Adjustments</h3>
                <p>
                  Regular program refinement based on your feedback and progress. Your program evolves as you develop, ensuring continuous challenge and adaptation.
                </p>
              </div>
              
              <div className="bg-coach-navy bg-opacity-50 p-6 rounded-lg border border-coach-light border-opacity-10 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4">Psychological Support</h3>
                <p>
                  Guidance on overcoming mental barriers, developing sustainable habits, and maintaining motivation throughout your fitness journey.
                </p>
              </div>
              
              <div className="bg-coach-navy bg-opacity-50 p-6 rounded-lg border border-coach-light border-opacity-10 card-hover scroll-fade-in">
                <h3 className="text-xl font-semibold mb-4">Direct Communication</h3>
                <p>
                  Access to me via WhatsApp for questions, form checks, and accountability. You're never alone in your journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who It's For */}
        <section className="section-padding bg-coach-navy">
          <div className="container-width">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              <div className="md:w-1/2 scroll-fade-in">
                <h2 className="section-title">Who It's For</h2>
                <p className="mb-6">
                  My coaching is ideal for individuals who are committed to making meaningful changes to their physical health and mental approach to fitness. This program is especially beneficial for:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={24} className="text-coach-accent shrink-0 mt-1 mr-3" />
                    <span>Professionals dealing with pain or discomfort from sedentary work</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-coach-accent shrink-0 mt-1 mr-3" />
                    <span>Individuals recovering from injuries who need safe, guided progression</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-coach-accent shrink-0 mt-1 mr-3" />
                    <span>People who have tried multiple fitness approaches without lasting success</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={24} className="text-coach-accent shrink-0 mt-1 mr-3" />
                    <span>Those looking to develop a healthier relationship with exercise and their bodies</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 scroll-fade-in">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/b4413382-3998-4c2e-a754-75a067048c2d.png" 
                    alt="Personal training session" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coach-navy via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Packages & Pricing */}
        <section className="section-padding bg-coach-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                Packages & Pricing
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-coach-navy bg-opacity-50 p-6 rounded-lg border border-coach-light border-opacity-10 card-hover scroll-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-coach-accent">€50</div>
                  <p className="text-coach-light text-opacity-70 mt-2">per session</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-accent shrink-0 mt-1 mr-2" />
                    <span>Single training session</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-accent shrink-0 mt-1 mr-2" />
                    <span>Form assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-accent shrink-0 mt-1 mr-2" />
                    <span>Basic movement corrections</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-accent shrink-0 mt-1 mr-2" />
                    <span>Workout recommendations</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cta-button-secondary w-full"
                  >
                    Book Session
                  </a>
                </div>
              </div>
              
              <div className="bg-coach-navy bg-opacity-50 p-6 rounded-lg border border-coach-light border-opacity-10 card-hover scroll-fade-in">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Monthly</h3>
                  <div className="text-3xl font-bold text-coach-accent">€150</div>
                  <p className="text-coach-light text-opacity-70 mt-2">per month</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-accent shrink-0 mt-1 mr-2" />
                    <span>4 sessions per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-accent shrink-0 mt-1 mr-2" />
                    <span>Personalized program</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-accent shrink-0 mt-1 mr-2" />
                    <span>WhatsApp support</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-accent shrink-0 mt-1 mr-2" />
                    <span>Weekly program adjustments</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cta-button-secondary w-full"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
              
              <div className="bg-coach-accent bg-opacity-95 p-6 rounded-lg shadow-lg scroll-fade-in relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-coach-light text-coach-accent text-xs font-bold px-3 py-1">
                  RECOMMENDED
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Transformation</h3>
                  <div className="text-3xl font-bold text-coach-light">€250</div>
                  <p className="text-coach-light text-opacity-90 mt-2">per month</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-light shrink-0 mt-1 mr-2" />
                    <span>8 sessions per month</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-light shrink-0 mt-1 mr-2" />
                    <span>Comprehensive assessment</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-light shrink-0 mt-1 mr-2" />
                    <span>Advanced program design</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-light shrink-0 mt-1 mr-2" />
                    <span>Priority WhatsApp support</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-light shrink-0 mt-1 mr-2" />
                    <span>Habit development coaching</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-coach-light shrink-0 mt-1 mr-2" />
                    <span>Nutritional guidance</span>
                  </li>
                </ul>
                
                <div className="text-center">
                  <a 
                    href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-coach-light text-coach-accent font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-md w-full"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="section-padding bg-coach-navy">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                How It Works
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-px bg-coach-accent"></div>
                
                <div className="scroll-fade-in relative mb-12 pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-coach-accent bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-coach-accent">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Application</h3>
                  <p>
                    Fill out the application form below or book a discovery call. This helps me understand your goals, history, and current challenges.
                  </p>
                </div>
                
                <div className="scroll-fade-in relative mb-12 pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-coach-accent bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-coach-accent">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Discovery Call</h3>
                  <p>
                    We'll have a 30-minute call to discuss your application in more detail and determine if we're a good fit for working together.
                  </p>
                </div>
                
                <div className="scroll-fade-in relative mb-12 pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-coach-accent bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-coach-accent">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Initial Assessment</h3>
                  <p>
                    Our first session includes a comprehensive physical assessment and deeper discussion about your goals, limitations, and preferences.
                  </p>
                </div>
                
                <div className="scroll-fade-in relative pl-20">
                  <div className="absolute left-0 top-0 w-16 h-16 bg-coach-accent bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-coach-accent">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Ongoing Coaching</h3>
                  <p>
                    Regular training sessions with continuous program refinement based on your progress and feedback. I'll be there every step of the way to guide and support you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expanded Testimonials */}
        <section className="section-padding bg-coach-charcoal">
          <div className="container-width">
            <div className="text-center mb-12 scroll-fade-in">
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
                Client Success Stories
              </h2>
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
                  quote="As someone who's tried many personal trainers, I can confidently say Paulius's approach is unique. He's equally invested in your mental approach as your physical training. I've not only gotten stronger but have developed a healthier relationship with fitness overall."
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
                  quote="After my injury, I was afraid to push myself. Paulius gradually rebuilt my confidence through careful progression. His knowledge of rehabilitation and psychology created the perfect environment for recovery."
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
        <section id="contact-section" className="section-padding bg-coach-navy">
          <div className="container-width">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="lg:w-2/5 scroll-fade-in">
                <h2 className="section-title">Get In Touch</h2>
                <p className="mb-8">
                  Have questions before applying? Reach out directly via phone, WhatsApp, or schedule a free discovery call.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-coach-accent bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <Phone size={20} className="text-coach-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+37067951040" className="hover:text-coach-accent transition-colors">
                        +370 6795 1040
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-coach-accent bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare size={20} className="text-coach-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <a 
                        href="https://wa.me/37067951040" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-coach-accent transition-colors"
                      >
                        Direct message
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-coach-accent bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                      <Calendar size={20} className="text-coach-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Discovery Call</h4>
                      <a 
                        href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-coach-accent transition-colors"
                      >
                        Schedule a free 30-minute call
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-coach-accent bg-opacity-20 p-6 rounded-lg border border-coach-accent border-opacity-30">
                  <h4 className="font-semibold mb-3">Training Locations</h4>
                  <p className="mb-2">Available for in-person coaching at:</p>
                  <ul className="space-y-2">
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
