import type { StyleProp, ViewStyle } from 'react-native';

export interface IconSet {
  IcoMoonType?: string;
  height?: number;
  metadata?: object;
  preferences?: object;
  icons: Array<{
    icon: {
      paths: string[];
      attrs: any[];
      isMulticolor: boolean;
      isMulticolor2: boolean;
      grid: number;
      tags: string[];
      colorPermutations?: Record<string, {}[] | undefined>;
    };
    attrs: any[];
    properties: {
      name: string;
      order?: number;
      id: number;
      prevSize: number;
      code: number;
    };
    setIdx: number;
    setId: number;
    iconIdx: number;
  }>;
}

// type for dynamically extracting icon names
export type ExtractIconNames<T extends IconSet> =
  T['icons'][number]['properties']['name'];

export type IconName = ExtractIconNames<IconSet>;

export interface IconAttrs {
  fill?: string;
}
export interface IconMap {
  name: string;
  paths: Array<string>;
  attrs?: Array<IconAttrs>;
}

export interface IIcon extends Omit<SvgIconProps, 'iconSet' | 'name' | 'size'> {
  name: IconName;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number;
  style?: StyleProp<ViewStyle>;
}

export interface SvgIconProps {
  iconSet: IconSet;
  name: string;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number; // some icon might have different padding, use this to offset it
  width?: number;
  height?: number;
  viewBoxWidthPercentage?: number;
  viewBoxHeightPercentage?: number;
  style?: StyleProp<ViewStyle>;
}
