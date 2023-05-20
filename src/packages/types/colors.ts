export interface ColorScheme {
  name: string;
  /* Main color */
  primaryColor: string;
  /* Darker */
  secondaryColor: string;
  /* Lighter */
  tertiaryColor: string;
  /* Even lighter */
  quaternaryColor: string;
}

export type ColorChoiceProps = {
  className?: string;
  colorScheme: ColorScheme;
  onClick?: () => void;
  clicked?: boolean;
};

const RED: ColorScheme = {
  name: 'RED',
  primaryColor: '#FE5959',
  secondaryColor: '#D05959',
  tertiaryColor: '#FF9494',
  quaternaryColor: '#FDC8C8'
};
const BLUE: ColorScheme = {
  name: 'BLUE',
  primaryColor: '#708FFF',
  secondaryColor: '#8292CC',
  tertiaryColor: '#ABBDFC',
  quaternaryColor: '#C4D1FE'
};
const YELLOW: ColorScheme = {
  name: 'YELLOW',
  primaryColor: '#FEF757',
  secondaryColor: '#E9E46F',
  tertiaryColor: '#FFFB94',
  quaternaryColor: '#FEFBB9'
};
const GREEN: ColorScheme = {
  name: 'GREEN',
  primaryColor: '#70DE49',
  secondaryColor: '#97DD7E',
  tertiaryColor: '#A7F98B',
  quaternaryColor: '#CCFFBA'
};
const PURPLE: ColorScheme = {
  name: 'PURPLE',
  primaryColor: '#DD71D2',
  secondaryColor: '#CA68C0',
  tertiaryColor: '#FF9FF5',
  quaternaryColor: '#FFBFF9'
};

export const COLORS = {
  RED,
  BLUE,
  YELLOW,
  GREEN,
  PURPLE
};
