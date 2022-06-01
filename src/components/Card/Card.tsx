import { CardProps } from '@mui/material';
import classNames from 'classnames';
import useStyles from './CardStyle';

type Props = CardProps & {
  className?: string;
  plain?: boolean;
  carousel?: boolean;
};

const Card = ({ className, children, plain, carousel, ...rest }: Props) => {
  const { classes } = useStyles();

  const cardClasses = classNames(
    classes.card,
    plain && classes.cardPlain,
    carousel && classes.cardCarousel,
    className !== undefined && className
  );

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export default Card;
