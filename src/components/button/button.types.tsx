import { ReactNode, MouseEvent } from 'react';
import { ComponentSizeT, ComponentVariantT } from '../../types';

export interface ButtonPropsT {
  children?: ReactNode;
  label?: string;
  type?: ButtonTypeT;
  variant?: ComponentVariantT;
  size?: ComponentSizeT;
  isRound?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export type ButtonTypeT = 'button' | 'submit' | 'reset';
