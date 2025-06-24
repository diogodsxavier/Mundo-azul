import React from 'react';

interface ProgressBarProps {
  percentage: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, className = '' }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 ${className}`}>
      <div
        className="bg-[#4FD1C5] h-4 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar; 