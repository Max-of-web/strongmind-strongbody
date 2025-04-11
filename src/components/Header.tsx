
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

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
        isScrolled ? 'bg-theme-navy bg-opacity-95 dark:bg-theme-darknavy dark:bg-opacity-95 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-width flex justify-between items-center px-4 md:px-8">
        <Link 
          to="/" 
          className="text-theme-textlight font-display text-xl md:text-2xl font-bold hover:text-opacity-80 transition-all"
        >
          Paulius<span className="text-theme-tangerine dark:text-theme-darktangerine">Lipskis</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-8 mr-4">
            <Link 
              to="/" 
              className="text-theme-textlight hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors"
            >
              {t('header.home')}
            </Link>
            <Link 
              to="/coaching" 
              className="text-theme-textlight hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors"
            >
              {t('header.coaching')}
            </Link>
            <Link 
              to="/#about" 
              className="text-theme-textlight hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors"
            >
              {t('header.about')}
            </Link>
            <Link 
              to="/admin" 
              className="text-theme-textlight hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors flex items-center"
            >
              <Settings size={16} className="mr-1" />
              Admin
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a 
              href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button-primary"
            >
              {t('header.bookCall')}
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <button 
            className="text-theme-textlight"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-theme-navy dark:bg-theme-darknavy bg-opacity-95 absolute top-full left-0 right-0 py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-theme-textlight hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.home')}
            </Link>
            <Link 
              to="/coaching" 
              className="text-theme-textlight hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.coaching')}
            </Link>
            <Link 
              to="/#about" 
              className="text-theme-textlight hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.about')}
            </Link>
            <Link 
              to="/admin" 
              className="text-theme-textlight hover:text-theme-tangerine dark:hover:text-theme-lighttangerine transition-colors py-2 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings size={16} className="mr-1" />
              Admin
            </Link>
            <a 
              href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button-primary text-center"
            >
              {t('header.bookCall')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
