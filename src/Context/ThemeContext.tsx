import React, { createContext, useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { defaultFontConfig } from '.';
import { darkTheme, lightTheme } from '../Assets/Colors';
import defaultIconSet from '../Assets/Fonts/selection.json';
import type { IconSet } from '../Component';
import type { ExtractIconNames } from '../Component/Atoms/Icon.types';
import type {
  FontConfig,
  ThemeContextType,
  ThemeProviderProps,
} from './ThemeContext.type';

const ThemeContext = createContext<ThemeContextType<any> | undefined>(
  undefined
);

export const useTheme = <T extends IconSet>(): ThemeContextType<T> => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  customFonts,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const { width, height } = Dimensions.get('window');
  const [iconSet, setIconSet] = useState<IconSet>(defaultIconSet as IconSet); // State for the icon set
  const [fontConfig, setFontConfig] = useState<FontConfig>({
    ...defaultFontConfig,
    ...customFonts,
  });

  useEffect(() => {
    console.log('fontConfig', fontConfig);
  }, [fontConfig]);

  // const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  const colors = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkTheme((prev: boolean) => !prev);
  };

  const value: ThemeContextType<typeof iconSet> = {
    toggleTheme,
    colors,
    width,
    height,
    iconSet,
    setIconSet,
    IconNameType: iconSet.icons.map(
      (icon) => icon.properties.name
    ) as ExtractIconNames<typeof iconSet>[],
    fontConfig,
    setFontConfig,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
