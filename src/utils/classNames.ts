/**
 * Utility Functions for Design System
 */

/**
 * Merge Tailwind class names intelligently
 * Combines classes while handling overrides
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get color class name for a given variant and intensity
 * @example getColorClass('primary', '400') => 'text-primary-400'
 */
export function getColorClass(
  variant: 'primary' | 'secondary' | 'neutral',
  intensity: string,
  property: 'text' | 'bg' | 'border' = 'text'
): string {
  return `${property}-${variant}-${intensity}`;
}

/**
 * Get responsive class names
 * @example getResponsiveClass({ base: 'w-full', md: 'w-1/2' }) => 'w-full md:w-1/2'
 */
export function getResponsiveClass(
  classes: Partial<Record<'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', string>>
): string {
  const responsive: string[] = [];

  if (classes.base) responsive.push(classes.base);
  if (classes.sm) responsive.push(`sm:${classes.sm}`);
  if (classes.md) responsive.push(`md:${classes.md}`);
  if (classes.lg) responsive.push(`lg:${classes.lg}`);
  if (classes.xl) responsive.push(`xl:${classes.xl}`);
  if (classes['2xl']) responsive.push(`2xl:${classes['2xl']}`);

  return responsive.join(' ');
}

/**
 * Get button variant classes
 */
export function getButtonClasses(
  variant: 'primary' | 'secondary' | 'outline' = 'primary',
  size: 'sm' | 'base' | 'lg' | 'xl' = 'base'
): string {
  const base = [
    'inline-flex items-center justify-center gap-2',
    'font-semibold rounded-xl border',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#dee2de]/60',
    'active:translate-y-[1px]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none'
  ].join(' ');

  const variants = {
    primary: [
      'bg-[#f3f5f3] text-[#4d4d4d] border-[#e8e8e6]',
      'shadow-[0_4px_12px_rgba(0,0,0,0.08)]',
      'hover:bg-[#e8927c] hover:text-[#4d4d4d] hover:border-[#d18370] hover:shadow-[0_6px_16px_rgba(232,146,124,0.2)]',
      'active:bg-[#d18370]'
    ].join(' '),
    secondary: [
      'bg-[#dee2de] text-[#4d4d4d] border-[#a4a7a4]',
      'shadow-[0_4px_12px_rgba(146,148,145,0.12)]',
      'hover:bg-[#858885] hover:text-[#4d4d4d] hover:border-[#858885] hover:shadow-[0_8px_20px_rgba(146,148,145,0.18)]',
      'active:bg-[#858885]'
    ].join(' '),
    outline: [
      'bg-transparent text-[#4d4d4d] border-[#c3c7c3]',
      'hover:bg-[#eaecea] hover:border-[#858885] hover:shadow-[0_6px_18px_rgba(77, 77, 77,0.10)]',
      'active:bg-[#e3e6e3]'
    ].join(' '),
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-8',
    base: 'px-4 py-2 text-base min-h-10 lg:px-6 lg:py-3',
    lg: 'px-6 py-3 text-lg min-h-12 lg:px-8 lg:py-4',
    xl: 'px-6 py-4 text-xl min-h-14 lg:px-10 lg:py-5',
  };

  return cn(base, variants[variant], sizes[size]);
}

/**
 * Shared chip classes for tags/metadata pills
 */
export function getChipClasses(): string {
  return cn(
    'inline-flex items-center rounded-full border',
    'px-2.5 py-1 text-xs lg:px-3 lg:py-1.5',
    'font-medium text-[#646664]',
    'lg:text-sm lg:leading-[24px]',
    'bg-[#dee2de]/70 border-[#dee2de]',
    'transition-colors duration-200',
    'hover:bg-[#e3e6e3] hover:border-[#a4a7a4] focus:bg-[#e3e6e3] focus:border-[#a4a7a4] active:bg-[#e3e6e3] active:border-[#a4a7a4]'
  );
}

/**
 * Shared card shell classes for project and case-study cards
 */
export function getCardClasses(): string {
  return cn(
    'rounded-2xl border border-[#dee2de]/50 bg-gradient-to-br from-[#dee2de]/30 to-[#f3f5f3]',
    'transition-all duration-200 ease-out',
    'hover:border-[#dee2de]/70 hover:shadow-[0_20px_48px_rgba(228,232,227,0.20)]'
  );
}

/**
 * Get badge classes based on variant
 */
export function getBadgeClasses(
  variant: 'default' | 'success' | 'warning' | 'error' | 'info' = 'default'
): string {
  const base = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide';

  const variants = {
    default: 'bg-neutral-200 text-neutral-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return cn(base, variants[variant]);
}

/**
 * Get shadow classes
 */
export function getShadowClasses(
  level: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
): string {
  const shadows = {
    none: 'shadow-none',
    xs: 'shadow-xs',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  return shadows[level];
}

/**
 * Get spacing utility class
 */
export function getSpacingClass(
  property: 'p' | 'px' | 'py' | 'm' | 'mx' | 'my' | 'gap',
  value: string
): string {
  return `${property}-${value}`;
}

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Check if color is light or dark
 */
export function isColorDark(hex: string): boolean {
  const rgb = hexToRgb(hex);
  if (!rgb) return false;

  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness < 155;
}

/**
 * Format responsive breakpoint
 */
export function formatBreakpoint(bp: keyof typeof import('../constants/theme').BREAKPOINTS): string {
  const map = { xs: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl' };
  return map[bp] || 'base';
}

/**
 * Format number with thousand separators
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('es-ES').format(num);
}
