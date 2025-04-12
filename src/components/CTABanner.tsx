import React from 'react';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ message, buttonText, buttonLink }) => {
  return (
    <section className="py-12 bg-elegant-charcoal text-white dark:bg-theme-navy">
      <div className="container-width px-4 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          {message}
        </h3>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button-primary"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
