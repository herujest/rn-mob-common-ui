import type { ReactNode } from 'react';
import type { lightTheme } from '../Assets';
import type { ExtractIconNames, IconSet } from '../Component';

export interface ThemeContextType<T extends IconSet> {
  toggleTheme: () => void;
  width: number;
  height: number;
  colors: typeof lightTheme;
  iconSet: T;
  setIconSet: (newIconSet: T) => void;
  IconNameType: ExtractIconNames<T>[]; // Add dynamic type here
  fontConfig: FontConfig;
  setFontConfig: (config: FontConfig) => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
  customFonts?: Partial<FontConfig>;
}

export interface FontConfig {
  bold: string;
  boldItalic?: string;
  semiBold: string;
  semiBoldItalic?: string;
  regular: string;
  italic?: string;
}
