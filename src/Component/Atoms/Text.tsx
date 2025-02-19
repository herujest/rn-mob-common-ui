import React from 'react';
import {
  Text as RNText,
  StyleSheet,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from 'react-native';
import { useTheme } from '../../Context/ThemeContext';

interface TypographyProps extends TextProps {
  variant?:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'bodyText1'
    | 'bodyText1Bold'
    | 'bodyText2'
    | 'bodyText2Bold'
    | 'bodyText3'
    | 'bodyText3Bold'
    | 'buttonText1'
    | 'buttonText2'
    | 'percentages';
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const Text: React.FC<TypographyProps> = React.memo(
  ({ variant = 'bodyText1', style, children, ...props }) => {
    const { colors, fontConfig } = useTheme();

    const typographyStyles = StyleSheet.create({
      headline1: {
        fontFamily: fontConfig.bold,
        fontSize: 30,
        letterSpacing: 0.002,
        lineHeight: 39,
        marginBottom: 2,
      },
      headline2: {
        fontFamily: fontConfig.bold,
        fontSize: 20,
        letterSpacing: 0.012,
        lineHeight: 26,
        marginBottom: 2,
      },
      headline3: {
        fontFamily: fontConfig.bold,
        fontSize: 16,
        letterSpacing: 0,
        lineHeight: 24,
        marginBottom: 2,
      },
      bodyText1: {
        fontFamily: fontConfig.regular,
        fontSize: 16,
        letterSpacing: 0.012,
        lineHeight: 24,
        marginBottom: 2,
      },
      bodyText1Bold: {
        fontFamily: fontConfig.semiBold,
        fontSize: 16,
        letterSpacing: 0.012,
        lineHeight: 24,
        marginBottom: 2,
      },
      bodyText2: {
        fontFamily: 'NotoSans-Reguler',
        fontSize: 14,
        letterSpacing: 0.012,
        lineHeight: 21,
        marginBottom: 2,
      },
      bodyText2Bold: {
        fontFamily: fontConfig.semiBold,
        fontSize: 14,
        letterSpacing: 0.012,
        lineHeight: 21,
        marginBottom: 2,
      },
      bodyText3: {
        fontFamily: fontConfig.regular,
        fontSize: 12,
        letterSpacing: 0.012,
        lineHeight: 18,
        marginBottom: 2,
      },
      bodyText3Bold: {
        fontFamily: fontConfig.semiBold,
        fontSize: 12,
        letterSpacing: 0.012,
        lineHeight: 18,
        marginBottom: 2,
      },
      buttonText1: {
        fontFamily: fontConfig.semiBold,
        fontSize: 16,
        letterSpacing: 0.012,
        lineHeight: 24,
        marginBottom: 2,
      },
      buttonText2: {
        fontFamily: fontConfig.semiBold,
        fontSize: 12,
        letterSpacing: 0.012,
        lineHeight: 18,
        marginBottom: 2,
      },
      percentages: {
        fontFamily: fontConfig.semiBold,
        fontSize: 10,
        letterSpacing: 0.002,
        lineHeight: 10,
        marginBottom: 0,
      },
    });

    return (
      <RNText
        style={[typographyStyles[variant], { color: colors.basic5 }, style]}
        {...props}
      >
        {children}
      </RNText>
    );
  }
);

export default Text;
