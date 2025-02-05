import React, { useMemo } from 'react';
import { Path, Svg } from 'react-native-svg';
import { useTheme } from '../../Context';
import type { IconMap, IconSet, IIcon, SvgIconProps } from './Icon.types';

const SvgIcon: React.FC<SvgIconProps> = ({
  iconSet,
  size = 32,
  color,
  name,
  offset = 0,
  strokeWidth = 1,
  width,
  height,
  viewBoxWidthPercentage,
  viewBoxHeightPercentage,
  style,
}) => {
  if (!iconSet || !name) {
    console.error('The "iconSet" and "name" props are required.');
    return null;
  }

  const viewBoxMax = 1024;
  const localOffset = (offset / 2) * -viewBoxMax;
  const offsetedViewBox = viewBoxMax - localOffset;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentIcon: IconMap | undefined = useMemo(() => {
    return iconSet.icons
      .map((i: any) => {
        return {
          name: i.properties.name,
          paths: i.icon.paths,
          attrs: i.attrs,
        } as IconMap;
      })
      .find((i: IconMap) => {
        return i.name === name;
      });
  }, [iconSet, name]);

  if (currentIcon === undefined) {
    return null;
  }

  const paths = currentIcon.paths.map((p, i) => {
    return (
      <Path
        key={String(i)}
        d={p}
        strokeWidth={5 * strokeWidth}
        stroke={color || currentIcon.attrs?.[i]?.fill}
        fill={color || currentIcon.attrs?.[i]?.fill}
      />
    );
  });

  const svgWidth = width || height || size;
  const svgHeight = height || width || size;
  const viewBoxWidth = viewBoxWidthPercentage
    ? offsetedViewBox * viewBoxWidthPercentage
    : offsetedViewBox;
  const viewBoxHeight = viewBoxHeightPercentage
    ? offsetedViewBox * viewBoxHeightPercentage
    : offsetedViewBox;

  return (
    <Svg
      width={String(svgWidth)}
      height={String(svgHeight)}
      style={style}
      viewBox={`${localOffset} ${localOffset} ${viewBoxWidth} ${viewBoxHeight}`}
    >
      {paths}
    </Svg>
  );
};

export function iconList(iconSet: IconSet) {
  if (iconSet && Array.isArray(iconSet.icons)) {
    return iconSet.icons.map((icon) => icon.properties.name);
  }
  return null;
}

export default function Icon({
  name,
  color,
  size,
  strokeWidth,
  offset,
  height,
  width,
  viewBoxWidthPercentage,
  viewBoxHeightPercentage,
  style,
}: IIcon) {
  const { iconSet } = useTheme();
  const sizeIcon = size || 15;

  return (
    <SvgIcon
      iconSet={iconSet}
      name={name}
      color={color}
      size={sizeIcon}
      strokeWidth={strokeWidth}
      offset={offset}
      width={width}
      height={height}
      viewBoxWidthPercentage={viewBoxWidthPercentage}
      viewBoxHeightPercentage={viewBoxHeightPercentage}
      style={style}
    />
  );
}
