import { ReactNode } from 'react';

export type CSSModuleT = {
  [className: string]: string;
};

export interface ThemeT {
  common: CSSModuleT;
  light?: CSSModuleT;
  dark?: CSSModuleT;
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
