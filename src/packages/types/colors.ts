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

const GREENACQUA: ColorScheme = {
  name: 'GREENACQUA',
  primaryColor: '#42A58D',
  secondaryColor: '#3C8876',
  tertiaryColor: '#85C1B3',
  quaternaryColor: '#67EECD'
};

const PINK: ColorScheme = {
  name: 'PINK',
  primaryColor: '#FF9292',
  secondaryColor: '#C67C7C',
  tertiaryColor: '#FEA6A6',
  quaternaryColor: '#FFBBBB'
};

const VIOLET: ColorScheme = {
  name: 'VIOLET',
  primaryColor: '#DB96D0',
  secondaryColor: '#C084B7',
  tertiaryColor: '#FFB1F3',
  quaternaryColor: '#FFACF2'
};

const DARKBLUE: ColorScheme = {
  name: 'DARKBLUE',
  primaryColor: '#31608B',
  secondaryColor: '#2F516F',
  tertiaryColor: '#6184A4',
  quaternaryColor: '#6F9ECA'
};
const DARKRED: ColorScheme = {
  name: 'DARKRED',
  primaryColor: '#9E4646',
  secondaryColor: '#712F2F',
  tertiaryColor: '#C66464',
  quaternaryColor: '#FA9191'
};

const LIGHTORANGE: ColorScheme = {
  name: 'LIGHTORANGE',
  primaryColor: '#F8B577',
  secondaryColor: '#E19B5A',
  tertiaryColor: '#F4C89F',
  quaternaryColor: '#FFD9B6'
};

const MILITARYGREEN: ColorScheme = {
  name: 'MILITARYGREEN',
  primaryColor: '#ADAD83',
  secondaryColor: '#81815E',
  tertiaryColor: '#BDBD92',
  quaternaryColor: '#E5E5B9'
};
export const COLORS = {
  RED,
  BLUE,
  YELLOW,
  GREEN,
  PURPLE,
  GREENACQUA,
  PINK,
  VIOLET,
  DARKBLUE,
  DARKRED,
  LIGHTORANGE,
  MILITARYGREEN
};

export const TRUE: ColorScheme = {
  name: 'TRUE',
  primaryColor: '#78EFB6',
  secondaryColor: '#278759',
  tertiaryColor: '#278759',
  quaternaryColor: '#278759'
};

export const FALSE: ColorScheme = {
  name: 'FALSE',
  primaryColor: '#F47272',
  secondaryColor: '#9E4646',
  tertiaryColor: '#9E4646',
  quaternaryColor: '#9E4646'
};

export const FIRST_QUESTION: ColorScheme = {
  name: 'FIRST_QUESTION',
  primaryColor: '#78B6EF',
  secondaryColor: '#295277',
  tertiaryColor: '#295277',
  quaternaryColor: '#295277'
};
export const SECOND_QUESTION: ColorScheme = {
  name: 'SECOND_QUESTION',
  primaryColor: '#78EFB6',
  secondaryColor: '#278759',
  tertiaryColor: '#278759',
  quaternaryColor: '#278759'
};
export const THIRD_QUESTION: ColorScheme = {
  name: 'THIRD_QUESTION',
  primaryColor: '#EDEF78',
  secondaryColor: '#7E8023',
  tertiaryColor: '#7E8023',
  quaternaryColor: '#7E8023'
};
export const FOURTH_QUESTION: ColorScheme = {
  name: 'FOURTH_QUESTION',
  primaryColor: '#EFB178',
  secondaryColor: '#9E632C',
  tertiaryColor: '#9E632C',
  quaternaryColor: '#9E632C'
};
