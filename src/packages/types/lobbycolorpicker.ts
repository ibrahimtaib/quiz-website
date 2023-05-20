import { Dispatch, SetStateAction } from 'react';
import { ColorScheme } from './colors';
export type LobbyColorPickerProps = {
  userColor: ColorScheme;
  setUserColor: Dispatch<SetStateAction<ColorScheme>>;
  takenColors?: ColorScheme[];
};
