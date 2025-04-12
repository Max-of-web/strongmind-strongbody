
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, image }) => {
  return (
    <div className="card-hover bg-white dark:bg-theme-darknavy border border-slate-200 dark:border-theme-lightnavy/30 shadow-md rounded-lg p-6 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg 
            className="w-8 h-8 text-theme-tangerine" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="flex-grow mb-4 italic text-theme-darknavy dark:text-white font-medium">"{quote}"</p>
        <div className="flex items-center mt-auto">
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-slate-200 dark:border-theme-lightnavy/30">
              <img 
                src={image} 
                alt={`${name}'s portrait`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <span className="font-semibold text-theme-darknavy dark:text-white">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
