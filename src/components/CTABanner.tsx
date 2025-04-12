
import React from 'react';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ message, buttonText, buttonLink }) => {
  return (
    <section className="py-12 bg-elegant-charcoal dark:bg-theme-navy">
      <div className="container-width px-4 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground dark:text-white">
          {message}
        </h3>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-theme-tangerine text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-theme-lighttangerine hover:translate-y-[-2px] shadow-md"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
