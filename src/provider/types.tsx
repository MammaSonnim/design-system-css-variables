import { Dispatch, ReactNode, SetStateAction } from 'react';

export type CSSModuleT = {
  [className: string]: string;
};

export interface ThemeT {
  common: CSSModuleT;
  light: CSSModuleT; // default
  dark?: CSSModuleT;
  medium: CSSModuleT; // default
  small?: CSSModuleT;
  large?: CSSModuleT;
}

export type ColorSchemeT = 'light' | 'dark';
export type ScaleT = 'small' | 'medium' | 'large';

export interface DSContextT {
  theme: ThemeT;
  colorScheme: ColorSchemeT;
  scale: ScaleT;
  setTheme: Dispatch<SetStateAction<ThemeT>>;
  setColorScheme: Dispatch<SetStateAction<ColorSchemeT>>;
  setScale: Dispatch<SetStateAction<ScaleT>>;
}

export interface DSProviderT {
  children: ReactNode;
  theme: ThemeT;
  colorScheme?: ColorSchemeT;
  scale?: ScaleT;
}
