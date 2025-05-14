import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
}) => {
  const baseClasses = 'font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-blue-900 hover:bg-blue-800 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white',
    text: 'bg-transparent text-blue-900 hover:bg-blue-50'
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-2 rounded-md',
    md: 'text-base px-5 py-2.5 rounded-md',
    lg: 'text-lg px-6 py-3 rounded-md'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;