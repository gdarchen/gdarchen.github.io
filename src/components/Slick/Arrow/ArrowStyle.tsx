import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()({
  arrow: {
    '& svg': {
      backgroundColor: 'white',
      height: '50px',
      width: '50px',
      borderRadius: 4,
    },

    '&::before': {
      content: 'unset',
    },
  },
});

export default useStyles;
