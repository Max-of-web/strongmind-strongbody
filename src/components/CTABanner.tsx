
import React from 'react';
import CTAButton from './CTAButton';
import { useTheme } from '@/hooks/useTheme';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ message, buttonText, buttonLink }) => {
  const { theme } = useTheme();
  
  // Define banner styles with guaranteed contrast for both modes
  const bannerStyle = {
    backgroundColor: '#061528', // Dark navy (works in both modes)
    color: '#FFFFFF', // White text for maximum contrast
    padding: '3rem 1rem',
  };

  const headingStyle = {
    color: '#FFFFFF', // White text for maximum contrast
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
  };

  return (
    <section 
      className="py-12 text-white"
      style={bannerStyle}
    >
      <div className="container-width px-4 text-center">
        <h3 
          className="text-xl md:text-2xl font-semibold mb-6"
          style={headingStyle}
        >
          {message}
        </h3>
        <CTAButton href={buttonLink} external>
          {buttonText}
        </CTAButton>
      </div>
    </section>
  );
};

export default CTABanner;
