import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react';
import { Dimensions } from 'react-native';
import { darkTheme, lightTheme } from '../Assets/Colors';

interface ThemeContextType {
  toggleTheme: () => void;
  width: number;
  height: number;
  colors: typeof lightTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { width, height } = Dimensions.get('window');

  // const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  const colors = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, colors, width, height }}>
      {children}
    </ThemeContext.Provider>
  );
};