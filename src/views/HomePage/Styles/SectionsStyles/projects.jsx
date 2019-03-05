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
  locationIcon: {
    position: "relative",
    top: "5px"
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
    "& .vertical-timeline-element--picaerow .vertical-timeline-element-content": {
      borderTop: "3px solid #FE5530"
    },
    "& .vertical-timeline-element--whatsasi .vertical-timeline-element-content": {
      borderTop: "3px solid #E19C11"
    },
    "& .vertical-timeline-element--sostouriste .vertical-timeline-element-content": {
      borderTop: "3px solid #11E1E1"
    },
    "& .vertical-timeline-element--screenblurrer .vertical-timeline-element-content": {
      borderTop: "3px solid #7911E1"
    },
    "& .vertical-timeline-element--portableconsole .vertical-timeline-element-content": {
      borderTop: "3px solid #E11166"
    },
    "& .vertical-timeline-element--asiaventure .vertical-timeline-element-content": {
      borderTop: "3px solid #D9C42B"
    },
    "& .vertical-timeline-element--othello .vertical-timeline-element-content": {
      borderTop: "3px solid #2BD975"
    },
    "& .vertical-timeline-element--basic .vertical-timeline-element-content": {
      borderTop: "3px solid #2BCCD9"
    }
  },
  technologies: {
    textAlign: "center"
  },
  projectsContent: {
    textAlign: "justify",
    fontWeight: "unset!important"
  },
  section: {
    padding: "70px 0"
  },
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  carousel: {
    marginTop: "15px",
    cursor: "pointer"
  },
  modalHeader: {
    minHeight: "16.43px",
    paddingTop: "24px",
    paddingLeft: "24px",
    borderBottom: "none",
    paddingRight: "24px",
    paddingBottom: "0"
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
  },
  githubButton: {
    textAlign: "center"
  }
};

export default projectsStyle;
