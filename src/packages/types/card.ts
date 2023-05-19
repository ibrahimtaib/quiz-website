import { CSSProperties, ReactNode } from 'react';
import { ColorScheme } from './colors';

/* Allow placing children */
type FlexDisplayCSSProperties = {
  display?: CSSProperties['display'];
  flex?: CSSProperties['flex'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  justifyItems?: CSSProperties['justifyItems'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  gap?: CSSProperties['gap'];
  flexWrap?: CSSProperties['flexWrap'];
};

type GridDisplayCSSProperties = {
  display?: CSSProperties['display'];
  gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
  gridTemplateRows?: CSSProperties['gridTemplateRows'];
  gridTemplateAreas?: CSSProperties['gridTemplateAreas'];
  gridAutoColumns?: CSSProperties['gridAutoColumns'];
  gridAutoRows?: CSSProperties['gridAutoRows'];
  gridAutoFlow?: CSSProperties['gridAutoFlow'];
  placeItems?: CSSProperties['placeItems'];
};

/* Allow card resizing */
type SizeCSSProperties = {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  aspectRatio?: CSSProperties['aspectRatio'];
};
/* Allow text styling */
type TextCSSProperties = {
  color?: CSSProperties['color'];
  fontSize?: CSSProperties['fontSize'];
  fontFamily?: CSSProperties['fontFamily'];
  fontWeight?: CSSProperties['fontWeight'];
  fontStyle?: CSSProperties['fontStyle'];
  textDecoration?: CSSProperties['textDecoration'];
  textAlign?: CSSProperties['textAlign'];
  textShadow?: CSSProperties['textShadow'];
};
export type CardProps = {
  children?: ReactNode;
  // displayStyle?: FlexDisplayCSSProperties;
  // cardStyle?: SizeCSSProperties;
  style?: FlexDisplayCSSProperties &
    GridDisplayCSSProperties &
    SizeCSSProperties &
    TextCSSProperties;
  colorScheme?: ColorScheme;
  horizontal?: boolean;
};