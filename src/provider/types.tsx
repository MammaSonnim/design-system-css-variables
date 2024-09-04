import { ReactNode } from 'react';

export type CSSModuleT = {
  [className: string]: string;
};

export interface ThemeT {
  common: CSSModuleT;
  light: CSSModuleT;
  dark?: CSSModuleT;
  medium: CSSModuleT;
  small?: CSSModuleT;
  large?: CSSModuleT;
}

export type ColorSchemeT = 'light' | 'dark';
export type ScaleT = 'small' | 'medium' | 'large';

export interface DSContextT {
  theme: ThemeT;
  colorScheme: ColorSchemeT;
  scale: ScaleT;
}

export interface DSProviderT extends DSContextT {
  children: ReactNode;
}
