import type { StyleProp, TextProps, TextStyle } from 'react-native';

export type TypographyStyle = {
  fontFamily?: string;
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
  marginBottom?: number;
};

export type TypographyTheme = {
  headline1: TypographyStyle;
  headline2: TypographyStyle;
  headline3: TypographyStyle;
  bodyText1: TypographyStyle;
  bodyText1Bold: TypographyStyle;
  bodyText2: TypographyStyle;
  bodyText2Bold: TypographyStyle;
  bodyText3: TypographyStyle;
  bodyText3Bold: TypographyStyle;
  buttonText1: TypographyStyle;
  buttonText2: TypographyStyle;
  percentages: TypographyStyle;
};

export interface TypographyProps extends TextProps {
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
