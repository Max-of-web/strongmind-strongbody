
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBookCallClick = () => {
    // If we're already on the coaching page, scroll to contact section
    if (location.pathname === '/coaching') {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If we're on another page, navigation will be handled by Link component
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black bg-opacity-95 shadow-md py-2 md:py-3' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container-width flex justify-between items-center px-4 md:px-8">
        <Link 
          to="/#about" 
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            } else {
              // If not on home page, navigate there first
              window.location.href = '/#about';
            }
          }}
          className="text-theme-gold bg-gradient-to-r from-theme-gold to-theme-tangerine bg-clip-text font-display text-lg md:text-xl lg:text-2xl font-bold hover:text-transparent hover:from-theme-tangerine hover:to-theme-gold transition-all duration-300 z-10"
        >
          Paulius<span className="text-theme-gold text-lg md:text-xl lg:text-2xl font-bold">Lipskis</span>
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
            {location.pathname === '/coaching' ? (
              <Button 
                onClick={handleBookCallClick}
                variant="cta"
              >
                {t('header.bookCall')}
              </Button>
            ) : (
              <Link to="/coaching#contact-section">
                <Button variant="cta">
                  {t('header.bookCall')}
                </Button>
              </Link>
            )}
          </div>
        </nav>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center space-x-3 z-10">
          <LanguageSwitcher />
          <button 
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 right-0 py-4 px-4 shadow-md animate-fade-in z-40">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/"
              className="text-white hover:text-theme-gold transition-colors py-2 text-lg" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.home')}
            </Link>
            <Link 
              to="/coaching" 
              className="text-white hover:text-theme-gold transition-colors py-2 text-lg" 
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.coaching')}
            </Link>
            {location.pathname === '/coaching' ? (
              <button 
                className="w-full justify-center mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleBookCallClick();
                }}
              >
                {t('header.bookCall')}
              </button>
            ) : (
              <Link 
                to="/coaching#contact-section"
                className="w-full justify-center mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 to-yellow-500 rounded-lg shadow-lg hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.bookCall')}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
