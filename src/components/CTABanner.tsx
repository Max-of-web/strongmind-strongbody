
import React from 'react';
import CTAButton from './CTAButton';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ message, buttonText, buttonLink }) => {
  return (
    <section 
      className="py-12 bg-theme-navy dark:bg-theme-darknavy text-white"
      style={{
        backgroundColor: 'var(--banner-bg, #1e293b)',
        color: 'var(--banner-text, white)'
      }}
    >
      <div className="container-width px-4 text-center">
        <h3 
          className="text-xl md:text-2xl font-semibold mb-6"
          style={{ color: 'var(--banner-heading, white)' }}
        >
          {message}
        </h3>
        <CTAButton href={buttonLink} external>
          {buttonText}
        </CTAButton>
      </div>

      {/* Add CSS variables for theming */}
      <style jsx>{`
        :root {
          --banner-bg: #1e293b;
          --banner-text: white;
          --banner-heading: white;
        }
        
        .dark {
          --banner-bg: #0f172a;
          --banner-text: white;
          --banner-heading: white;
        }
      `}</style>
    </section>
  );
};

export default CTABanner;
