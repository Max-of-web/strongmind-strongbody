
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import TestimonialCard from '../TestimonialCard';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-elegant-charcoal">
      <div className="container-width">
        <div className="text-center mb-10 scroll-fade-in">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">
            {t('homepage.testimonials.sectionTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {(t('homepage.testimonials.testimonials', { returnObjects: true }) as any[])
            .slice(0, 3)
            .map((testimonial, index: number) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
              />
            ))}
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
