
import React from 'react';
import { Calendar, CalendarClock, MessageSquare, Zap } from 'lucide-react';

interface BookingButtonProps {
  onClick: () => void;
  buttonText: string;
  packageType: 'starter' | 'additionalSession' | 'monthly' | 'transformation';
}

const BookingButton: React.FC<BookingButtonProps> = ({ 
  onClick, 
  buttonText,
  packageType
}) => {
  // Custom button styles - completely independent of any existing styles
  const bookingButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    backgroundColor: '#0A2342', // Navy blue - always dark
    color: '#FFFFFF',           // White text - always light
    fontWeight: '600',
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    border: 'none',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'all 300ms ease'
  };
  
  // Select icon based on package type
  const getIcon = () => {
    switch (packageType) {
      case 'starter':
        return <Calendar size={18} />;
      case 'additionalSession':
        return <CalendarClock size={18} />;
      case 'monthly':
        return <MessageSquare size={18} />;
      case 'transformation':
        return <Zap size={18} />;
      default:
        return <Calendar size={18} />;
    }
  };

  return (
    <button 
      onClick={onClick}
      style={bookingButtonStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#375177'; // Lighter navy for hover
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#0A2342'; // Back to navy
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      }}
    >
      {getIcon()}
      <span>{buttonText}</span>
    </button>
  );
};

export default BookingButton;
