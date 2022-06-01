import { CardHeaderProps } from '@mui/material';
import classNames from 'classnames';
import useStyles from './CardHeaderStyle';

type Color = 'warning' | 'success' | 'danger' | 'info' | 'primary';

type Props = Omit<CardHeaderProps, 'title'> & {
  className?: string;
  color?: Color;
  plain?: boolean;
};

const CardHeader = ({ className, children, color, plain, ...rest }: Props) => {
  const { classes } = useStyles();

  const cardHeaderClasses = classNames(
    classes.cardHeader,
    color && classes[`${color}CardHeader`],
    plain && classes.cardHeaderPlain,
    className !== undefined && className
  );

  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardHeader;
