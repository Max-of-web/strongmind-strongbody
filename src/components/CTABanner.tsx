
import React from 'react';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ message, buttonText, buttonLink }) => {
  return (
    <section className="py-12 bg-coach-sage">
      <div className="container-width px-4 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-coach-light">
          {message}
        </h3>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-coach-accent text-coach-charcoal font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-md"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTABanner;
