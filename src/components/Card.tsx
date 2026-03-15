import { cn } from '../utils/classNames';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outline';
  hover?: boolean;
  className?: string;
}

/**
 * Card Component - Reusable card with variants
 * Variants: default (white), elevated (shadow), outline (border only)
 * Can be interactive with hover effects
 */
function Card({
  children,
  variant = 'default',
  hover = false,
  className
}: CardProps) {
  const baseStyles = cn(
    'rounded-lg p-6',
    'transition-all duration-300'
  );

  const variantStyles = {
    default: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-md',
    outline: 'bg-transparent border-2 border-secondary-300'
  };

  const hoverStyles = hover && cn(
    'hover:shadow-lg hover:border-secondary-300'
  );

  return (
    <div className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}>
      {children}
    </div>
  );
}

export default Card;
