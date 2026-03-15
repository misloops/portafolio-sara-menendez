import { cn } from '../utils/classNames';

function Logo() {
  return (
    <a
      href="/"
      style={{
        fontFamily: 'Gilroy, Poppins, sans-serif',
        fontWeight: 700,
      }}
      className={cn(
        'text-2xl md:text-2xl lg:text-3xl',
        'text-dark',
        'hover:text-primary-500 transition-colors'
      )}
    >
      Sara Menéndez
    </a>
  );
}

export default Logo;
