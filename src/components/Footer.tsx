
import React from 'react';
import { MessageSquare, MapPin, Home, User, Instagram, Youtube } from 'lucide-react';
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
            <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.contact')}</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MessageSquare size={20} className="text-theme-tangerine mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <a 
                    href="https://wa.me/37067951040" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-theme-tangerine transition-colors duration-200 font-medium"
                  >
                    {t('footer.whatsAppChat')}
                  </a>
                  <p className="text-sm text-gray-300 mt-1">
                    {t('footer.whatsAppNote')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Instagram size={20} className="text-theme-tangerine mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <a 
                    href="https://www.instagram.com/paulius_physio?igsh=dXd1bWFiajZwN293" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-theme-tangerine transition-colors duration-200 font-medium"
                  >
                    @paulius_physio
                  </a>
                  <p className="text-sm text-gray-300 mt-1">
                    {t('footer.instagramNote')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Youtube size={20} className="text-theme-tangerine mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <a 
                    href="https://youtube.com/playlist?list=PL9FEczFkBjTeQt3GXlvoKfNygvTiZ-qkb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-theme-tangerine transition-colors duration-200 font-medium"
                  >
                    YouTube treniruotės
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.locations')}</h3>
            <div className="space-y-4">
              <a 
                href="https://maps.app.goo.gl/23ZNRSt67dN6G9o36"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-theme-tangerine transition-colors duration-200 group"
              >
                <MapPin size={20} className="text-theme-tangerine mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-white group-hover:text-theme-tangerine font-medium">
                    {t('footer.location1')}
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.quickLinks')}</h3>
            <div className="space-y-4">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-3 text-white hover:text-theme-tangerine transition-colors duration-200 group"
              >
                <Home size={20} className="text-theme-tangerine flex-shrink-0" />
                <span className="group-hover:text-theme-tangerine font-medium">{t('footer.home')}</span>
              </button>
              <Link 
                to="/coaching" 
                className="flex items-center space-x-3 text-white hover:text-theme-tangerine transition-colors duration-200 group"
              >
                <User size={20} className="text-theme-tangerine flex-shrink-0" />
                <span className="group-hover:text-theme-tangerine font-medium">{t('footer.training')}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 Paulius Lipskis. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
