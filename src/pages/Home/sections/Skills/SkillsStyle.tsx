import { makeStyles } from 'tss-react/mui';
import { container } from '../../../../assets/jss/MaterialKitReact/MaterialKitReact';

const useStyles = makeStyles()({
  container,
  sectionTitleCentered: {
    textAlign: 'center',
    marginTop: '30px!important',
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
    fontWeight: 'bold',
  },
  cardBody: {
    textAlign: 'center',
  },
  skillCategoryCard: {
    width: 'unset',
    marginBottom: '20px',
  },
  skillGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  skill: {
    marginLeft: '5px',
    marginRight: '5px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    alignItems: 'center',
    '& svg': {
      fontSize: '2em',
    },
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});

export default useStyles;
