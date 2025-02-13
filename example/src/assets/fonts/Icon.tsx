// This file is auto-generated. Do not edit manually.
import { Icon as OriginalIcon } from '@herujest/rn-mob-common-ui';
import type { ViewStyle } from 'react-native';
import type { IconName } from './IconTypes'; // Import generated types

interface IIconProps {
  name: IconName;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number;
  style?: ViewStyle;
}

const Icon = ({
  name,
  color,
  size,
  strokeWidth,
  offset,
  style,
}: IIconProps) => {
  return (
    <OriginalIcon
      name={name}
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      offset={offset}
      style={style}
    />
  );
};

export default Icon;
