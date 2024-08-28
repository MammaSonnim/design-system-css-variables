import React, { createContext, useContext, useState, FC } from 'react';
import clsx from 'clsx';
import { Button } from '../button/button';
import {
  FlyoutComponentT,
  FlyoutContextT,
  ItemPropsT,
  ListPropsT,
} from './flyout.types';
import styles from './flyout.module.css';

const FlyoutContext = createContext<FlyoutContextT | null>(null);

export const Flyout: FlyoutComponentT = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const providerValue: FlyoutContextT = { isOpen, setIsOpen };

  return (
    <FlyoutContext.Provider value={providerValue}>
      <div className={clsx(styles['ds-flyout'])}>{props.children}</div>
    </FlyoutContext.Provider>
  );
};

export const useFlyout = () => {
  const context = useContext(FlyoutContext);

  if (!context) {
    throw new Error('useFlyout must be used within a FlyoutProvider');
  }

  return context;
};

const Toggle: FC = () => {
  const { isOpen, setIsOpen } = useFlyout();

  return (
    <Button shape="round" onClick={() => setIsOpen(!isOpen)}>
      <span className={styles['ds-flyout__toggle-icon']}></span>
      <span className="sr-only">Toggle</span>
    </Button>
  );
};

const List: FC<ListPropsT> = (props) => {
  const { isOpen } = useFlyout();

  return (
    isOpen && (
      <ul className={clsx(styles['ds-flyout__list'])}>{props.children}</ul>
    )
  );
};

const Item: FC<ItemPropsT> = (props) => {
  return <li className={clsx(styles['ds-flyout__item'])}>{props.children}</li>;
};

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.Item = Item;
