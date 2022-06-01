import { keyframes } from 'tss-react';
import { makeStyles } from 'tss-react/mui';

import { container } from '../../assets/jss/MaterialKitReact/MaterialKitReact';

const useStyles = makeStyles()({
  container,
  brand: {
    color: '#FFFFFF',
    textAlign: 'left',
  },
  title: {
    fontSize: '4.2rem',
    fontWeight: '600',
    display: 'inline-block',
    position: 'relative',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0 0',
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    '@media (max-width: 767px)': {
      margin: '0',
    },
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  link: {
    textDecoration: 'none',
    color: '#00ffd6',
    '&:hover': {
      color: '#007057',
    },
  },
  textCenter: {
    textAlign: 'center',
  },
  helloIcon: {
    animation: `${keyframes`
      0% { transform: rotate( 0.0deg) }
      10% { transform: rotate(14.0deg) }
      20% { transform: rotate(-8.0deg) }
      30% { transform: rotate(14.0deg) }
      40% { transform: rotate(-4.0deg) }
      50% { transform: rotate(10.0deg) }
      60% { transform: rotate( 0.0deg) }
      100% { transform: rotate( 0.0deg) }
    `} 2.5s infinite`,
    transformOrigin: '70% 70%',
    display: 'inline-block',
  },
});

export default useStyles;
