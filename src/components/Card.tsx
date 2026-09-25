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
    default: 'bg-[#dee2de] border border-[#e8927c]', // Verde con borde malva
    elevated: 'bg-[#e8927c] shadow-md border border-[#dee2de]', // Malva con borde verde
    outline: 'bg-transparent border-2 border-[#dee2de]' // Borde verde
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
