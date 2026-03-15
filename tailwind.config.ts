import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ========== COLOR PALETTE ==========
      colors: {
        // Primary: Green (Sara's brand)
        primary: {
          50: "#f2f7f4",
          100: "#e0ebe5",
          200: "#b8d4c9",
          300: "#90bead",
          400: "#98c29b",  // Main green
          500: "#7ba984",
          600: "#5e8a6d",
          700: "#457056",
          800: "#2d563f",
          900: "#1a3c28",
        },
        
        // Secondary: Lavender (Header accent)
        secondary: {
          50: "#faf8fb",
          100: "#f3eff6",
          200: "#e8e0f0",
          300: "#d8cde3",
          400: "#c3b7c3",  // Main lavender
          500: "#b5a4b5",
          600: "#9b8a9b",
          700: "#816f81",
          800: "#685568",
          900: "#4a3a4a",
        },
        
        // Neutral: Grays & Surface colors
        neutral: {
          0: "#ffffff",
          50: "#fafbfc",
          100: "#f5f6f8",
          150: "#eff0f3", // Light background
          200: "#e8eaed",
          300: "#dee2de",  // Main section background
          400: "#d1d5db",
          500: "#9ca3af",
          600: "#6b7280",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        
        // Sara's Brand Black for text
        dark: "#302e2e",
        
        // Semantic colors
        success: "#16a34a",
        warning: "#f59e0b",
        error: "#dc2626",
        info: "#3b82f6",
      },

      // ========== TYPOGRAPHY ==========
      fontFamily: {
        sans: ["DM Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
        display: ["DM Serif Display", "Georgia", "serif"],
      },
      
      fontSize: {
        // Predefined sizes (complementing clamp from CSS)
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.0625rem", { lineHeight: "1.7" }],     // paragraph
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },

      // ========== SPACING & LAYOUT ==========
      spacing: {
        // Standard increment: 4px base
        0: "0",
        1: "0.25rem",    // 4px
        2: "0.5rem",     // 8px
        3: "0.75rem",    // 12px
        4: "1rem",       // 16px
        6: "1.5rem",     // 24px / button padding
        8: "2rem",       // 32px
        12: "3rem",      // 48px / section gap
        16: "4rem",      // 64px
        20: "5rem",      // 80px / large gap
        24: "6rem",      // 96px
      },

      // ========== SHADOWS ==========
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },

      // ========== BORDER RADIUS ==========
      borderRadius: {
        none: "0",
        xs: "0.25rem",   // 4px
        sm: "0.375rem",  // 6px
        base: "0.5rem",  // 8px (default lg)
        lg: "0.5rem",    // 8px
        xl: "0.75rem",   // 12px
        full: "9999px",
      },

      // ========== TRANSITIONS ==========
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        standard: "300ms",
        slow: "500ms",
      },

      // ========== GRADIENTS (for sections and overlays) ==========
      backgroundImage: {
        // Full page gradient - Linear subtle blend similar to Christina Day
        "gradient-page": "linear-gradient(135deg, #f5f3f5 0%, #e8dfe8 15%, #dee2de 35%, #d5e5d1 60%, #c9dfd0 85%, #b8d4c9 100%)",
        
        // Section gradients - Green palette focus
        "gradient-hero": "linear-gradient(135deg, #eff7f1 0%, #d7ebdd 48%, #b8d4c9 100%)",
        "gradient-services": "linear-gradient(135deg, #f2f8f3 0%, #deeee3 100%)",
        "gradient-projects": "linear-gradient(135deg, #edf5ef 0%, #d2e4d8 100%)",
        "gradient-casestudy": "linear-gradient(135deg, #e4f0e7 0%, #c6dccd 100%)",
        "gradient-contact": "linear-gradient(135deg, #e8f2ea 0%, #c9dfd0 100%)",
        
        // Component gradients
        "gradient-primary": "linear-gradient(135deg, #98c29b 0%, #5e8a6d 100%)",
        "gradient-secondary": "linear-gradient(135deg, #c3b7c3 0%, #9b8a9b 100%)",
        "gradient-light": "linear-gradient(135deg, #e8f0e6 0%, #f2f5fa 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
