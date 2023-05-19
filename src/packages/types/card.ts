import { ReactNode } from 'react';
import { ColorScheme } from './colors';

export type CardProps = {
  children?: ReactNode;
  className?: string;
  colorScheme?: ColorScheme;
  horizontal?: boolean;
};
