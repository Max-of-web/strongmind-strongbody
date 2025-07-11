
import React from 'react';
import { Calendar, CalendarClock, MessageSquare, Zap, Users, Activity, Target } from 'lucide-react';

interface BookingButtonProps {
  onClick: () => void;
  buttonText: string;
  packageType: 'movementClarity' | 'bodyReset' | 'strongGrounded' | 'movementReset' | 'smallGroup' | 'innerShift' | string;
}

const BookingButton: React.FC<BookingButtonProps> = ({ 
  onClick, 
  buttonText,
  packageType
}) => {
  // Deep blue styling for booking buttons
  const bookingButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    backgroundColor: '#1E3A8A', // Deep blue background
    color: '#FFFFFF',           // White text
    fontWeight: 'bold',         // Bold font
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
      case 'movementClarity':
        return <Target size={18} />;
      case 'bodyReset':
        return <Activity size={18} />;
      case 'strongGrounded':
        return <Zap size={18} />;
      case 'movementReset':
        return <Calendar size={18} />;
      case 'smallGroup':
        return <Users size={18} />;
      case 'innerShift':
        return <MessageSquare size={18} />;
      default:
        return <Calendar size={18} />;
    }
  };

  return (
    <button 
      onClick={onClick}
      style={bookingButtonStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#1E40AF'; // Darker blue for hover
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#1E3A8A'; // Back to deep blue
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
