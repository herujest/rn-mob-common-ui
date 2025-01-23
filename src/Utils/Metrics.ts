import { Dimensions, Platform, StatusBar } from 'react-native';

// Get screen dimensions
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Status bar height
const statusBarHeight = Platform.select({
  ios: 20,
  android: StatusBar.currentHeight || 24,
  default: 0,
});

// Navbar height
const navbarHeight = 56;

// Device-independent font scaling factor
const scale = (size: number) => (screenWidth / 375) * size;

// Breakpoints for responsive design
const breakpoints = {
  smallScreen: screenWidth < 375,
  tablet: screenWidth >= 768,
  mediumScreen: screenWidth >= 360 && screenWidth < 768,
  largeScreen: screenWidth >= 768,
};

// Metrics configuration
export const Metrics = {
  // Screen dimensions
  screenWidth,
  screenHeight,

  // Breakpoints
  breakpoints,

  // Font scaling
  scale,

  // Status bar & navbar
  statusBarHeight,
  navbarHeight,
};
