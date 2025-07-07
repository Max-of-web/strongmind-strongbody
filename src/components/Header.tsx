
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-95 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-width flex justify-between items-center px-4 md:px-8">
        <Link 
          to="/" 
          className="text-white font-display text-xl md:text-2xl font-bold hover:text-opacity-80 transition-all"
        >
          Paulius<span className="text-theme-gold text-2xl font-bold">Lipskis</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-8 mr-4">
            <Link 
              to="/" 
              className="text-white hover:text-theme-gold transition-colors"
            >
              {t('header.home')}
            </Link>
            <Link 
              to="/coaching" 
              className="text-white hover:text-theme-gold transition-colors"
            >
              {t('header.coaching')}
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button 
              asChild
              variant="cta"
            >
              <a 
                href="https://calendar.app.google/LU6UdzQr53kmsKjc6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('header.bookCall')}
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <button 
            className="text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 right-0 py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-theme-gold transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.home')}
            </Link>
            <Link 
              to="/coaching" 
              className="text-white hover:text-theme-gold transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.coaching')}
            </Link>
            <Button 
              asChild
              variant="cta"
              className="w-full justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <a 
                href="https://calendar.app.google/LU6UdzQr53kmsKjc6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('header.bookCall')}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
