import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Base spacing unit
const baseSpacing = 8;

// Gutters configuration
export const Gutters = {
  // Base Spacing
  base: baseSpacing,

  // Horizontal Gutters
  horizontal: {
    none: 0,
    small: baseSpacing, // 8px
    regular: baseSpacing * 2, // 16px
    large: baseSpacing * 3, // 24px
    extraLarge: baseSpacing * 4, // 32px
  },

  // Vertical Gutters
  vertical: {
    none: 0,
    small: baseSpacing, // 8px
    regular: baseSpacing * 2, // 16px
    large: baseSpacing * 3, // 24px
    extraLarge: baseSpacing * 4, // 32px
  },

  // Padding
  padding: {
    none: 0,
    small: baseSpacing, // 8px
    regular: baseSpacing * 2, // 16px
    large: baseSpacing * 3, // 24px
    extraLarge: baseSpacing * 4, // 32px
  },

  // Margin
  margin: {
    none: 0,
    small: baseSpacing, // 8px
    regular: baseSpacing * 2, // 16px
    large: baseSpacing * 3, // 24px
    extraLarge: baseSpacing * 4, // 32px
  },

  // Screen Insets (general padding/margin for screens)
  screen: {
    padding: baseSpacing * 2, // 16px
    margin: baseSpacing * 2, // 16px
  },

  // Element Spacing (e.g., rows, columns, components)
  element: {
    small: baseSpacing, // 8px
    regular: baseSpacing * 2, // 16px
    large: baseSpacing * 3, // 24px
    extraLarge: baseSpacing * 4, // 32px
  },

  // Platform-specific spacing (optional)
  platform: {
    ios: Platform.OS === 'ios' ? baseSpacing : 0,
    android: Platform.OS === 'android' ? baseSpacing : 0,
  },

  // Full Width/Height
  full: {
    width,
    height,
  },
};
