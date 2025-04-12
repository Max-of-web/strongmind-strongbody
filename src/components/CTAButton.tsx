
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
  // Define inline styles based on props
  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontWeight: '600',
    transition: 'all 300ms',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? '0.5' : '1',
    backgroundColor: secondary ? 'transparent' : 'var(--primary-btn-bg, #f97316)',
    color: secondary ? 'var(--secondary-btn-text, #1e293b)' : 'var(--primary-btn-text, white)',
    border: secondary ? '1px solid var(--secondary-btn-border, #1e293b)' : 'none',
    boxShadow: secondary ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  };

  // Define hover styles to be applied with JavaScript
  const applyHoverStyles = (e: React.MouseEvent) => {
    if (disabled) return;
    
    const target = e.currentTarget as HTMLElement;
    if (secondary) {
      target.style.backgroundColor = 'var(--secondary-btn-hover-bg, #f97316)';
      target.style.borderColor = 'var(--secondary-btn-hover-border, #f97316)';
      target.style.color = 'var(--secondary-btn-hover-text, white)';
    } else {
      target.style.backgroundColor = 'var(--primary-btn-hover-bg, #fb923c)';
      target.style.transform = 'translateY(-2px)';
    }
  };

  // Define leave styles to revert hover effects
  const removeHoverStyles = (e: React.MouseEvent) => {
    if (disabled) return;
    
    const target = e.currentTarget as HTMLElement;
    if (secondary) {
      target.style.backgroundColor = 'transparent';
      target.style.borderColor = 'var(--secondary-btn-border, #1e293b)';
      target.style.color = 'var(--secondary-btn-text, #1e293b)';
    } else {
      target.style.backgroundColor = 'var(--primary-btn-bg, #f97316)';
      target.style.transform = 'translateY(0)';
    }
  };

  // Handle external links
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        aria-disabled={disabled}
        style={buttonStyle}
        onMouseEnter={applyHoverStyles}
        onMouseLeave={removeHoverStyles}
      >
        {children}
      </a>
    );
  }

  // Handle internal links
  if (href && !disabled) {
    return (
      <Link 
        to={href} 
        className={className}
        onClick={onClick}
        style={buttonStyle}
        onMouseEnter={applyHoverStyles}
        onMouseLeave={removeHoverStyles}
      >
        {children}
      </Link>
    );
  }

  // Handle buttons
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      onMouseEnter={applyHoverStyles}
      onMouseLeave={removeHoverStyles}
    >
      {children}

      {/* Add CSS variables for theming */}
      <style jsx>{`
        :root {
          --primary-btn-bg: #f97316;
          --primary-btn-text: white;
          --primary-btn-hover-bg: #fb923c;
          --secondary-btn-bg: transparent;
          --secondary-btn-text: #1e293b;
          --secondary-btn-border: #1e293b;
          --secondary-btn-hover-bg: #f97316;
          --secondary-btn-hover-border: #f97316;
          --secondary-btn-hover-text: white;
        }
        
        .dark {
          --primary-btn-bg: #f97316;
          --primary-btn-text: white;
          --primary-btn-hover-bg: #fb923c;
          --secondary-btn-bg: transparent;
          --secondary-btn-text: white;
          --secondary-btn-border: white;
          --secondary-btn-hover-bg: #f97316;
          --secondary-btn-hover-border: #f97316;
          --secondary-btn-hover-text: white;
        }
      `}</style>
    </button>
  );
};

export default CTAButton;
