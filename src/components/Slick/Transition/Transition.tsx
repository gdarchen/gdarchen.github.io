import { Slide, SlideProps } from '@mui/material';

type Props = SlideProps;

const Transition = (props: Props) => {
  return <Slide direction="down" {...props} />;
};

export default Transition;
