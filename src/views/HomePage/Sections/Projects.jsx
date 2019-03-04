import React from "react";
import PropTypes from "prop-types";

import Carousel from "react-slick";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

// @material-ui/icons
import Work from "@material-ui/icons/Work";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Badge from "components/Badge/Badge.jsx";
import Button from "components/CustomButtons/Button.jsx";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import projectsStyle from "../Styles/SectionsStyles/projects.jsx";

import whatsASI1 from "assets/img/projects/WhatsASI/ir_whatsasi.png";
import whatsASI2 from "assets/img/projects/WhatsASI/ir_whatsasi_connexion.png";
import whatsASI3 from "assets/img/projects/WhatsASI/ir_whatsasi_filtres.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const projects = [
  /* PIC AEROW */
  {
    dates: "January 2017 - January 2018",
    title: 'Redesign the web application "Stratow" for AEROW Solutions',
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "Half-time project realized at the INSA Rouen-Normandie for the company AEROW Solutions. In a team of eight students, this ISO 9001:2015 certified project aims to set up the transition from the web platform of Electronic Document Management to MVC (Model-View-Controller) by using the Symfony framework, as well as the complete redesign of the front-end architecture (thanks to the Bootstrap framework). We developped in TDD (Test Driven Development) and the working methodology is an Agile Method named Scrum.",
      "During the first 6 months, I was Project Manager."
    ],
    technologies: ["Symfony", "Scrum", "PHP", "ELK"]
  },
  /* WhatsASI? */
  {
    dates: "January 2017 - April 2018",
    title: 'Development of an instant messaging application: "WhatsASI?"',
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "In Java 8 and using the RMI technology as part of a Distributed Computing course, creation of an instant messaging application, enabling users to chat from different machines. Users can choose a pseudo, a profile avatar, and decide in which conversation they want to chat. It is also possible to chat with an artificial intelligence (AI). Finally, the user can also select words that he wants the application to filter.",
      "There are two graphic interfaces available: one developed thanks to JavaFX, the other one to be used in a terminal."
    ],
    technologies: ["Java 8", "JavaFX", "AI", "RMI", "Messaging"],
    images: [whatsASI1, whatsASI2, whatsASI3]
  }
];

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
      projectInModal: undefined
    };
  }
  handleModalOpen(project) {
    this.setState({ isModalOpened: true, projectInModal: project });
  }
  handleModalClose() {
    this.setState({ isModalOpened: false, projectInModal: undefined });
  }

  render() {
    const { classes } = this.props;
    const { isModalOpened, projectInModal } = this.state;

    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.sectionTitleCentered}>Projects</h2>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center" className={classes.timelineZone}>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.verticalTimeline}>
              <VerticalTimeline>
                {projects.map((project, key) => (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={project.dates}
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff"
                    }}
                    icon={<Work />}
                    key={`project-${key}`}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {project.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {project.location}
                    </h4>
                    {project.contents.map((content, key) => (
                      <p
                        className={classes.projectsContent}
                        key={`project-${project}-content-${key}`}
                      >
                        {content}
                      </p>
                    ))}

                    {project.technologies && (
                      <p className={classes.technologies}>
                        {project.technologies.map((techno, key) => (
                          <Badge key={`project-${project}-techno-${key}`}>
                            {techno}
                          </Badge>
                        ))}
                      </p>
                    )}

                    {project.images && (
                      <div>
                        <Carousel {...settings} className={classes.carousel}>
                          {project.images.map((image, key) => (
                            <div key={`project-${project}-image-${key}`}>
                              <img
                                src={image}
                                alt="First slide"
                                className="slick-image"
                                onClick={() => this.handleModalOpen(project)}
                              />
                            </div>
                          ))}
                        </Carousel>

                        {isModalOpened && (
                          <Dialog
                            classes={{
                              root: classes.modalRoot,
                              paper: classes.modal
                            }}
                            open={isModalOpened}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => this.handleModalClose()}
                            aria-labelledby="classic-modal-slide-title"
                            aria-describedby="classic-modal-slide-description"
                          >
                            <DialogTitle
                              id="classic-modal-slide-title"
                              disableTypography
                              className={classes.modalHeader}
                            >
                              <Button
                                simple
                                className={classes.modalCloseButton}
                                key="close"
                                aria-label="Close"
                                onClick={() => this.handleModalClose()}
                              >
                                {" "}
                                <Close className={classes.modalClose} />
                              </Button>
                            </DialogTitle>
                            <DialogContent
                              id="classic-modal-slide-description"
                              className={classes.modalBody}
                            >
                              <p>Woohoo, youre reading this text in a modal!</p>
                            </DialogContent>
                          </Dialog>
                        )}
                      </div>
                    )}
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(projectsStyle)(Projects);
