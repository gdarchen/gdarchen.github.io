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
import LocationOn from "@material-ui/icons/LocationOn";

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
import sosTouriste1 from "assets/img/projects/SOSTouriste/sosTouriste1.png";
import sosTouriste2 from "assets/img/projects/SOSTouriste/sosTouriste2.png";
import screenBlurrer from "assets/img/projects/ScreenBlurrer/blurrer.png";

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
    images: [whatsASI1, whatsASI2, whatsASI3],
    github: "https://github.com/gdarchen/WhatsASI"
  },
  /* SOS Touriste */
  {
    dates: "September 2016 - January 2017",
    title: "Development of an iOS application",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "In Swift language (Cocoa Touch), the aim was to develop an application for iPhone, so as to offer the users a contextual help. The targeted users are tourists visiting France (location of interest points, useful telephone numbers...)."
    ],
    technologies: ["Swift", "iOS", "Mobile"],
    images: [sosTouriste1, sosTouriste2]
  },
  /* Screen blurrer */
  {
    dates: "September 2016",
    title: "Development of a screen blurrer",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "In Python using the OpenCV library, development of an application enabling the user to use his computer and displaying the image recorded by the webcam as soon as a person appears behind him. Thus, on the displayed image, a green frame indicates the location of the new detected face so as to let the user know who is spying him.",
      'There exists two other modes as the one presented before : a "zen" mode displaying a code snapshot as soon as a third person appears behind the screen, and an "ironman" mode displaying an IronMan mask on every detected people.'
    ],
    technologies: ["OpenCV", "Python"],
    images: [screenBlurrer],
    github: "https://github.com/gdarchen/screen-blurrer"
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
              <VerticalTimeline layout="1-column">
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
                      <LocationOn className={classes.locationIcon} />
                      {project.location}
                    </h4>

                    {project.github && (
                      <div className={classes.githubButton}>
                        <Button
                          justIcon
                          round
                          color="github"
                          href={project.github}
                          target="_blank"
                        >
                          <i className="fab fa-github" />
                        </Button>
                      </div>
                    )}

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
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={5}>
                          <div>
                            <Carousel
                              {...settings}
                              className={classes.carousel}
                            >
                              {project.images.map((image, key) => (
                                <div key={`project-${project}-image-${key}`}>
                                  <img
                                    src={image}
                                    alt="First slide"
                                    className="slick-image"
                                    onClick={() =>
                                      this.handleModalOpen(project)
                                    }
                                  />
                                </div>
                              ))}
                            </Carousel>

                            {/* Modal */}
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
                                    <Close />
                                  </Button>
                                  <h4>{projectInModal.title}</h4>
                                </DialogTitle>
                                <DialogContent
                                  id="classic-modal-slide-description"
                                  className={classes.modalBody}
                                >
                                  <div>
                                    <Carousel
                                      {...settings}
                                      autoplay={false}
                                      className={classes.carousel}
                                    >
                                      {projectInModal.images.map(
                                        (image, key) => (
                                          <div
                                            key={`project-${projectInModal}-image-${key}`}
                                          >
                                            <img
                                              src={image}
                                              alt="First slide"
                                              className="slick-image"
                                              onClick={() =>
                                                this.handleModalOpen(
                                                  projectInModal
                                                )
                                              }
                                            />
                                          </div>
                                        )
                                      )}
                                    </Carousel>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            )}
                          </div>
                        </GridItem>
                      </GridContainer>
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
