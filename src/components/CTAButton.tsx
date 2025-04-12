
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
  isWhatsApp?: boolean;
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
  isWhatsApp = false,
}) => {
  const { theme } = useTheme();

  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold transition-all duration-300 text-base';
  
  const primaryClasses =
    'bg-theme-tangerine text-white hover:bg-theme-lighttangerine shadow-md';

  const secondaryClasses =
    theme === 'dark'
      ? 'bg-transparent text-white border-2 border-white hover:bg-white/10'
      : 'bg-transparent text-theme-navy border-2 border-theme-navy hover:bg-theme-navy/10';

  const whatsAppClasses = 'bg-[#25D366] text-white border-none hover:bg-[#128C7E] shadow-md';

  const finalClasses = `${baseClasses} ${isWhatsApp ? whatsAppClasses : (secondary ? secondaryClasses : primaryClasses)} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;

  // External Link
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={finalClasses}
      >
        {children}
      </a>
    );
  }

  // Internal Link
  if (href && !disabled) {
    return (
      <Link to={href} onClick={onClick} className={finalClasses}>
        {children}
      </Link>
    );
  }

  // Button
  return (
    <button type={type} onClick={onClick} className={finalClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default CTAButton;
