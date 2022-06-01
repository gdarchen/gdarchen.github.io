import classNames from 'classnames';

import { Button as MaterialButton, ButtonProps } from '@mui/material';
import React, { ReactNode, Ref } from 'react';
import useStyles from './ButtonStyle';

type Color =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'rose'
  | 'white'
  | 'facebook'
  | 'twitter'
  | 'google'
  | 'github'
  | 'transparent';

type Props = Omit<ButtonProps, 'color'> & {
  color: Color;
  children: string | JSX.Element[] | JSX.Element | ReactNode;
  target?: string;
  size?: 'sm' | 'lg';
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  className?: string;
};

const Button = React.forwardRef(
  (
    {
      color,
      round,
      children,
      fullWidth,
      disabled,
      simple,
      size,
      block,
      link,
      justIcon,
      className,
      ...rest
    }: Props,
    ref: Ref<any>
  ) => {
    const { classes } = useStyles();

    const btnClasses = classNames(
      classes.button,
      round && classes.round,
      fullWidth && classes.fullWidth,
      disabled && classes.disabled,
      simple && classes.simple,
      block && classes.block,
      link && classes.link,
      justIcon && classes.justIcon,
      size === 'sm' && classes.sm,
      size === 'lg' && classes.lg,
      color === 'primary' && classes.primary,
      color === 'info' && classes.info,
      color === 'success' && classes.success,
      color === 'warning' && classes.warning,
      color === 'danger' && classes.danger,
      color === 'rose' && classes.rose,
      color === 'white' && classes.white,
      color === 'facebook' && classes.facebook,
      color === 'twitter' && classes.twitter,
      color === 'github' && classes.github,
      color === 'transparent' && classes.transparent,
      className && className
    );

    return (
      <MaterialButton {...rest} className={btnClasses} ref={ref}>
        {children}
      </MaterialButton>
    );
  }
);

export default Button;
