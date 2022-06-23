import { makeStyles } from 'tss-react/mui';
import { container } from '../../../../assets/jss/MaterialKitReact/MaterialKitReact';

const useStyles = makeStyles()({
  container,
  experienceContainer: {
    maxWidth: 'unset',
  },
  sectionTitleCentered: {
    textAlign: 'center',
    marginTop: '30px!important',
  },
  timelineZone: {
    backgroundColor: 'rgb(227, 227, 227)',
  },
  verticalTimeline: {
    '& .vertical-timeline--two-columns .vertical-timeline-element-content .vertical-timeline-element-date':
      {
        left: '135%!important',
        right: 'auto!important',
        textAlign: 'left',
      },
    '& .vertical-timeline--two-columns .vertical-timeline-element:nth-of-type(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date':
      {
        right: '135%!important',
        left: 'auto!important',
      },
    '& .vertical-timeline-element-title': {
      textAlign: 'left',
    },
    '& .vertical-timeline-element-subtitle': {
      textAlign: 'left',
    },
    '& .vertical-timeline-element--work-swile .vertical-timeline-element-content': {
      borderTop: '3px solid black',
      borderImage:
        'linear-gradient(90deg,#ce55b0,#f34dac 17%,#f48e66 32%,#f0b832 43%,#b2ce37 59%,#63d7af 75%,#1cc2df 89%,#0580e6) 20',
      background:
        'linear-gradient(#FFF 0 0) padding-box, linear-gradient(90deg,#ce55b0,#f34dac 17%,#f48e66 32%,#f0b832 43%,#b2ce37 59%,#63d7af 75%,#1cc2df 89%,#0580e6) border-box',
    },
    '& .vertical-timeline-element--work-swile-icon': {
      color: '#fff',
      background: 'black',
      boxShadow: '0 3px 1px 0px rgb(0 0 0 / 12%)',
      height: 68,
      width: 68,
      marginLeft: -34,
      [`@media screen and (max-width: 1170px)`]: {
        height: 48,
        width: 48,
        marginLeft: -4,
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '50px',
        padding: '4px' /* control the border thickness */,
        background:
          'linear-gradient(90deg,#ce55b0,#f34dac 17%,#f48e66 32%,#f0b832 43%,#b2ce37 59%,#63d7af 75%,#1cc2df 89%,#0580e6)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
      },
    },
    '& .vertical-timeline-element--work-kannelle .vertical-timeline-element-content': {
      borderTop: '3px solid #00e183',
    },
    '& .vertical-timeline-element--work-takima .vertical-timeline-element-content': {
      borderTop: '3px solid #2196f3',
    },
    '& .vertical-timeline-element--education .vertical-timeline-element-content': {
      borderTop: '3px solid #e91e63',
    },
    '& .vertical-timeline-element--highschool .vertical-timeline-element-content': {
      borderTop: '3px solid #d47d35',
    },
    '& .vertical-timeline-element--bimandco .vertical-timeline-element-content': {
      borderTop: '3px solid #D9C42B',
    },
    '& .vertical-timeline-element--picaerow .vertical-timeline-element-content': {
      borderTop: '3px solid #2BB9D9',
    },
    '& .vertical-timeline-element--asi .vertical-timeline-element-content': {
      borderTop: '3px solid #D92B2B',
    },
    '& .vertical-timeline-element--prepa .vertical-timeline-element-content': {
      borderTop: '3px solid #C365B9',
    },
  },
  technologies: {
    textAlign: 'center',
  },
  experienceContent: {
    textAlign: 'justify',
    fontWeight: 'unset!important',
  },
  locationIcon: {
    position: 'relative',
    top: '5px',
  },
});

export default useStyles;
