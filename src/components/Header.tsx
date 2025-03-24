
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled ? 'bg-coach-navy bg-opacity-95 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-width flex justify-between items-center px-4 md:px-8">
        <Link 
          to="/" 
          className="text-coach-light font-display text-xl md:text-2xl font-bold hover:text-opacity-80 transition-all"
        >
          Paulius<span className="text-coach-accent">Lipskis</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-coach-light hover:text-coach-accent transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/coaching" 
            className="text-coach-light hover:text-coach-accent transition-colors"
          >
            1-on-1 Coaching
          </Link>
          <Link 
            to="/#about" 
            className="text-coach-light hover:text-coach-accent transition-colors"
          >
            About
          </Link>
          <a 
            href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button-primary"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-coach-light"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-coach-navy bg-opacity-95 absolute top-full left-0 right-0 py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-coach-light hover:text-coach-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/coaching" 
              className="text-coach-light hover:text-coach-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              1-on-1 Coaching
            </Link>
            <Link 
              to="/#about" 
              className="text-coach-light hover:text-coach-accent transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a 
              href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button-primary text-center"
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
