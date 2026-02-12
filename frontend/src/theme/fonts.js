// Font Sizes and Styles
export const fontSizes = {
  // Large Bold Fonts
  h1: {
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -0.3,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.2,
    lineHeight: 1.3,
  },
  h4: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 1.4,
  },

  // Display Fonts
  display: {
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: -1,
    lineHeight: 1.1,
  },
  displaySmall: {
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: -0.8,
    lineHeight: 1.2,
  },

  // Body Fonts
  body1: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1.5,
    letterSpacing: 0.3,
  },
  body2: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 1.5,
    letterSpacing: 0.2,
  },
  body3: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 1.4,
    letterSpacing: 0.1,
  },

  // Small Fonts
  small: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 1.4,
    letterSpacing: 0.4,
  },
  smaller: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 1.3,
    letterSpacing: 0.5,
  },
  smallest: {
    fontSize: 8,
    fontWeight: '500',
    lineHeight: 1.2,
    letterSpacing: 0.6,
  },

  // Bold Variants
  bodyBold: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 1.5,
    letterSpacing: 0.3,
  },
  body2Bold: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 1.5,
    letterSpacing: 0.2,
  },

  // Button Fonts
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 1.5,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  buttonSmall: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 1.4,
    letterSpacing: 0.4,
  },

  // Label Fonts
  label: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 1.3,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  labelSmall: {
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 1.2,
    letterSpacing: 0.6,
  },

  // Caption Fonts
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 1.3,
    letterSpacing: 0.4,
  },
  captionSmall: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 1.2,
    letterSpacing: 0.3,
  },

  // Special Numbers (for game numbers)
  number: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 1.2,
    letterSpacing: 0,
  },
  numberLarge: {
    fontSize: 48,
    fontWeight: '900',
    lineHeight: 1,
    letterSpacing: -1,
  },
  numberSmall: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 1.2,
    letterSpacing: 0,
  },
};

// Font Families
export const fontFamilies = {
  primary: 'Poppins, sans-serif',
  secondary: 'Inter, sans-serif',
  mono: 'Courier New, monospace',
  display: 'Montserrat, sans-serif',
};

// Font Weight Constants
export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

// Line Heights
export const lineHeights = {
  tight: 1.1,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.6,
  loose: 1.8,
};

// Letter Spacing
export const letterSpacing = {
  tighter: -0.05,
  tight: -0.025,
  normal: 0,
  wide: 0.025,
  wider: 0.05,
  widest: 0.1,
};

export default {
  fontSizes,
  fontFamilies,
  fontWeights,
  lineHeights,
  letterSpacing,
};
