
import React, { useEffect } from 'react';
import { Quote } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface TestimonialCardProps {
  quote: string;
  name: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, image }) => {
  const { theme } = useTheme();

  // Set up CSS variables for theming
  useEffect(() => {
    const root = document.documentElement;
    
    // Set light mode variables
    root.style.setProperty('--card-bg', 'white');
    root.style.setProperty('--card-text', '#1e293b');
    root.style.setProperty('--card-border', '#e2e8f0');
    root.style.setProperty('--accent-color', '#f97316');
    root.style.setProperty('--text-color', '#334155');
    root.style.setProperty('--heading-color', '#1e293b');
    root.style.setProperty('--border-color', '#e2e8f0');
    
    // Adjust for dark mode
    if (theme === 'dark') {
      root.style.setProperty('--card-bg', '#1e293b');
      root.style.setProperty('--card-text', '#f8fafc');
      root.style.setProperty('--card-border', '#334155');
      root.style.setProperty('--accent-color', '#fb923c');
      root.style.setProperty('--text-color', '#e2e8f0');
      root.style.setProperty('--heading-color', '#f8fafc');
      root.style.setProperty('--border-color', '#334155');
    }
  }, [theme]);

  const cardStyle = { 
    backgroundColor: 'var(--card-bg, white)',
    color: 'var(--card-text, #1e293b)',
    borderColor: 'var(--card-border, #e2e8f0)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  };

  const quoteIconStyle = { 
    color: 'var(--accent-color, #f97316)' 
  };

  const quoteTextStyle = { 
    color: 'var(--text-color, #334155)' 
  };

  const borderStyle = { 
    borderColor: 'var(--border-color, #e2e8f0)' 
  };

  const nameStyle = { 
    color: 'var(--heading-color, #1e293b)' 
  };

  return (
    <div 
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg p-6 transition-all duration-300 hover:translate-y-[-5px] h-full"
      style={cardStyle}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Quote 
            className="w-8 h-8" 
            style={quoteIconStyle}
            aria-hidden="true"
          />
        </div>
        <p 
          className="flex-grow mb-4 italic font-medium"
          style={quoteTextStyle}
        >
          "{quote}"
        </p>
        <div className="flex items-center mt-auto">
          {image && (
            <div 
              className="w-12 h-12 rounded-full overflow-hidden mr-3 border"
              style={borderStyle}
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
            style={nameStyle}
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
