import { cn } from '../utils/classNames';
import logoSaraMenendez from '../assets/icons/Logo_negro.svg';

interface LogoProps {
  className?: string;
  imageClassName?: string;
}

function Logo({ className, imageClassName }: LogoProps) {
  return (
    <a
      href="/"
      className={cn(
        'inline-flex items-center overflow-visible',
        'transition-opacity duration-200 hover:opacity-80',
        className
      )}
      aria-label="Ir al inicio"
    >
      <img
        src={logoSaraMenendez}
        alt="Sara Menéndez"
        className={cn('block h-10 w-auto max-w-none object-contain', imageClassName)}
      />
    </a>
  );
}

export default Logo;
