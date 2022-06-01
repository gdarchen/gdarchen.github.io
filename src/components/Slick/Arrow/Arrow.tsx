import classNames from 'classnames';
import { GrNext, GrPrevious } from 'react-icons/gr';
import useStyles from './ArrowStyle';

type Props = {
  to: 'next' | 'prev';
  className?: string;
  onClick?: () => void;
};

const Arrow = ({ className, to, onClick }: Props) => {
  const { classes } = useStyles();

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(classes.arrow, className)}
      aria-label={to}
    >
      {to === 'next' ? <GrNext /> : <GrPrevious />}
    </button>
  );
};

export default Arrow;
