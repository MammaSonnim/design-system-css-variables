import React, { FC } from 'react';
import clsx from 'clsx';
import { ButtonPropsT } from './button.types';
import styles from './button.module.css';

export const Button: FC<ButtonPropsT> = ({
  children,
  label,
  type = 'button',
  variant = 'default',
  size = 'm',
  isRound,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        styles['ds-button'],
        styles[`ds-button--${size}`],
        variant && styles[`ds-button--${variant}`],
        {
          [styles['ds-button--round']]: isRound,
          [styles['ds-button--disabled']]: isDisabled,
        }
      )}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
};
