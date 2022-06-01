import { makeStyles } from 'tss-react/mui';

import { imageStyle } from '../../../../assets/jss/MaterialKitReact/components/ImageStyle';
import { container } from '../../../../assets/jss/MaterialKitReact/MaterialKitReact';

const useStyles = makeStyles()({
  container,
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)',
    },
  },
  profileHeader: {
    textAlign: 'justify',
  },
  ...imageStyle,
});

export default useStyles;
