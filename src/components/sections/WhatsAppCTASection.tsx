
import { useTranslation } from 'react-i18next';
import { MessageSquare, ExternalLink } from 'lucide-react';

const WhatsAppCTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-[#25D366] text-white">
      <div className="container-width px-4 text-center">
        <div className="flex items-center justify-center mb-3">
          <MessageSquare size={28} className="mr-3" />
          <h3 className="text-lg md:text-xl font-semibold">
            {t('homepage.cta.whatsappMessage')}
          </h3>
        </div>
        <p className="text-sm mb-6 opacity-90 max-w-md mx-auto">
          {t('homepage.cta.whatsappNote')}
        </p>
        <a 
          href="https://wa.me/37067951040"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <MessageSquare size={20} />
          WhatsApp
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default WhatsAppCTASection;
