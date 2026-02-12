// Spacing Constants (in pixels)
export const spacing = {
  // Base unit is 8px
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,

  // Named spacing
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

// Border Radius
export const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 20,
  '3xl': 24,
  full: 9999,
};

// Shadow Effects
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)',

  // Glow effects
  glow: {
    sm: '0 0 10px rgba(255, 107, 53, 0.3)',
    md: '0 0 20px rgba(255, 107, 53, 0.5)',
    lg: '0 0 30px rgba(255, 107, 53, 0.7)',
  },
  glowCyan: {
    sm: '0 0 10px rgba(0, 217, 255, 0.3)',
    md: '0 0 20px rgba(0, 217, 255, 0.5)',
    lg: '0 0 30px rgba(0, 217, 255, 0.7)',
  },
};

// Transition/Animation Durations
export const transitions = {
  fast: '100ms',
  base: '150ms',
  slow: '200ms',
  slower: '300ms',
};

// Z-Index System
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 100,
  sticky: 120,
  fixed: 130,
  backdrop: 140,
  modal: 150,
  popover: 160,
  tooltip: 170,
  notification: 180,
};

export default {
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
};
