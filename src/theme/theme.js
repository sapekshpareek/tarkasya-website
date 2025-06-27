import { createTheme } from '@mui/material/styles';
import { colors, typography, spacing } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.primary.contrastText,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.secondary.contrastText,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      ...typography.h1,
      color: colors.text.primary,
    },
    h2: {
      ...typography.h2,
      color: colors.text.primary,
    },
    h3: {
      ...typography.h3,
      color: colors.text.primary,
    },
    h4: {
      ...typography.h4,
      color: colors.text.primary,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: colors.text.primary,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: colors.text.primary,
    },
    body1: {
      ...typography.body1,
      color: colors.text.primary,
    },
    body2: {
      ...typography.body2,
      color: colors.text.secondary,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: (factor) => `${8 * factor}px`,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          padding: '8px 24px',
          fontWeight: 500,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        contained: {
          '&:hover': {
            backgroundColor: colors.primary.light,
          },
        },
        outlined: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
          '&:hover': {
            backgroundColor: colors.primary.main,
            color: colors.primary.contrastText,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: spacing.md,
          paddingRight: spacing.md,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
}); 