import { colors, getGradient, getRainbowGradient } from './colors';
import { fontSizes, fontFamilies, fontWeights, lineHeights, letterSpacing } from './fonts';
import { spacing, borderRadius, shadows, transitions, zIndex } from './spacing';

export const theme = {
  colors,
  fontSizes,
  fontFamilies,
  fontWeights,
  lineHeights,
  letterSpacing,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,

  // Helper functions
  getGradient,
  getRainbowGradient,

  // Breakpoints for responsive design
  breakpoints: {
    xs: '0px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Media queries helpers
  media: {
    mobile: '@media (max-width: 480px)',
    tablet: '@media (max-width: 768px)',
    desktop: '@media (min-width: 1024px)',
  },

  // Common patterns
  layouts: {
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    grid: {
      display: 'grid',
      gap: spacing.md,
    },
  },

  // Button presets
  buttons: {
    primary: {
      backgroundColor: colors.primary,
      color: colors.textPrimary,
      padding: `${spacing.md}px ${spacing.lg}px`,
      borderRadius: `${borderRadius.lg}px`,
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.button.fontSize,
      border: 'none',
      cursor: 'pointer',
      transition: `all ${transitions.base}`,
      '&:hover': {
        backgroundColor: colors.primaryLight,
        boxShadow: shadows.glow.md,
      },
      '&:active': {
        backgroundColor: colors.primaryDark,
      },
      '&:disabled': {
        backgroundColor: colors.textDisabled,
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
    secondary: {
      backgroundColor: colors.secondary,
      color: colors.textInverse,
      padding: `${spacing.md}px ${spacing.lg}px`,
      borderRadius: `${borderRadius.lg}px`,
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.button.fontSize,
      border: 'none',
      cursor: 'pointer',
      transition: `all ${transitions.base}`,
      '&:hover': {
        backgroundColor: colors.secondaryLight,
        boxShadow: shadows.glowCyan.md,
      },
      '&:active': {
        backgroundColor: colors.secondaryDark,
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.primary,
      padding: `${spacing.md}px ${spacing.lg}px`,
      borderRadius: `${borderRadius.lg}px`,
      border: `2px solid ${colors.primary}`,
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.button.fontSize,
      cursor: 'pointer',
      transition: `all ${transitions.base}`,
      '&:hover': {
        backgroundColor: colors.primary,
        color: colors.textPrimary,
      },
    },
  },

  // Card presets
  cards: {
    base: {
      backgroundColor: colors.cardBackground,
      borderRadius: `${borderRadius.xl}px`,
      border: `1px solid ${colors.cardBorder}`,
      padding: spacing.lg,
      boxShadow: shadows.md,
    },
    elevated: {
      backgroundColor: colors.cardBackground,
      borderRadius: `${borderRadius.xl}px`,
      border: `1px solid ${colors.cardBorder}`,
      padding: spacing.lg,
      boxShadow: shadows.lg,
    },
  },

  // Input presets
  inputs: {
    base: {
      backgroundColor: colors.surface,
      color: colors.textPrimary,
      borderRadius: `${borderRadius.lg}px`,
      border: `1px solid ${colors.border}`,
      padding: `${spacing.md}px ${spacing.lg}px`,
      fontSize: fontSizes.body2.fontSize,
      fontFamily: fontFamilies.primary,
      transition: `all ${transitions.base}`,
      '&:focus': {
        borderColor: colors.primary,
        outline: 'none',
        boxShadow: `0 0 0 3px ${colors.primary}33`,
      },
      '&::placeholder': {
        color: colors.textTertiary,
      },
    },
  },

  // Text styles
  text: {
    heading1: {
      ...fontSizes.h1,
      color: colors.textPrimary,
      fontFamily: fontFamilies.display,
    },
    heading2: {
      ...fontSizes.h2,
      color: colors.textPrimary,
      fontFamily: fontFamilies.display,
    },
    heading3: {
      ...fontSizes.h3,
      color: colors.textPrimary,
      fontFamily: fontFamilies.primary,
    },
    body: {
      ...fontSizes.body1,
      color: colors.textPrimary,
      fontFamily: fontFamilies.primary,
    },
    small: {
      ...fontSizes.body2,
      color: colors.textSecondary,
      fontFamily: fontFamilies.primary,
    },
  },
};

export default theme;
