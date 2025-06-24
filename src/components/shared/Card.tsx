import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-lg bg-[#F8F9FA] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card; 