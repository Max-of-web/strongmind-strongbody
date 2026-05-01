
import { useTranslation } from 'react-i18next';
import { ExternalLink, MessageSquare } from 'lucide-react';

const FinalCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 text-white" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container-width px-4 text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 text-white max-w-4xl mx-auto leading-relaxed">
          {t('homepage.cta.finalMessage')}
        </h3>
        <p className="text-base text-gray-300 mb-7 max-w-2xl mx-auto">
          {t('homepage.cta.finalPaymentNote')}
        </p>
        <a
          href="https://calendar.app.google/LU6UdzQr53kmsKjc6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-theme-navy text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-theme-darknavy transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ backgroundColor: '#1E3A8A' }}
        >
          {t('homepage.cta.finalButtonText')}
          <ExternalLink size={20} />
        </a>
        <div className="mt-6">
          <a
            href="https://wa.me/37067951040"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
          >
            <MessageSquare size={16} />
            {t('homepage.cta.whatsappLink')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
