
import React from 'react';
import { MessageSquare, MapPin, Home, User, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTAButton from './CTAButton';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-theme-navy dark:bg-theme-darknavy text-white">
      <div className="container-width px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-1">
                  <MessageSquare size={18} className="mr-3 text-theme-tangerine" />
                  <a 
                    href="https://wa.me/37067951040" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-theme-tangerine transition-colors"
                  >
                    {t('footer.whatsAppChat')}
                  </a>
                </div>
                <p className="text-sm text-gray-300 ml-9">
                  {t('footer.whatsAppNote')}
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-1">
                  <Instagram size={18} className="mr-3 text-theme-tangerine" />
                  <a 
                    href="https://www.instagram.com/paulius_physio?igsh=dXd1bWFiajZwN293" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-theme-tangerine transition-colors"
                  >
                    @paulius_physio
                  </a>
                </div>
                <p className="text-sm text-gray-300 ml-9">
                  {t('footer.instagramNote')}
                </p>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.locations')}</h3>
            <div className="space-y-2">
              <a 
                href="https://maps.app.goo.gl/23ZNRSt67dN6G9o36"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-theme-tangerine transition-colors"
              >
                <MapPin size={18} className="mr-3 text-theme-tangerine mt-0.5 shrink-0" />
                <div>
                  <div>{t('footer.location1')}</div>
                  <div>{t('footer.location2')}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              <Link to="/" className="flex items-center hover:text-theme-tangerine transition-colors">
                <Home size={18} className="mr-3" />
                {t('footer.home')}
              </Link>
              <Link to="/coaching" className="flex items-center hover:text-theme-tangerine transition-colors">
                <User size={18} className="mr-3" />
                {t('footer.coaching')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 Paulius Lipskis. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
