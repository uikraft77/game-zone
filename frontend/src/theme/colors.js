// Color Palette - Gaming Theme with Dark Background
export const colors = {
  // Primary Colors - Updated to match splash screen
  primary: '#ee2bee', // Mystical Pink/Magenta
  primaryLight: '#FF5BC4',
  primaryDark: '#D41BA8',

  // Secondary Colors
  secondary: '#00D9FF', // Cyan
  secondaryLight: '#33E5FF',
  secondaryDark: '#00B8D4',

  // Accent Colors
  accent1: '#FFD700', // Gold
  accent2: '#FF1493', // Deep Pink
  accent3: '#00FF88', // Neon Green
  accent4: '#9D4EDD', // Purple
  accent5: '#3A86FF', // Blue
  accent6: '#FB5607', // Red Orange

  // Status Colors
  success: '#00FF88', // Green for passed
  error: '#FF1F1F', // Red for failed
  warning: '#FFB703', // Orange for warning
  info: '#3A86FF', // Blue for info

  // Background Colors - Dark theme - Updated for cosmic gradient
  background: '#221022', // Very dark purple/background-dark
  surface: '#2d1b2d', // Dark purple surface
  surfaceLight: '#3d2b3d', // Lighter surface
  surfaceLighter: '#4d3b4d', // Even lighter surface

  // Text Colors
  textPrimary: '#FFFFFF', // White
  textSecondary: '#B0B5C4', // Light gray
  textTertiary: '#8B90A8', // Medium gray
  textDisabled: '#5A6070', // Dark gray
  textInverse: '#221022', // Dark background on light

  // Border Colors
  border: '#3A4658', // Dark border
  borderLight: '#4A5668', // Light border
  divider: '#2D3548', // Divider color

  // Gradient Colors - Cosmic gradient
  gradientStart: '#581c58', // Light purple top
  gradientMid: '#221022', // Dark purple mid
  gradientEnd: '#150a15', // Very dark purple bottom

  // Card Colors
  cardBackground: '#2d1b2d',
  cardBorder: '#3A4658',

  // Special States
  passedBorder: '#00FF88', // Neon green for passed
  failedBorder: '#FF1F1F', // Red for failed
  highlightNumber: '#FFD700', // Gold highlight

  // Overlay Colors
  overlay: 'rgba(34, 16, 34, 0.8)',
  overlayDark: 'rgba(34, 16, 34, 0.95)',
  overlayLight: 'rgba(34, 16, 34, 0.5)',

  // Rainbow Multi Colors
  rainbow: [
    '#ee2bee', // Primary magenta
    '#FF1493', // Pink
    '#9D4EDD', // Purple
    '#3A86FF', // Blue
    '#00D9FF', // Cyan
    '#00FF88', // Green
    '#FFD700', // Gold
    '#FB5607', // Red Orange
  ],

  // Transparent variants
  transparent: 'transparent',
};

// Export helper function to get gradient
export const getGradient = (direction = '135deg') => {
  return `linear-gradient(${direction}, ${colors.gradientStart}, ${colors.gradientMid}, ${colors.gradientEnd})`;
};

// Export helper for multi-color gradient
export const getRainbowGradient = (direction = '90deg') => {
  const stops = colors.rainbow.map((color, i) => {
    const percent = (i / (colors.rainbow.length - 1)) * 100;
    return `${color} ${percent}%`;
  }).join(', ');
  return `linear-gradient(${direction}, ${stops})`;
};

export default colors;
