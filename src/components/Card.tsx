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
    default: 'bg-[#98c29b] border border-[#c3b7c3]', // Verde con borde malva
    elevated: 'bg-[#c3b7c3] shadow-md border border-[#98c29b]', // Malva con borde verde
    outline: 'bg-transparent border-2 border-[#98c29b]' // Borde verde
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
