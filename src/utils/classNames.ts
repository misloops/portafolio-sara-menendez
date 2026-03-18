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
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#98c29b]/60',
    'active:translate-y-[1px]',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none'
  ].join(' ');

  const variants = {
    primary: [
      'bg-[#f2f4f1] text-[#302e2e] border-[#e8e8e6]',
      'shadow-[0_4px_12px_rgba(0,0,0,0.08)]',
      'hover:bg-[#c3b7c3] hover:text-[#302e2e] hover:border-[#b0a4b0] hover:shadow-[0_6px_16px_rgba(195,183,195,0.2)]',
      'active:bg-[#b0a4b0]'
    ].join(' '),
    secondary: [
      'bg-[#98c29b] text-[#302e2e] border-[#7fab86]',
      'shadow-[0_4px_12px_rgba(83,130,93,0.12)]',
      'hover:bg-[#7aa871] hover:text-[#302e2e] hover:border-[#6a9860] hover:shadow-[0_8px_20px_rgba(83,130,93,0.18)]',
      'active:bg-[#6a9860]'
    ].join(' '),
    outline: [
      'bg-transparent text-[#302e2e] border-[#b9c3ba]',
      'hover:bg-[#ecf2ec] hover:border-[#9eaca0] hover:shadow-[0_6px_18px_rgba(48,46,46,0.10)]',
      'active:bg-[#e2e9e2]'
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
    'font-medium text-[#3d6d3d]',
    'lg:text-sm lg:leading-[24px]',
    'bg-[#98c29b]/70 border-[#98c29b]',
    'transition-colors duration-200',
    'hover:bg-[#c3dcc5] hover:border-[#7fab86] focus:bg-[#c3dcc5] focus:border-[#7fab86] active:bg-[#c3dcc5] active:border-[#7fab86]'
  );
}

/**
 * Shared card shell classes for project and case-study cards
 */
export function getCardClasses(): string {
  return cn(
    'rounded-2xl border border-[#98c29b]/50 bg-gradient-to-br from-[#98c29b]/30 to-[#f0f8f2]',
    'transition-all duration-200 ease-out',
    'hover:border-[#98c29b]/70 hover:shadow-[0_20px_48px_rgba(152,194,155,0.20)]'
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
