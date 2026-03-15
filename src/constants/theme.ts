/**
 * Design System Constants
 * Centralized theme tokens and component presets
 */

// ========== COLORS ==========
export const COLORS = {
  primary: '#98c29b',
  primaryDark: '#5e8a6d',
  secondary: '#c3b7c3',
  secondaryDark: '#9b8a9b',
  dark: '#302e2e', // Sara's brand black for text
  neutral: {
    bg: '#dee2de',
    bgLight: '#eff0f3',
    bgDark: '#1f2937',
    text: '#302e2e', // Updated to Sara's black
    textMuted: '#4a5568',
  },
} as const;

// ========== SPACING SCALE ==========
export const SPACING = {
  xs: '4px',   // 0.25rem
  sm: '8px',   // 0.5rem
  md: '12px',  // 0.75rem
  base: '16px', // 1rem
  lg: '24px',  // 1.5rem
  xl: '32px',  // 2rem
  '2xl': '48px', // 3rem
  '3xl': '64px', // 4rem
  '4xl': '80px', // 5rem
  '5xl': '96px', // 6rem
} as const;

// ========== BREAKPOINTS ==========
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ========== BORDER RADIUS ==========
export const BORDER_RADIUS = {
  none: '0',
  xs: '4px',
  sm: '6px',
  base: '8px',
  lg: '8px',
  xl: '12px',
  full: '9999px',
} as const;

// ========== SHADOWS ==========
export const SHADOWS = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// ========== TRANSITION DURATIONS ==========
export const TRANSITIONS = {
  fast: '150ms',
  base: '200ms',
  standard: '300ms',
  slow: '500ms',
} as const;

// ========== TYPOGRAPHY PRESETS ==========
export const TYPOGRAPHY = {
  heading: {
    h1: `
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      font-weight: 800;
      line-height: 1.1;
      letter-spacing: -0.02em;
    `,
    h2: `
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      letter-spacing: -0.01em;
    `,
    h3: `
      font-size: clamp(1.5rem, 4vw, 2rem);
      font-weight: 600;
    `,
  },
  body: {
    large: `
      font-size: 1.0625rem;
      line-height: 1.7;
      color: #4a5568;
    `,
    base: `
      font-size: 1rem;
      line-height: 1.5;
    `,
    small: `
      font-size: 0.875rem;
      line-height: 1.4;
    `,
  },
} as const;

// ========== COMPONENT PRESETS ==========
export const COMPONENTS = {
  button: {
    primary: {
      base: 'inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out cursor-pointer',
      bg: COLORS.primary,
      textColor: '#ffffff',
      hover: 'opacity-90 transform -translate-y-0.5',
    },
    secondary: {
      base: 'inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out cursor-pointer',
      bg: '#f0f0f0',
      textColor: '#333333',
      border: '1px solid #ddd',
      hover: 'bg-gray-200',
    },
    outline: {
      base: 'inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ease-in-out cursor-pointer',
      bg: 'transparent',
      textColor: '#000000',
      border: '2px solid #000000',
      hover: `bg-${COLORS.primary} text-white border-${COLORS.primary}`,
    },
  },
} as const;

// ========== ANIMATION EASING ==========
export const EASING = {
  linear: 'linear',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  easeInQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
  easeOutQuad: 'cubic-bezier(0.5, 1, 0.89, 1)',
} as const;

// ========== Z-INDEX SCALE ==========
export const Z_INDEX = {
  hide: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  modalBackdrop: 40,
  modal: 50,
  popover: 60,
  tooltip: 70,
  notification: 80,
  max: 9999,
} as const;
