import React, { FC } from 'react';
import clsx from 'clsx';
import { ComponentSizes, ComponentVariants } from '../../constants';
import { ButtonPropsT } from './button.types';
import styles from './button.module.css';

export const Button: FC<ButtonPropsT> = ({
  children,
  label,
  type = 'button',
  variant = ComponentVariants.DEFAULT,
  size = ComponentSizes.M,
  ariaExpanded,
  ariaLabel,
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
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-disabled={isDisabled}
      disabled={isDisabled}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
};
