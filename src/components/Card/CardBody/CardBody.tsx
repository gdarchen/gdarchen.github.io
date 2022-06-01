import { CardContentProps } from '@mui/material';
import classNames from 'classnames';
import useStyles from './CardBodyStyle';

type Props = CardContentProps & {
  className?: string;
};

const CardBody = ({ className, children, ...rest }: Props) => {
  const { classes } = useStyles();
  const cardBodyClasses = classNames(classes.cardBody, className !== undefined && className);

  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
