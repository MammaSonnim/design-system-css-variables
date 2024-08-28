import { ReactNode, MouseEvent } from 'react';
import { ComponentSizeT, ComponentVariantT } from '../../types';

export interface ButtonPropsT {
  children?: ReactNode;
  variant?: ComponentVariantT;
  shape?: 'square' | 'round';
  size?: ComponentSizeT;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
