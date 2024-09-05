import React, { createContext, useContext, useState, FC } from 'react';
import clsx from 'clsx';
import { ComponentSizes } from '../../constants';
import { Button } from '../button/button';
import {
  FlyoutComponentT,
  FlyoutContextT,
  ItemPropsT,
  ListPropsT,
} from './flyout.types';
import styles from './flyout.module.css';

const FlyoutContext = createContext<FlyoutContextT | null>(null);

export const Flyout: FlyoutComponentT = ({
  children,
  size = ComponentSizes.M,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const providerValue: FlyoutContextT = { isOpen, setIsOpen, size };

  return (
    <FlyoutContext.Provider value={providerValue}>
      <div className={clsx(styles['ds-flyout'], styles[`ds-flyout--${size}`])}>
        {children}
      </div>
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
  const { isOpen, setIsOpen, size } = useFlyout();

  return (
    <Button
      size={size}
      isRound
      ariaLabel={isOpen ? 'Collapse Flyout' : 'Expand Flyout'}
      ariaExpanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={clsx(
          styles['ds-flyout__toggle-icon'],
          styles[`ds-flyout__toggle-icon--${size}`]
        )}
      />
    </Button>
  );
};

const List: FC<ListPropsT> = (props) => {
  const { isOpen, size } = useFlyout();

  return (
    isOpen && (
      <ul
        className={clsx(
          styles['ds-flyout__list'],
          styles[`ds-flyout__list--${size}`]
        )}
      >
        {props.children}
      </ul>
    )
  );
};

const Item: FC<ItemPropsT> = (props) => {
  const { size } = useFlyout();

  return (
    <li
      className={clsx(
        styles['ds-flyout__item'],
        styles[`ds-flyout__item--${size}`]
      )}
    >
      {props.children}
    </li>
  );
};

Flyout.Toggle = Toggle;
Flyout.List = List;
Flyout.Item = Item;
