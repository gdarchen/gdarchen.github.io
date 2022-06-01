import { Grid as MaterialGrid, GridProps } from '@mui/material';
import classNames from 'classnames';
import { ReactNode } from 'react';
import useStyles from './GridItemStyle';

type Props = GridProps & {
  children: string | JSX.Element[] | JSX.Element | ReactNode;
  className?: string;
};

const GridItem = ({ children, className = '', ...rest }: Props) => {
  const { classes } = useStyles();

  return (
    <MaterialGrid item {...rest} {...rest} className={classNames(classes.grid, className)}>
      {children}
    </MaterialGrid>
  );
};

export default GridItem;
