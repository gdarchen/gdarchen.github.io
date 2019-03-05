import { container } from "assets/jss/material-kit-react.jsx";

const experiencesStyle = {
  container,
  sectionTitleCentered: {
    textAlign: "center"
  },
  timelineZone: {
    backgroundColor: "rgb(227, 227, 227)",
    borderRadius: "5px"
  },
  verticalTimeline: {
    "& .vertical-timeline--two-columns .vertical-timeline-element-content .vertical-timeline-element-date": {
      left: "145%!important",
      right: "auto!important"
    },
    "& .vertical-timeline--two-columns .vertical-timeline-element:nth-child(even):not(.vertical-timeline-element--left) .vertical-timeline-element-content .vertical-timeline-element-date": {
      right: "145%!important",
      left: "auto!important"
    },
    "& .vertical-timeline-element--work .vertical-timeline-element-content": {
      borderTop: "3px solid #2196f3"
    },
    "& .vertical-timeline-element--education .vertical-timeline-element-content": {
      borderTop: "3px solid #e91e63"
    },
    "& .vertical-timeline-element--highschool .vertical-timeline-element-content": {
      borderTop: "3px solid #d47d35"
    },
    "& .vertical-timeline-element--bimandco .vertical-timeline-element-content": {
      borderTop: "3px solid #D9C42B"
    },
    "& .vertical-timeline-element--picaerow .vertical-timeline-element-content": {
      borderTop: "3px solid #2BB9D9"
    },
    "& .vertical-timeline-element--asi .vertical-timeline-element-content": {
      borderTop: "3px solid #D92B2B"
    },
    "& .vertical-timeline-element--prepa .vertical-timeline-element-content": {
      borderTop: "3px solid #C365B9"
    }
  },
  technologies: {
    textAlign: "center"
  },
  experienceContent: {
    textAlign: "justify",
    fontWeight: "unset!important"
  },
  locationIcon: {
    position: "relative",
    top: "5px"
  }
};

export default experiencesStyle;
