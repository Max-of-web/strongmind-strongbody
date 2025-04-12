
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, image }) => {
  return (
    <div className="testimonial-card card-hover dark:bg-theme-darknavy dark:text-white">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg 
            className="w-8 h-8 text-theme-tangerine opacity-80" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="flex-grow mb-4 italic text-foreground dark:text-theme-text-medium-contrast">"{quote}"</p>
        <div className="flex items-center mt-auto">
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <span className="font-semibold text-foreground dark:text-theme-text-high-contrast">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
