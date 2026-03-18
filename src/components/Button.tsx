import { ReactNode } from 'react';

type ButtonProps = {
  text: string | ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  icon?: ReactNode;
};

function Button({ 
  text, 
  variant = 'primary', 
  size = 'md',
  onClick,
  icon 
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2 justify-center';
  
  const variantClasses = {
    primary: 'bg-green-500 text-white hover:bg-green-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-gray-700 text-gray-700 hover:bg-gray-100'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;