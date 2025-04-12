
import React, { useEffect } from 'react';
import CTAButton from './CTAButton';
import { useTheme } from '@/hooks/useTheme';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ message, buttonText, buttonLink }) => {
  const { theme } = useTheme();

  // Define styles using CSS variables via a style object
  useEffect(() => {
    // Add CSS variables to document root if not already present
    const root = document.documentElement;
    if (!root.style.getPropertyValue('--banner-bg')) {
      root.style.setProperty('--banner-bg', '#1e293b');
      root.style.setProperty('--banner-text', 'white');
      root.style.setProperty('--banner-heading', 'white');
    }

    // Add dark mode specific variables
    const handleChange = () => {
      if (document.documentElement.classList.contains('dark')) {
        root.style.setProperty('--banner-bg', '#0f172a');
      } else {
        root.style.setProperty('--banner-bg', '#1e293b');
      }
    };

    // Initialize
    handleChange();

    // Listen for theme changes
    document.addEventListener('themeChange', handleChange);
    
    return () => {
      document.removeEventListener('themeChange', handleChange);
    };
  }, []);

  const bannerStyle: React.CSSProperties = {
    backgroundColor: 'var(--banner-bg, #1e293b)',
    color: 'var(--banner-text, white)'
  };

  const headingStyle: React.CSSProperties = {
    color: 'var(--banner-heading, white)'
  };

  return (
    <section 
      className="py-12 bg-theme-navy dark:bg-theme-darknavy text-white"
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
