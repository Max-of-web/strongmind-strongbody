
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, image }) => {
  return (
    <div 
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg p-6 transition-all duration-300 hover:translate-y-[-5px] h-full"
      style={{ 
        backgroundColor: 'var(--card-bg, white)',
        color: 'var(--card-text, #1e293b)',
        borderColor: 'var(--card-border, #e2e8f0)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Quote 
            className="w-8 h-8" 
            style={{ color: 'var(--accent-color, #f97316)' }}
            aria-hidden="true"
          />
        </div>
        <p 
          className="flex-grow mb-4 italic font-medium"
          style={{ color: 'var(--text-color, #334155)' }}
        >
          "{quote}"
        </p>
        <div className="flex items-center mt-auto">
          {image && (
            <div 
              className="w-12 h-12 rounded-full overflow-hidden mr-3 border"
              style={{ borderColor: 'var(--border-color, #e2e8f0)' }}
            >
              <img 
                src={image} 
                alt={`${name}'s portrait`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <span 
            className="font-semibold"
            style={{ color: 'var(--heading-color, #1e293b)' }}
          >
            {name}
          </span>
        </div>
      </div>

      {/* Add CSS variables for theming */}
      <style jsx>{`
        :root {
          --card-bg: white;
          --card-text: #1e293b;
          --card-border: #e2e8f0;
          --accent-color: #f97316;
          --text-color: #334155;
          --heading-color: #1e293b;
          --border-color: #e2e8f0;
        }
        
        .dark {
          --card-bg: #1e293b;
          --card-text: #f8fafc;
          --card-border: #334155;
          --accent-color: #fb923c;
          --text-color: #e2e8f0;
          --heading-color: #f8fafc;
          --border-color: #334155;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCard;
