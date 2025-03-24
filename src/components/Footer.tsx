
import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-elegant-charcoal py-12 px-4">
      <div className="container-width">
        {/* CTA Section */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            I want to help you feel strong, capable, and connected to your body.
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a 
              href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button-primary"
            >
              Book a Discovery Call
            </a>
            <a 
              href="https://wa.me/37067951040" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button-secondary"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-elegant-gold" />
                <a href="tel:+37067951040" className="hover:text-elegant-gold transition-colors">
                  +370 6795 1040
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare size={18} className="text-elegant-gold" />
                <a 
                  href="https://wa.me/37067951040" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-elegant-gold transition-colors"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Training Locations</h4>
            <ul className="space-y-2">
              <li>Reformatas Gym, Vilnius</li>
              <li>SEB Arena, Vilnius</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-elegant-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/coaching" className="hover:text-elegant-gold transition-colors">
                  1-on-1 Coaching
                </Link>
              </li>
              <li>
                <a 
                  href="https://calendly.com/lipskis-paulius/asmenine-treniruote" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-elegant-gold transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-600 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Paulius Lipskis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
