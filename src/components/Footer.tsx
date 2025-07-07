
import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';
import { useTheme } from '@/hooks/useTheme';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="py-12 px-4 text-white" style={{ 
      backgroundColor: '#000000',  // Pure black background
      color: 'white' 
    }}>
      <div className="container-width">
        {/* CTA Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">
            {t('footer.cta')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <CTAButton 
              href="https://calendar.app.google/LU6UdzQr53kmsKjc6" 
              external={true}
            >
              {t('footer.bookCall')}
            </CTAButton>
            <CTAButton 
              href="https://wa.me/37067951040" 
              external={true}
              secondary={true}
              isWhatsApp={true}
            >
              {t('footer.messageWhatsApp')}
            </CTAButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} style={{ color: '#D4AF37' }} />
                <a href="tel:+37067951040" style={{ 
                  color: 'white',
                  transition: 'color 150ms',
                }}>
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare size={18} style={{ color: '#25D366' }} />
                <a 
                  href="https://wa.me/37067951040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#25D366',
                    transition: 'color 150ms',
                  }}
                >
                  {t('footer.whatsAppChat')}
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              {t('footer.locations')}
            </h4>
            <ul className="space-y-2 text-white">
              <li>{t('footer.location1')}</li>
              <li>{t('footer.location2')}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" style={{ 
                  color: 'white',
                  transition: 'color 150ms',
                }}>
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/coaching" style={{ 
                  color: 'white',
                  transition: 'color 150ms',
                }}>
                  {t('footer.coaching')}
                </Link>
              </li>
              <li>
                <a 
                  href="https://calendar.app.google/LU6UdzQr53kmsKjc6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'white',
                    transition: 'color 150ms',
                  }}
                >
                  {t('footer.bookCall')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-600 text-center text-sm text-white">
          <p>© {currentYear} Paulius Lipskis. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
