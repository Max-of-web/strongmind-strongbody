
import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-navy dark:bg-theme-darknavy py-12 px-4 text-theme-textlight">
      <div className="container-width">
        {/* CTA Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            {t('footer.cta')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a 
              href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button-primary"
            >
              {t('footer.bookCall')}
            </a>
            <a 
              href="https://wa.me/37067951040" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button-secondary"
            >
              {t('footer.messageWhatsApp')}
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-theme-tangerine dark:text-theme-darktangerine" />
                <a href="tel:+37067951040" className="hover:text-theme-tangerine dark:hover:text-theme-darktangerine transition-colors">
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare size={18} className="text-theme-tangerine dark:text-theme-darktangerine" />
                <a 
                  href="https://wa.me/37067951040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-theme-tangerine dark:hover:text-theme-darktangerine transition-colors"
                >
                  {t('footer.whatsAppChat')}
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('footer.locations')}</h4>
            <ul className="space-y-2">
              <li>{t('footer.location1')}</li>
              <li>{t('footer.location2')}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-theme-tangerine dark:hover:text-theme-darktangerine transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/coaching" className="hover:text-theme-tangerine dark:hover:text-theme-darktangerine transition-colors">
                  {t('footer.coaching')}
                </Link>
              </li>
              <li>
                <a 
                  href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-theme-tangerine dark:hover:text-theme-darktangerine transition-colors"
                >
                  {t('footer.bookCall')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-600 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Paulius Lipskis. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
