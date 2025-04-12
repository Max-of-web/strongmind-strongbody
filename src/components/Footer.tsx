
import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';
import { useTheme } from '@/hooks/useTheme';
import { useEffect } from 'react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  // Set up footer-specific CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    // Set default color theme variables for footer
    root.style.setProperty('--footer-bg', '#061528');
    root.style.setProperty('--footer-text', 'white');
    root.style.setProperty('--footer-link', 'white');
    root.style.setProperty('--footer-link-hover', '#F7882F');
    root.style.setProperty('--footer-heading', 'white');
    root.style.setProperty('--footer-accent', '#F7882F');
  }, [theme]);

  return (
    <footer className="bg-theme-navy dark:bg-theme-darknavy py-12 px-4 text-theme-textlight" style={{ 
      backgroundColor: 'var(--footer-bg, #061528)',
      color: 'var(--footer-text, white)'
    }}>
      <div className="container-width">
        {/* CTA Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white" style={{ 
            color: 'var(--footer-heading, white)' 
          }}>
            {t('footer.cta')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <CTAButton 
              href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
              external={true}
            >
              {t('footer.bookCall')}
            </CTAButton>
            <CTAButton 
              href="https://wa.me/37067951040" 
              external={true}
              secondary={true}
            >
              {t('footer.messageWhatsApp')}
            </CTAButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white" style={{ 
              color: 'var(--footer-heading, white)' 
            }}>
              {t('footer.contact')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-theme-tangerine dark:text-theme-lighttangerine" style={{ 
                  color: 'var(--footer-accent, #F7882F)' 
                }} />
                <a href="tel:+37067951040" className="text-white hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors" style={{ 
                  color: 'var(--footer-link, white)',
                }}>
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare size={18} className="text-theme-tangerine dark:text-theme-lighttangerine" style={{ 
                  color: 'var(--footer-accent, #F7882F)' 
                }} />
                <a 
                  href="https://wa.me/37067951040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors"
                  style={{ 
                    color: 'var(--footer-link, white)',
                  }}
                >
                  {t('footer.whatsAppChat')}
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white" style={{ 
              color: 'var(--footer-heading, white)' 
            }}>
              {t('footer.locations')}
            </h4>
            <ul className="space-y-2 text-white" style={{ 
              color: 'var(--footer-text, white)' 
            }}>
              <li>{t('footer.location1')}</li>
              <li>{t('footer.location2')}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white" style={{ 
              color: 'var(--footer-heading, white)' 
            }}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors" style={{ 
                  color: 'var(--footer-link, white)',
                }}>
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/coaching" className="text-white hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors" style={{ 
                  color: 'var(--footer-link, white)',
                }}>
                  {t('footer.coaching')}
                </Link>
              </li>
              <li>
                <a 
                  href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors"
                  style={{ 
                    color: 'var(--footer-link, white)',
                  }}
                >
                  {t('footer.bookCall')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-600 text-center text-sm text-white" style={{ 
          color: 'var(--footer-text, white)' 
        }}>
          <p>© {currentYear} Paulius Lipskis. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
