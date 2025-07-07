
import { useTranslation } from 'react-i18next';
import TestimonialCard from '../TestimonialCard';

const CoachingTestimonials = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default CoachingTestimonials;
