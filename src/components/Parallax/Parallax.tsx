import classNames from 'classnames';
import { ReactNode, useEffect, useState } from 'react';
import useStyles from './ParallaxStyle';

type Props = {
  children: string | JSX.Element[] | JSX.Element | ReactNode;
  image?: string;
  className?: string;
  filter?: boolean;
  small?: boolean;
  style?: string;
};

const Parallax = ({ children, image, className, filter, small, style }: Props) => {
  const windowScrollTop = window.pageYOffset / 3;

  const [transform, setTransform] = useState(`translate3d(0,${windowScrollTop}px,0)`);

  const { classes } = useStyles();

  const resetTransform = () => {
    setTransform(`translate3d(0,${windowScrollTop}px,0)`);
  };

  useEffect(() => {
    const newWindowScrollTop = window.pageYOffset / 3;
    setTransform(`translate3d(0,${newWindowScrollTop}px,0)`);

    window.addEventListener('scroll', resetTransform);

    return () => {
      window.removeEventListener('scroll', resetTransform);
    };
  }, []);

  const parallaxClasses = classNames(
    classes.parallax,
    filter && classes.filter,
    small && classes.small,
    className !== undefined && className
  );

  return (
    <div
      className={parallaxClasses}
      style={{
        ...(style !== undefined && { style }),
        backgroundImage: `url(${image})`,
        transform,
      }}
      // ref="parallax"
    >
      {children}
    </div>
  );
};

export default Parallax;
