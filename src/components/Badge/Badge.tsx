import classNames from 'classnames';
import { ReactNode } from 'react';
import useStyles from './BadgeStyle';

type Color = 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose' | 'gray';

type Props = {
  children: string | JSX.Element[] | JSX.Element | ReactNode;
  color?: Color;
};

const Badge = ({ color = 'gray', children }: Props) => {
  const { classes } = useStyles();

  return <span className={classNames(classes.badge, classes[color])}>{children}</span>;
};

export default Badge;
