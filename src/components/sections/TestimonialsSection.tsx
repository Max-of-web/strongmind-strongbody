
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TestimonialCard from '../TestimonialCard';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.testimonials.sectionTitle')}
          </h2>
        </div>
        
        {/* Group training image to show community aspect */}
        <div className="mb-12 scroll-fade-in">
          <div className="relative rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img
              src="/lovable-uploads/652c7f10-f762-42d6-b1f0-fe385f04f1f0.png"
              alt="Group training session showing community and teamwork"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-elegant-charcoal via-transparent to-transparent" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <TestimonialCard
            quote={t('homepage.testimonials.laura.quote')}
            name={t('homepage.testimonials.laura.name')}
          />
          <TestimonialCard
            quote={t('homepage.testimonials.tomas.quote')}
            name={t('homepage.testimonials.tomas.name')}
          />
          <TestimonialCard
            quote={t('homepage.testimonials.milda.quote')}
            name={t('homepage.testimonials.milda.name')}
          />
        </div>
        <div className="text-center scroll-fade-in">
          <Link
            to="/coaching"
            className="inline-flex items-center text-theme-tangerine hover:underline font-semibold"
          >
            {t('homepage.testimonials.viewMoreLink')}
            <ChevronRight size={20} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
