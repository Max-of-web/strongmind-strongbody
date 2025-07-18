
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ message, buttonText, buttonLink }) => {
  // Fixed banner style with dark background
  const bannerStyle = {
    backgroundColor: '#0A0A0A',  // Near black background
    color: '#FFFFFF', // White text for maximum contrast
    padding: '3rem 1rem',
  };

  // Button style with deep blue colors
  const buttonStyle = {
    backgroundColor: '#1E3A8A', // Deep blue
    color: '#FFFFFF', // White text
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 300ms ease',
  };

  return (
    <section className="py-12 text-white" style={bannerStyle}>
      <div className="container-width px-4 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white max-w-4xl mx-auto">
          {message}
        </h3>
        <a 
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1E40AF'; // Darker blue
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1E3A8A';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
        >
          {buttonText}
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
