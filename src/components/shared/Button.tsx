import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  className = '',
  disabled = false,
}) => {
  const baseClasses =
    'py-2 px-4 rounded-lg font-semibold transition-transform duration-200 hover:scale-105';

  const variantClasses =
    variant === 'primary'
      ? 'bg-[#4A90E2] text-white'
      : 'bg-transparent border-2 border-[#4A90E2] text-[#4A90E2]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 