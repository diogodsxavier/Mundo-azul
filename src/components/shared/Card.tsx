import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`h-full flex flex-col p-6 rounded-xl shadow-lg bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card; 