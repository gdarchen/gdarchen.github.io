import { makeStyles } from 'tss-react/mui';
import {
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  successCardHeader,
  warningCardHeader,
} from '../../../assets/jss/MaterialKitReact/MaterialKitReact';

const useStyles = makeStyles()({
  cardHeader: {
    borderRadius: '3px',
    padding: '1rem 15px',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '-30px',
    border: '0',
    marginBottom: '0',
  },
  cardHeaderPlain: {
    marginLeft: '0px',
    marginRight: '0px',
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
});

export default useStyles;
