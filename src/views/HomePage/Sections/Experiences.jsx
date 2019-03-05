import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Work from "@material-ui/icons/Work";
import School from "@material-ui/icons/School";
import Create from "@material-ui/icons/Create";
import Stars from "@material-ui/icons/Stars";
import LocationOn from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Badge from "components/Badge/Badge.jsx";

// import Button from "components/CustomButtons/Button.jsx";
// sections for this page

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import experiencesStyle from "../Styles/SectionsStyles/experiences.jsx";

class Experiences extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.sectionTitleCentered}>
              Work experience &amp; Education
            </h2>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center" className={classes.timelineZone}>
          <GridItem xs={12} sm={12} md={12}>
            <div className={classes.verticalTimeline}>
              <VerticalTimeline>
                {/* Job at Takima */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="July 2018 - today"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<Work />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Full stack web engineer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    Takima, Paris, France
                  </h4>
                  <p className={classes.experienceContent}>
                    Working for Cartier Joaillerie International, I developed
                    several applications to improve the time management in
                    workshops or gain a lot of time in the processes of
                    logistics.
                  </p>
                  <p className={classes.experienceContent}>
                    Using Devops methodology, I was also in charge of setting up
                    a new technological stack at the IS pole
                  </p>
                  <p className={classes.technologies}>
                    <Badge>Node.js</Badge>
                    <Badge>React</Badge>
                    <Badge>Electron</Badge>
                    <Badge>Jest</Badge>
                    <Badge>Git</Badge>
                    <Badge>NFC</Badge>
                    <Badge>Sass</Badge>
                    <Badge>SQLServer</Badge>
                  </p>
                </VerticalTimelineElement>

                {/* Takima academy */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="February 2018 - July 2018"
                  iconStyle={{ background: "#e91e63", color: "#fff" }}
                  icon={<School />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Engineering internship - "Takima Academy" training
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    Takima, Paris, France
                  </h4>
                  <div
                    className={classes.experienceContent}
                    style={{ marginTop: "1em" }}
                  >
                    Project training in the following areas:
                    <ul>
                      <li>back-end development</li>
                      <li>front-end development</li>
                      <li>Devops activities</li>
                      <li>working methodologies</li>
                    </ul>
                  </div>
                  <p className={classes.technologies}>
                    <Badge>Java</Badge>
                    <Badge>Spring/SpringBoot</Badge>
                    <Badge>JDBC</Badge>
                    <Badge>ORM</Badge>
                    <Badge>ES6</Badge>
                    <Badge>AngularJS</Badge>
                    <Badge>Angular</Badge>
                    <Badge>i18n</Badge>
                    <Badge>Gitlab-CI</Badge>
                    <Badge>Jenkins</Badge>
                    <Badge>Ansible</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Docker-Compose</Badge>
                    <Badge>Scrum</Badge>
                    <Badge>TDD</Badge>
                    <Badge>load-testing</Badge>
                    <Badge>Git workflow</Badge>
                  </p>
                </VerticalTimelineElement>

                {/* Specialty internship */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="Juny 2017 - August 2017"
                  iconStyle={{ background: "#e91e63", color: "#fff" }}
                  icon={<School />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Specialty internship in Germany
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    BIM&amp;CO - KiM GmbH, Sankt-Wendel, Germany
                  </h4>
                  <p className={classes.experienceContent}>
                    Development of two plugins for the CAD software Allplan® in
                    the field of BIM objects (
                    <i>Building Information Modeling</i>)
                  </p>
                  <p className={classes.technologies}>
                    <Badge>C++</Badge>
                    <Badge>MFC</Badge>
                    <Badge>JSON</Badge>
                    <Badge>XML</Badge>
                  </p>
                </VerticalTimelineElement>

                {/* Project Manager */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="all year 2017"
                  iconStyle={{ background: "#e91e63", color: "#fff" }}
                  icon={<School />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Project Manager (ISO 9001:2015 certified)
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    AEROW Solutions (with INSA Rouen-Normandie), Rouen, France
                  </h4>
                  <p className={classes.experienceContent}>
                    Redesign a web application for Electronic Document
                    Management (team of 8 people)
                  </p>
                  <p className={classes.technologies}>
                    <Badge>Symfony</Badge>
                    <Badge>Scrum</Badge>
                    <Badge>PHP</Badge>
                    <Badge>Elasticsearch</Badge>
                    <Badge>Logstash</Badge>
                    <Badge>Kibana</Badge>
                  </p>
                </VerticalTimelineElement>

                {/* Specialization in ASI */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2015 - 2017"
                  iconStyle={{ background: "#e91e63", color: "#fff" }}
                  icon={<School />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Specialization in Architecture of Information Systems
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    INSA Rouen-Normandie, Rouen, France
                  </h4>
                </VerticalTimelineElement>

                {/* Preparatory cycle */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2013 - 2015"
                  iconStyle={{ background: "#e91e63", color: "#fff" }}
                  icon={<School />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Preparatory cycle for engineering schools
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    INSA Rouen-Normandie, Rouen, France
                  </h4>
                </VerticalTimelineElement>

                {/* Baccalaureate */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--highschool"
                  date="2013"
                  iconStyle={{ background: "#d47d35", color: "#fff" }}
                  icon={<Create />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Scientific Baccalaureate — Baccalaureate with distinction
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    Lycée Saint-Joseph, Le Havre, France
                  </h4>
                  <p className={classes.experienceContent}>
                    German european class, specialty in natural sciences
                  </p>
                </VerticalTimelineElement>

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

export default withStyles(experiencesStyle)(Experiences);
