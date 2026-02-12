// Color Palette - Gaming Theme with Dark Background
export const colors = {
  // Primary Colors
  primary: '#FF6B35', // Vibrant Orange
  primaryLight: '#FF8C5A',
  primaryDark: '#E85A2E',

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

  // Background Colors - Dark theme
  background: '#0A0E27', // Very dark navy/purple
  surface: '#1A1F3A', // Dark purple surface
  surfaceLight: '#242B48', // Lighter surface
  surfaceLighter: '#2D3548', // Even lighter surface

  // Text Colors
  textPrimary: '#FFFFFF', // White
  textSecondary: '#B0B5C4', // Light gray
  textTertiary: '#8B90A8', // Medium gray
  textDisabled: '#5A6070', // Dark gray
  textInverse: '#0A0E27', // Dark background on light

  // Border Colors
  border: '#3A4658', // Dark border
  borderLight: '#4A5668', // Light border
  divider: '#2D3548', // Divider color

  // Gradient Colors
  gradientStart: '#1A0033', // Dark purple
  gradientMid: '#330066', // Medium purple
  gradientEnd: '#0A0E27', // Dark navy

  // Card Colors
  cardBackground: '#1A1F3A',
  cardBorder: '#3A4658',

  // Special States
  passedBorder: '#00FF88', // Neon green for passed
  failedBorder: '#FF1F1F', // Red for failed
  highlightNumber: '#FFD700', // Gold highlight

  // Overlay Colors
  overlay: 'rgba(10, 14, 39, 0.8)',
  overlayDark: 'rgba(10, 14, 39, 0.95)',
  overlayLight: 'rgba(10, 14, 39, 0.5)',

  // Rainbow Multi Colors
  rainbow: [
    '#FF6B35', // Orange
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
