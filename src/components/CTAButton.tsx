
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
  navyBg?: boolean;
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
  navyBg = false,
}) => {
  const { theme } = useTheme();

  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-md font-bold transition-all duration-300 text-base';
  
  const primaryClasses =
    'bg-theme-gold text-black hover:bg-theme-darkgold shadow-md';

  const secondaryClasses =
    'bg-transparent text-white border-2 border-theme-gold hover:bg-theme-gold hover:text-black';

  const whatsAppClasses = 'bg-[#25D366] text-white border-none hover:bg-[#128C7E] shadow-md';
  
  const navyBgClasses = 'bg-[#0A2342] text-white border-none hover:bg-[#375177] shadow-md';

  const finalClasses = `${baseClasses} ${
    isWhatsApp 
      ? whatsAppClasses 
      : navyBg 
        ? navyBgClasses 
        : (secondary ? secondaryClasses : primaryClasses)
  } ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`;

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
