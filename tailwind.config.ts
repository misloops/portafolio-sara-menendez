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
        // Primary: Gray (Sara's brand)
        primary: {
          50: "#fafbfa",
          100: "#f3f5f3",
          200: "#eaecea",
          300: "#e3e6e3",
          400: "#dee2de",  // Main gray
          500: "#c3c7c3",
          600: "#a4a7a4",
          700: "#858885",
          800: "#646664",
          900: "#434443",
        },
        
        // Secondary: Coral (Header accent)
        secondary: {
          50: "#fdf6f5",
          100: "#fbebe7",
          200: "#f6d3cb",
          300: "#efb5a6",
          400: "#e8927c",  // Main coral
          500: "#d18370",
          600: "#b57261",
          700: "#945d4f",
          800: "#74493e",
          900: "#51332b",
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
        dark: "#4d4d4d",
        
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
        sm: "0.25rem",   // 4px
        base: "0.25rem", // 4px
        lg: "0.25rem",   // 4px
        xl: "0.25rem",   // 4px
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
        "gradient-page": "linear-gradient(135deg, #fdf6f5 0%, #fbebe7 15%, #dee2de 35%, #e3e6e3 60%, #c3c7c3 85%, #eaecea 100%)",
        
        // Section gradients - Gray/Coral palette focus
        "gradient-hero": "linear-gradient(135deg, #f3f5f3 0%, #e3e6e3 48%, #eaecea 100%)",
        "gradient-services": "linear-gradient(135deg, #f3f5f3 0%, #eaecea 100%)",
        "gradient-projects": "linear-gradient(135deg, #f3f5f3 0%, #e3e6e3 100%)",
        "gradient-casestudy": "linear-gradient(135deg, #eaecea 0%, #c3c7c3 100%)",
        "gradient-contact": "linear-gradient(135deg, #f3f5f3 0%, #c3c7c3 100%)",
        
        // Component gradients
        "gradient-primary": "linear-gradient(135deg, #dee2de 0%, #a4a7a4 100%)",
        "gradient-secondary": "linear-gradient(135deg, #e8927c 0%, #b57261 100%)",
        "gradient-light": "linear-gradient(135deg, #eaecea 0%, #f2f5fa 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
