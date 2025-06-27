
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navigation = [
    { name: t('header.home'), href: '/' },
    { name: 'Apie Mane', href: '/about' },
    { name: 'Programos', href: '/programs' },
    { name: t('header.coaching'), href: '/coaching' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-elegant-charcoal/95 backdrop-blur-sm border-b border-slate-700">
      <nav className="container-width px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white hover:text-theme-tangerine transition-colors">
            Paulius Lipskis
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-theme-tangerine'
                    : 'text-white hover:text-theme-tangerine'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <a
                href="https://calendly.com/lipskis-paulius/asmenine-treniruote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-theme-tangerine text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-theme-lighttangerine transition-colors"
              >
                {t('header.bookCall')}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-theme-tangerine transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-elegant-charcoal border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-theme-tangerine bg-slate-800'
                      : 'text-white hover:text-theme-tangerine hover:bg-slate-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://calendly.com/lipskis-paulius/asmenine-treniruote"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-4 bg-theme-tangerine text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-theme-lighttangerine transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.bookCall')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
