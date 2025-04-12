
import React from 'react';
import { Link } from 'react-router-dom';

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
  // Base styles that apply to all buttons
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 300ms ease',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
  };
  
  // Primary button styles (orange background, white text)
  const primaryStyle = {
    ...baseStyle,
    backgroundColor: '#F7882F', // Tangerine - highly visible in both modes
    color: '#FFFFFF',
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };
  
  // Secondary button styles (transparent background, with border)
  const secondaryStyle = {
    ...baseStyle,
    backgroundColor: 'transparent',
    color: document.documentElement.classList.contains('dark') ? '#FFFFFF' : '#0A2342', // White in dark, Navy in light
    border: `2px solid ${document.documentElement.classList.contains('dark') ? '#FFFFFF' : '#0A2342'}`, // White in dark, Navy in light
    boxShadow: 'none',
  };
  
  // Select the appropriate style based on the secondary prop
  const buttonStyle = secondary ? secondaryStyle : primaryStyle;
  
  // External link rendering
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        style={buttonStyle}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = secondary 
              ? (document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.2)' : 'rgba(10, 35, 66, 0.1)') 
              : '#F89F4F'; // Lighter orange
            
            if (secondary) {
              e.currentTarget.style.borderColor = document.documentElement.classList.contains('dark') ? '#FFFFFF' : '#0A2342';
            } else {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
            }
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = secondary ? 'transparent' : '#F7882F';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = secondary ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)';
          }
        }}
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
        className={className}
        onClick={onClick}
        style={buttonStyle}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = secondary 
              ? (document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.2)' : 'rgba(10, 35, 66, 0.1)') 
              : '#F89F4F'; // Lighter orange
            
            if (secondary) {
              e.currentTarget.style.borderColor = document.documentElement.classList.contains('dark') ? '#FFFFFF' : '#0A2342';
            } else {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
            }
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.currentTarget.style.backgroundColor = secondary ? 'transparent' : '#F7882F';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = secondary ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)';
          }
        }}
      >
        {children}
      </Link>
    );
  }

  // Regular button rendering
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = secondary 
            ? (document.documentElement.classList.contains('dark') ? 'rgba(255, 255, 255, 0.2)' : 'rgba(10, 35, 66, 0.1)') 
            : '#F89F4F'; // Lighter orange
          
          if (secondary) {
            e.currentTarget.style.borderColor = document.documentElement.classList.contains('dark') ? '#FFFFFF' : '#0A2342';
          } else {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = secondary ? 'transparent' : '#F7882F';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = secondary ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      {children}
    </button>
  );
};

export default CTAButton;
