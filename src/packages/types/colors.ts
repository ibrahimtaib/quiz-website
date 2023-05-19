export interface ColorScheme {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  quaternaryColor: string;
}

export type ColorChoiceProps = {
  className?: string;
  colorScheme: ColorScheme;
  onClick?: () => void;
  clicked?: boolean;
};
