import { Favorite } from '@mui/icons-material';
import classNames from 'classnames';
import useStyles from './FooterStyle';

type Props = {
  whiteFont?: boolean;
};

const Footer = ({ whiteFont }: Props) => {
  const { classes } = useStyles();

  const footerClasses = classNames(classes.footer, whiteFont && classes.footerWhiteFont);
  const aClasses = classNames(classes.a, whiteFont && classes.footerWhiteFont);

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.right}>
          &copy; {new Date().getFullYear()} , made with <Favorite className={classes.icon} /> by
          Gautier using{' '}
          <a
            href="https://www.creative-tim.com"
            className={aClasses}
            target="_blank"
            rel="noreferrer"
          >
            Material Kit UI
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
