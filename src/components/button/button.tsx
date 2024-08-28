import React, { FC } from 'react';
import clsx from 'clsx';
import { ButtonPropsT } from './button.types';
import styles from './button.module.css';

export const Button: FC<ButtonPropsT> = ({
  variant,
  shape,
  children,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        styles['ds-button'],
        variant && styles[`ds-button--${variant}`],
        shape && styles[`ds-button--${shape}`]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
