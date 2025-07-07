
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';

const FinalCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container-width px-4 text-center">
        {/* Main encouraging message with improved styling */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-white max-w-4xl mx-auto leading-relaxed font-sans">
          {t('homepage.cta.finalMessage')}
        </h3>
        
        {/* Payment note - smaller and lighter */}
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('homepage.cta.finalPaymentNote')}
        </p>
        
        {/* Strong CTA Button */}
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
          {t('homepage.cta.finalButtonText')}
          <ExternalLink size={20} />
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
