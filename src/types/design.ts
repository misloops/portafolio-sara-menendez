/**
 * Design System Types
 * Centralized types for UI components and design tokens
 */

// ========== COLOR TOKENS ==========
export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type ColorIntensity =
  | '50'
  | '100'
  | '150'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

// ========== COMPONENT VARIANTS ==========
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type ButtonSize = 'sm' | 'base' | 'lg' | 'xl';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

// ========== SPACING TOKENS ==========
export type SpacingToken = 
  | 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 20 | 24;

// ========== RESPONSIVE ==========
export type ResponsiveValue<T> = {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

// ========== BUTTON PROPS ==========
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Button content (text or node) */
  children: React.ReactNode;
  /** Optional icon before text */
  icon?: React.ReactNode;
  /** Loading state */
  isLoading?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

// ========== BADGE PROPS ==========
export interface BadgeProps {
  /** Badge variant / style */
  variant?: BadgeVariant;
  /** Badge content */
  children: React.ReactNode;
  /** Optional dismissible */
  onDismiss?: () => void;
}

// ========== CARD PROPS ==========
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shadow intensity */
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Show hover effect */
  interactive?: boolean;
}

// ========== TYPOGRAPHY ==========
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** HTML heading level */
  level: HeadingLevel;
  /** Optional subtitle */
  subtitle?: React.ReactNode;
}

// ========== NAVIGATION ==========
export interface NavItem {
  label: string;
  href?: string;
  id?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

// ========== SECTION PROPS ==========
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Background color from design system */
  bgColor?: 'primary' | 'secondary' | 'neutral' | 'gradient-light';
  /** Section padding (vertical) */
  verticalPadding?: 'sm' | 'base' | 'lg' | 'xl';
  /** Has container max-width */
  contained?: boolean;
}

// ========== LAYOUT ==========
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;
