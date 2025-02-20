import type { FontConfig } from './ThemeContext.type';

export type * from './ThemeContext.type';
export { ThemeProvider, useTheme } from './ThemeContext';

export const defaultFontConfig: FontConfig = {
  bold: 'NotoSans-Bold',
  semiBold: 'NotoSans-SemiBold',
  regular: 'NotoSans-Regular',
};
