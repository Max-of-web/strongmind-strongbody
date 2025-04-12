
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
  // Define completely new base styles with explicit dark mode handling
  const baseStyles = secondary
    ? "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-300 bg-transparent border border-theme-marine dark:border-white text-theme-navy dark:text-white hover:bg-theme-tangerine hover:border-theme-tangerine dark:hover:bg-theme-tangerine hover:text-white dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
    : "inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-300 bg-theme-tangerine text-white shadow-md hover:bg-theme-lighttangerine dark:hover:bg-theme-tangerine/90 hover:transform hover:-translate-y-1 disabled:opacity-50 disabled:pointer-events-none";

  const styles = `${baseStyles} ${className}`;

  // Handle external links
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  // Handle internal links
  if (href && !disabled) {
    return (
      <Link to={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Handle buttons
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CTAButton;
