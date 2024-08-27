import { ReactNode } from 'react';

export type CSSModuleT = {
  [className: string]: string;
};

export interface ThemeT {
  default: CSSModuleT;
}

export interface ContextT {
  theme?: ThemeT;
  colorScheme?: string;
}

export interface ProviderT {
  theme?: ThemeT;
  colorScheme?: string;
  children: ReactNode;
}
