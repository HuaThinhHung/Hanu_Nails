/**
 * Design Tokens & Color System
 * Based on HANU Nails luxury aesthetic
 */

export const colors = {
  // Neutrals (Primary)
  white: "#FFFFFF",
  softWhite: "#F8F7F4",
  lightGray: "#F2EDE9",
  gray: "#E6E6E6",
  warmGray: "#D8D2C8",
  brown: "#C8B8A8",
  darkBrown: "#7A685A",
  charcoal: "#1C1C1C",
  black: "#000000",

  // Accents (Optional)
  goldAccent: "#D4AF37",
  blush: "#F0E8E4",

  // Semantic
  textPrimary: "#1C1C1C", // charcoal
  textSecondary: "#7A685A", // dark-brown
  textLight: "#C8B8A8", // brown
  borderLight: "#E6E6E6", // gray
  bgLight: "#F8F7F4", // soft-white
};

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "40px",
  "3xl": "48px",
  "4xl": "60px",
  "5xl": "80px",
  "6xl": "100px",
};

export const typography = {
  fontFamily: {
    serif: ["Cormorant Garamond", "Georgia", "serif"],
    sans: ["Inter", "Helvetica Neue", "sans-serif"],
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "72px",
  },
  letterSpacing: {
    tight: "0.5px",
    normal: "1px",
    wide: "1.5px",
    wider: "2px",
  },
};

export const animations = {
  fast: "0.15s",
  base: "0.2s",
  slow: "0.3s",
  slower: "0.5s",
};

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
