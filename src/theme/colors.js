// Centralized Color Palette for Tarkasya Website
// Change colors here to update the entire website theme

export const colors = {
  // Primary Colors - Tarkasya Brand
  primary: {
    main: '#1d2786', // Tarkasya blue - main brand color
    light: '#3b4bc8', // Lighter blue for hover states
    dark: '#141f5a', // Darker blue for active states
    contrastText: '#ffffff', // White text on primary
  },
  
  // Secondary Colors
  secondary: {
    main: '#ff6b35', // Orange accent for CTAs and highlights
    light: '#ff8a5c', // Light orange
    dark: '#e55a2b', // Dark orange
    contrastText: '#ffffff',
  },
  
  // Accent Colors
  accent: {
    yellow: '#ffd93d', // Warm yellow for highlights
    coral: '#ff6b6b', // Coral for special elements
    mint: '#4ecdc4', // Mint green for success states
  },
  
  // Background Colors
  background: {
    default: '#ffffff', // Main background
    paper: '#f8f9fa', // Card/component backgrounds
    dark: '#0f172a', // Dark sections
    light: '#f1f5f9', // Light sections
    gradient: 'linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)',
  },
  
  // Text Colors
  text: {
    primary: '#1e293b', // Main text color
    secondary: '#64748b', // Secondary text
    disabled: '#94a3b8', // Disabled text
    inverse: '#ffffff', // Text on dark backgrounds
    accent: '#1d2786', // Accent text color
  },
  
  // Status Colors
  success: {
    main: '#10b981',
    light: '#34d399',
    dark: '#059669',
  },
  
  error: {
    main: '#ef4444',
    light: '#f87171',
    dark: '#dc2626',
  },
  
  warning: {
    main: '#f59e0b',
    light: '#fbbf24',
    dark: '#d97706',
  },
  
  info: {
    main: '#3b82f6',
    light: '#60a5fa',
    dark: '#2563eb',
  },
  
  // Border Colors
  border: {
    light: '#e2e8f0',
    medium: '#cbd5e1',
    dark: '#94a3b8',
  },
  
  // Gradient Colors
  gradients: {
    primary: 'linear-gradient(135deg, #1d2786 0%, #3b4bc8 100%)',
    secondary: 'linear-gradient(135deg, #ff6b35 0%, #ff8a5c 100%)',
    hero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    accent: 'linear-gradient(135deg, #ffd93d 0%, #ff6b35 100%)',
  },
};

// Breakpoints for responsive design
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// Spacing system
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
};

// Typography scale
export const typography = {
  h1: {
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem', lg: '3rem' },
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.25rem' },
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem', lg: '2rem' },
    fontWeight: 500,
    lineHeight: 1.4,
  },
  body1: {
    fontSize: { xs: '1rem', sm: '1.125rem' },
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },
}; 