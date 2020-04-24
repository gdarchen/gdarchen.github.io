import "../Styles/SectionsStyles/projects.style.css";
import React from "react";
import PropTypes from "prop-types";

import Carousel from "react-slick";
// nodejs library that concatenates classes
import classNames from "classnames";
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
import Stars from "@material-ui/icons/Stars";

import ReactPlayer from "react-player";

import {
  FaFileInvoice,
  FaAppStoreIos,
  FaUserShield,
  FaJava,
  FaLaptopCode,
  FaCloud,
  FaMicrophone,
  FaMicrophoneAlt,
} from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { GiJoystick, GiConwayLifeGlider, GiBackForth } from "react-icons/gi";
import { GoTerminal } from "react-icons/go";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Badge from "components/Badge/Badge.jsx";
import Button from "components/CustomButtons/Button.jsx";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import projectsStyle from "../Styles/SectionsStyles/projects.jsx";

import whatsASI1 from "assets/img/projects/WhatsASI/ir_whatsasi.png";
import whatsASI2 from "assets/img/projects/WhatsASI/ir_whatsasi_connexion.png";
import whatsASI3 from "assets/img/projects/WhatsASI/ir_whatsasi_filtres.png";
import sosTouriste1 from "assets/img/projects/SOSTouriste/sosTouriste1.png";
import sosTouriste2 from "assets/img/projects/SOSTouriste/sosTouriste2.png";
import screenBlurrer from "assets/img/projects/ScreenBlurrer/blurrer.png";
import elec from "assets/img/projects/PortableConsole/console1.png";
import ASIaventure from "assets/img/projects/ASIAventure/ASIaventure.png";
import othello from "assets/img/projects/Othello/othello.png";
import bASIc from "assets/img/projects/bASIc/bASIc.png";
import memory from "assets/img/projects/Memory/memory.png";
import bigDataCFS1 from "assets/img/projects/bigDataCFS/bigDataCFS1.png";
import bigDataCFS2 from "assets/img/projects/bigDataCFS/bigDataCFS2.png";
import bigDataCFS3 from "assets/img/projects/bigDataCFS/bigDataCFS3.png";
import chronos1 from "assets/img/projects/ihmeChronos/chronos1.png";
import chronos2 from "assets/img/projects/ihmeChronos/chronos2.png";
import chronos3 from "assets/img/projects/ihmeChronos/chronos3.png";
import chronos4 from "assets/img/projects/ihmeChronos/chronos4.png";
import reacli1 from "assets/img/projects/reacli/reacli1.png";
import reacli2 from "assets/img/projects/reacli/reacli2.png";
import reacli3 from "assets/img/projects/reacli/reacli3.png";
import reacli4 from "assets/img/projects/reacli/reacli4.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: true,
};

const projects = [
  /* Talk WebUSB */
  {
    dates: "December 2019 - today",
    title:
      "Talk — Interaction between a web app and a hand-made NFC USB Reader : WebUSB to the rescue!",
    location: "Paris, France",
    contents: [
      "When developing a tool that interacts with an external device, we are usually forced to develop fat clients or use containers like Electron.",
      "Why not use the browser directly?",
      "Yes, your browsers, including Chrome, have more and more APIs to access the native parts of your equipment.",
      "Come discover the WebUSB API through a simple example: the realization of a NFC card reader with 100% of web code.",
    ],
    technologies: ["JavaScript", "WebUSB", "API", "NFC", "Arduino", "React"],
    icon: <FaMicrophoneAlt />,
    video: "https://youtu.be/SzDmtHeKXQgs",
    slides:
      "https://slides.com/gautierdarchen/communicate-a-nfc-reader-with-a-web-application",
    github: "https://github.com/gdarchen/webusb-arduino-nfc",
    classTag: "talk-webusb",
    color: "#1df582",
    events: [
      "Node.js Paris Meetup",
      "React.js Paris Meetup",
      "Takima Meetup",
      "Devoxx 2020",
    ],
  },
  /* Reacli */
  {
    dates: "February 2019",
    title: "Reacli - A React CLI",
    location: "Paris, France",
    contents: [
      'With two friends, we created and maintain an NPM library, "Reacli".',
      "It is a CLI for React, enabling to create components, hooks... and customize it with a lot of options!",
    ],
    technologies: ["JavaScript", "React", "Jest", "NPM"],
    icon: <GoTerminal />,
    images: [reacli1, reacli2, reacli3, reacli4],
    github: "https://github.com/reacli/cli",
    website: "https://reacli.github.io",
    npm: "https://www.npmjs.com/package/reacli",
    classTag: "reacli",
    color: "#e2819d",
  },
  /* Chronos agent */
  {
    dates: "Septembre 2018 - January 2019",
    title: "Virtual agent",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "At INSA Rouen, we created a mobile application to propose a virtual agent with whom we can discuss. It is possible to ask it to set up an alarm. It asks the questions oriented to have all the necessary information.",
      "The buzzer associated with the alarm will match the weather of the user's location when it rings.",
    ],
    technologies: ["react-native", "javascript", "dialogflow", "Node.js"],
    icon: <FaMicrophone />,
    images: [chronos1, chronos2, chronos3, chronos4],
    github: "https://github.com/alexandre-lelain/ihme-agent-assistant",
    classTag: "chronos",
    color: "#697dbc",
  },
  /* BigData CFS */
  {
    dates: "Septembre 2018 - January 2019",
    title: "Big Data and tweet in real time",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "At INSA Rouen, we worked with Cassandra File System so as to analyze a big amount of tweets and evualuate a global valence.",
      "We are then able to say if the majority of the people who have tweeted are for or against a given subject.",
    ],
    technologies: ["CFS", "BigData", "Python3", "Docker"],
    icon: <FaCloud />,
    images: [bigDataCFS1, bigDataCFS2, bigDataCFS3],
    github: "https://github.com/gdarchen/BigData-CFS",
    classTag: "bigdataCFS",
    color: "#97ba00",
  },
  /* PIC AEROW */
  {
    dates: "January 2017 - January 2018",
    title: 'Redesign the web application "Stratow" for AEROW Solutions',
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "Half-time project realized at the INSA Rouen-Normandie for the company AEROW Solutions. In a team of eight students, this ISO 9001:2015 certified project aims to set up the transition from the web platform of Electronic Document Management to MVC (Model-View-Controller) by using the Symfony framework, as well as the complete redesign of the front-end architecture (thanks to the Bootstrap framework). We developped in TDD (Test Driven Development) and the working methodology is an Agile Method named Scrum.",
      "During the first 6 months, I was Project Manager.",
    ],
    technologies: ["Symfony", "Scrum", "PHP", "ELK"],
    icon: <FaFileInvoice />,
    classTag: "picaerow",
    color: "#FE5530",
  },
  /* WhatsASI? */
  {
    dates: "January 2017 - April 2018",
    title: 'Development of an instant messaging application: "WhatsASI?"',
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "In Java 8 and using the RMI technology as part of a Distributed Computing course, creation of an instant messaging application, enabling users to chat from different machines. Users can choose a pseudo, a profile avatar, and decide in which conversation they want to chat. It is also possible to chat with an artificial intelligence (AI). Finally, the user can also select words that he wants the application to filter.",
      "There are two graphic interfaces available: one developed thanks to JavaFX, the other one to be used in a terminal.",
    ],
    technologies: ["Java 8", "JavaFX", "AI", "RMI", "Messaging"],
    images: [whatsASI1, whatsASI2, whatsASI3],
    github: "https://github.com/gdarchen/WhatsASI",
    icon: <TiMessages />,
    classTag: "whatsasi",
    color: "#E19C11",
  },
  /* SOS Touriste */
  {
    dates: "September 2016 - January 2017",
    title: "Development of an iOS application",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "In Swift language (Cocoa Touch), the aim was to develop an application for iPhone, so as to offer the users a contextual help. The targeted users are tourists visiting France (location of interest points, useful telephone numbers...).",
    ],
    technologies: ["Swift", "iOS", "Mobile"],
    images: [sosTouriste1, sosTouriste2],
    icon: <FaAppStoreIos />,
    classTag: "sostouriste",
    color: "#11E1E1",
  },
  /* Screen blurrer */
  {
    dates: "September 2016",
    title: "Development of a screen blurrer",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "In Python using the OpenCV library, development of an application enabling the user to use his computer and displaying the image recorded by the webcam as soon as a person appears behind him. Thus, on the displayed image, a green frame indicates the location of the new detected face so as to let the user know who is spying him.",
      'There exists two other modes as the one presented before : a "zen" mode displaying a code snapshot as soon as a third person appears behind the screen, and an "ironman" mode displaying an IronMan mask on every detected people.',
    ],
    technologies: ["OpenCV", "Python"],
    images: [screenBlurrer],
    github: "https://github.com/gdarchen/screen-blurrer",
    icon: <FaUserShield />,
    classTag: "screenblurrer",
    color: "#7911E1",
  },
  /* Portable game console */
  {
    dates: "January 2016 - May 2016",
    title: "Portable game console",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "Complete designing of a Breakout clone using an Arduino Mega driven with an analog joystick: designing the electronic circuits, choosing and buying electronic components, designing a 3D-printed housing, development of a Breakout-style game in the Arduino language.",
    ],
    technologies: ["Arduino", "3D", "Electronics"],
    images: [elec],
    github: "https://github.com/gdarchen/breakout",
    icon: <GiJoystick />,
    classTag: "portableconsole",
    color: "#E11166",
  },
  /* Mini adventure game */
  {
    dates: "October 2015 - January 2016",
    title: "Development of mini adventure game",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "In Java 8, creation of a mini terminal adventure game in a team of 2 members. The game demonstrates most of Java 8 possibilities.",
    ],
    technologies: ["Java 8"],
    images: [ASIaventure],
    github: "https://github.com/gdarchen/ASIAventure",
    icon: <FaJava />,
    classTag: "asiaventure",
    color: "#D9C42B",
  },
  /* Othello */
  {
    dates: "October 2015 - January 2016",
    title: "Development of an Othello game",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "In language C and using the V-Model, set up a version of the Othello game with an artificial intelligence (AI) with the Min-Max algorithm.",
    ],
    technologies: ["C", "Min-max", "AI", "V-Model"],
    images: [othello],
    github: "https://github.com/gdarchen/othello",
    icon: <GiConwayLifeGlider />,
    classTag: "othello",
    color: "#2BD975",
  },
  /* bASIc Compiler */
  {
    dates: "October 2015 - January 2016",
    title: "Conception of a bASIc personal compiler",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "Using Lex and Yacc, creation of a personal compiler named bASIc. It can recognise simple boolean expressions (if - then - else) and can handle inputs and outputs.",
    ],
    technologies: ["Lex", "Yacc", "Compiler"],
    images: [bASIc],
    github: "https://github.com/gdarchen/bASIc-compiler",
    icon: <FaLaptopCode />,
    classTag: "basic",
    color: "#2BCCD9",
  },
  /* Memory game */
  {
    dates: "October 2014 - January 2015",
    title: "Conception of a Memory game",
    location: "INSA Rouen-Normandie, Rouen, France",
    contents: [
      "Using Pascal and SDL, development of a Memory game. This game proposes 3 different levels, and manages a ranking.",
    ],
    technologies: ["Lex", "Yacc", "Compiler"],
    images: [memory],
    github: "https://github.com/gdarchen/bASIc-compiler",
    icon: <GiBackForth />,
  },
];

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
      projectInModal: undefined,
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
      <div
        className={classNames(classes.container, classes.projectsContainer)}
        id="projects"
      >
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
                    className={
                      project.classTag
                        ? `vertical-timeline-element--${project.classTag}`
                        : "vertical-timeline-element--work"
                    }
                    date={project.dates}
                    iconStyle={{
                      background: project.color
                        ? project.color
                        : "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                    icon={project.icon ? project.icon : <Work />}
                    key={`project-${key}`}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {project.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      <LocationOn className={classes.locationIcon} />
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

                    {project.events && (
                      <div className={classes.projectsEvents}>
                        <span className={classes.eventsTitle}>Events:</span>
                        <ul key={`project-${project}-events`}>
                          {project.events.map((event, key) => (
                            <li key={key}>
                              <strong>{event}</strong>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className={classes.projectsExternalResources}>
                      {project.github && (
                        <span>
                          <Button
                            justIcon
                            round
                            color="github"
                            href={project.github}
                            target="_blank"
                          >
                            <i className="fab fa-github" />
                          </Button>
                        </span>
                      )}

                      {project.npm && (
                        <span>
                          <Button
                            color="danger"
                            round
                            href={project.npm}
                            target="_blank"
                          >
                            <i className="fab fa-npm" />
                            Package
                          </Button>
                        </span>
                      )}

                      {project.website && (
                        <span>
                          <Button
                            round
                            color="info"
                            href={project.website}
                            target="_blank"
                          >
                            <i className="fas fa-globe" />
                            Website
                          </Button>
                        </span>
                      )}

                      {project.slides && (
                        <span>
                          <Button
                            round
                            color="rose"
                            href={project.slides}
                            target="_blank"
                          >
                            <i className="fas fa-folder-open" />
                            Slides
                          </Button>
                        </span>
                      )}
                    </div>

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
                        <GridItem xs={12} sm={12} md={8}>
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
                                  paper: classes.modal,
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

                    {project.video && (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={5}>
                          <div>
                            <ReactPlayer
                              url={project.video}
                              className={classes.reactPlayer}
                            />
                          </div>
                        </GridItem>
                      </GridContainer>
                    )}
                  </VerticalTimelineElement>
                ))}

                <VerticalTimelineElement
                  iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                  icon={<Stars />}
                />
              </VerticalTimeline>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(projectsStyle)(Projects);
