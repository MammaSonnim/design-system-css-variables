import { ReactNode, FC, Dispatch, SetStateAction } from 'react';

export interface FlyoutContextT {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface FlyoutPropsT {
  children: ReactNode;
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
