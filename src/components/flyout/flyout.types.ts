import { ReactNode, FC, Dispatch, SetStateAction } from 'react';
import { ComponentSizeT } from '../../types';

export interface FlyoutContextT {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  size: ComponentSizeT;
}

export interface FlyoutPropsT {
  children: ReactNode;
  size?: ComponentSizeT;
}

export interface FlyoutComponentT extends FC<FlyoutPropsT> {
  Toggle: FC;
  List: FC<ListPropsT>;
  Item: FC<ItemPropsT>;
}

export interface ListPropsT {
  children: ReactNode;
}

export interface ItemPropsT {
  children: ReactNode;
}
