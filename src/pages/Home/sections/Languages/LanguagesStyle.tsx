import { makeStyles } from 'tss-react/mui';
import { container } from '../../../../assets/jss/MaterialKitReact/MaterialKitReact';

const useStyles = makeStyles()({
  container,
  sectionTitleCentered: {
    textAlign: 'center',
  },
  title: {
    color: '#3C4858',
    margin: '1.75rem 0 0.875rem',
    textDecoration: 'none',
    fontWeight: '700',
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
  cardTitle: {
    color: '#3C4858',
    margin: '1.75rem 0 0.875rem',
    textDecoration: 'none',
    fontWeight: '700',
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
    marginTop: '.625rem',
    textAlign: 'center',
  },
  cardHeader: {
    textAlign: 'center',
    fontVariant: 'small-caps',
    fontWeight: 'bold',
  },
  cardBody: {
    textAlign: 'center',
  },
  languageCard: {
    width: 'unset',
  },
});

export default useStyles;
