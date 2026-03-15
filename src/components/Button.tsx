import { forwardRef } from 'react';
import { getButtonClasses, cn } from '../utils/classNames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Button size */
  size?: 'sm' | 'base' | 'lg' | 'xl';
  /** Button text content */
  children: React.ReactNode;
  /** Optional icon before text */
  icon?: React.ReactNode;
  /** Show loading state */
  isLoading?: boolean;
}

/**
 * Button Component
 * Reusable button with design system presets
 * Uses Tailwind classes exclusively (no inline styles)
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'base',
      children,
      icon,
      isLoading = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const buttonClasses = getButtonClasses(variant, size);

    return (
      <button
        ref={ref}
        className={cn(buttonClasses, className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          icon && <span className="-ml-1 mr-2">{icon}</span>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;