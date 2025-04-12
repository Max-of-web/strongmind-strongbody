
import React from 'react';
import CTAButton from './CTAButton';

interface CTABannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const CTABanner: React.FC<CTABannerProps> = ({ message, buttonText, buttonLink }) => {
  return (
    <section className="py-12 bg-theme-navy dark:bg-theme-darknavy text-white">
      <div className="container-width px-4 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
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
