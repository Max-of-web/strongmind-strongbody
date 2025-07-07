
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ApplicationForm from '../ApplicationForm';

const CoachingContact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-section" className="section-padding bg-theme-navy dark:bg-theme-darknavy">
      <div className="container-width">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-2/5 scroll-fade-in">
            <h2 className="section-title text-white">{t('coaching.contact.sectionTitle')}</h2>
            <p className="mb-8 text-white">
              {t('coaching.contact.intro')}
            </p>
            
            <div className="bg-theme-tangerine bg-opacity-20 p-6 rounded-lg border border-theme-tangerine border-opacity-30 mb-8">
              <h4 className="font-semibold mb-3 text-white">{t('coaching.contact.locations.title')}</h4>
              <p className="mb-2 text-white">{t('coaching.contact.locations.intro')}</p>
              <ul className="space-y-2 text-white">
                {(t('coaching.contact.locations.places', { returnObjects: true }) as string[]).map((place: string, index: number) => (
                  <li key={index}>• {place}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:w-3/5 scroll-fade-in">
            <ApplicationForm />
          </div>
        </div>

        {/* Single Google Calendar CTA under the form */}
        <div className="text-center mt-16 scroll-fade-in">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white max-w-4xl mx-auto">
            {t('coaching.contact.finalCta.title')}
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('coaching.contact.finalCta.note')}
          </p>
          <a 
            href="https://calendar.app.google/LU6UdzQr53kmsKjc6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-theme-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-theme-darknavy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{
              backgroundColor: '#1E3A8A',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}
          >
            {t('coaching.contact.finalCta.button')}
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoachingContact;
