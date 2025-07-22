
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, image }) => {
  return (
    <div className="bg-[#111111] border border-gray-700 shadow-md rounded-lg p-6 transition-all duration-300 hover:translate-y-[-5px] h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Quote 
            className="w-8 h-8 text-theme-tangerine" 
            aria-hidden="true"
          />
        </div>
        <p className="flex-grow mb-4 italic font-medium text-white">
          "{quote}"
        </p>
        <div className="flex items-center mt-auto">
          {image && (
            <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-gray-600">
              <img 
                src={image} 
                alt={`${name}'s portrait`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <span className="font-semibold text-white">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
