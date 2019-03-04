import { container } from "assets/jss/material-kit-react.jsx";

const projectsStyle = {
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
    }
  },
  technologies: {
    textAlign: "center"
  },
  projectsContent: {
    textAlign: "justify"
  },
  section: {
    padding: "70px 0"
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  carousel: {
    marginTop: "15px"
  },
  modalCloseButton: {
    float: "right",
    cursor: "pointer",
    margin: "-1rem -1rem -1rem auto",
    border: "0",
    padding: "1rem",
    opacity: ".5",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    textShadow: "0 1px 0 #FFF",
    backgroundColor: "transparent",
    color: "#F60707",
    "&:hover": {
      color: "#870404"
    }
  }
};

export default projectsStyle;
