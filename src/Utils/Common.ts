import { StyleSheet } from 'react-native';
import { Gutters } from './Gutters';
import { Metrics } from './Metrics';

const isSmallScreen = Metrics.breakpoints.smallScreen;
const isLargeScreen = Metrics.breakpoints.largeScreen;

export const CommonStyles = StyleSheet.create({
  // Screen container with dynamic padding
  container: {
    flex: 1,
    padding: isSmallScreen
      ? Gutters.screen.padding / 2 // Smaller padding for small screens
      : Gutters.screen.padding, // Default padding for regular screens
  },

  // Header with fixed vertical spacing
  header: {
    marginVertical: Gutters.vertical.large, // Large vertical margin
  },

  // Row with horizontal gutters and spacing
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Gutters.horizontal.regular, // Regular horizontal padding
    marginBottom: Gutters.vertical.small, // Small vertical spacing
  },

  // Item card with margin and padding
  item: {
    margin: Gutters.margin.small, // Small margin around the item
    padding: Gutters.padding.regular, // Regular internal padding
  },

  // Dynamic spacing for responsive breakpoints
  dynamicSpacing: {
    margin: isLargeScreen
      ? Gutters.margin.large // Large margin for large screens
      : Gutters.margin.regular, // Regular margin for other screens
  },

  // Full-width component
  fullWidth: {
    width: Gutters.full.width,
  },

  // Full-height component
  fullHeight: {
    height: Gutters.full.height,
  },

  // Platform-specific padding
  platformSpecific: {
    paddingBottom: Gutters.platform.ios, // Extra padding for iOS
  },
});
