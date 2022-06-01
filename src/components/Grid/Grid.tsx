import { Grid as MaterialGrid, GridProps } from '@mui/material';
import classNames from 'classnames';
import { ReactNode } from 'react';
import useStyles from './GridStyle';

type Props = GridProps & {
  children: string | JSX.Element[] | JSX.Element | ReactNode;
  className?: string;
};

const Grid = ({ children, className = '', ...rest }: Props) => {
  const { classes } = useStyles();

  return (
    <MaterialGrid container {...rest} className={classNames(classes.grid, className)}>
      {children}
    </MaterialGrid>
  );
};

export default Grid;
