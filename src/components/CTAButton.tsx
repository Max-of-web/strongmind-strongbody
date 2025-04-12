
import React, { useEffect } from 'react';
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

  // Create CSS variables for theming
  useEffect(() => {
    const root = document.documentElement;
    
    // Set base variables
    root.style.setProperty('--primary-btn-bg', '#f97316');
    root.style.setProperty('--primary-btn-text', 'white');
    root.style.setProperty('--primary-btn-hover-bg', '#fb923c');
    root.style.setProperty('--secondary-btn-bg', 'transparent');
    root.style.setProperty('--secondary-btn-text', '#1e293b');
    root.style.setProperty('--secondary-btn-border', '#1e293b');
    root.style.setProperty('--secondary-btn-hover-bg', '#f97316');
    root.style.setProperty('--secondary-btn-hover-border', '#f97316');
    root.style.setProperty('--secondary-btn-hover-text', 'white');
    
    // Adjust for dark mode
    if (theme === 'dark') {
      root.style.setProperty('--secondary-btn-text', 'white');
      root.style.setProperty('--secondary-btn-border', 'white');
    }
  }, [theme]);

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
    </button>
  );
};

export default CTAButton;
