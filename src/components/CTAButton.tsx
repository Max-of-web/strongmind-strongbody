
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  onClick,
  secondary = false,
  disabled = false,
  className = '',
  type = 'button',
  external = false,
}) => {
  const { theme } = useTheme();
  
  // Define base style classes
  const baseClasses = `
    inline-flex items-center justify-center 
    px-6 py-3 rounded-md font-semibold
    transition-all duration-300 ease-in-out
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;
  
  // Fixed high contrast styles that work in both modes
  const primaryStyles = {
    backgroundColor: '#F7882F', // Tangerine color - consistent in both modes
    color: '#FFFFFF', // White text for contrast
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(0)',
  };
  
  // Fixed high contrast secondary styles that work in both modes
  const secondaryStyles = {
    backgroundColor: 'transparent',
    color: theme === 'dark' ? '#FFFFFF' : '#0A2342', // White in dark, Navy in light
    border: `2px solid ${theme === 'dark' ? '#FFFFFF' : '#0A2342'}`, // White in dark, Navy in light
    boxShadow: 'none',
  };
  
  // Fixed hover styles with high contrast
  const primaryHoverStyles = {
    backgroundColor: '#F89F4F', // Lighter tangerine
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  };
  
  const secondaryHoverStyles = {
    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(10, 35, 66, 0.1)',
    color: theme === 'dark' ? '#FFFFFF' : '#0A2342',
    borderColor: theme === 'dark' ? '#FFFFFF' : '#0A2342',
  };
  
  // Choose the base style based on the secondary prop
  const baseStyle = secondary ? secondaryStyles : primaryStyles;
  
  // Create event handlers for hover effects
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    
    const target = e.currentTarget;
    const hoverStyles = secondary ? secondaryHoverStyles : primaryHoverStyles;
    
    Object.entries(hoverStyles).forEach(([key, value]) => {
      // @ts-ignore - dynamically setting style properties
      target.style[key] = value;
    });
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    
    const target = e.currentTarget;
    const defaultStyles = secondary ? secondaryStyles : primaryStyles;
    
    Object.entries(defaultStyles).forEach(([key, value]) => {
      // @ts-ignore - dynamically setting style properties
      target.style[key] = value;
    });
  };
  
  // External link rendering
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
        aria-disabled={disabled}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  // Internal link rendering
  if (href && !disabled) {
    return (
      <Link 
        to={href} 
        className={baseClasses}
        onClick={onClick}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  // Regular button rendering
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default CTAButton;
