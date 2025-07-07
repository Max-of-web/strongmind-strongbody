
import React from 'react';
import { MessageSquare, Phone, MapPin, Home, User } from 'lucide-react';
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
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-theme-tangerine" />
                <a href="tel:+37067951040" className="hover:text-theme-tangerine transition-colors">
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center">
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
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('footer.locations')}</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 text-theme-tangerine mt-0.5 shrink-0" />
                <span>{t('footer.location1')}</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-3 text-theme-tangerine mt-0.5 shrink-0" />
                <span>{t('footer.location2')}</span>
              </div>
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
