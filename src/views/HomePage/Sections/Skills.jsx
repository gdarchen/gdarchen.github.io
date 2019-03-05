import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import skillsStyle from "../Styles/SectionsStyles/skills.jsx";

import PropTypes from "prop-types";

import {
  FaJsSquare,
  FaJava,
  FaReact,
  FaNodeJs,
  FaLeaf,
  FaDocker,
  FaJenkins,
  FaCode,
  FaBezierCurve,
  FaFileCode,
  FaAngular,
  FaPhp,
  FaLinux,
  FaApple,
  FaPython,
  FaWindows,
  FaGitlab,
  FaGit,
  FaSass,
  FaCss3Alt,
  FaHtml5,
  FaCuttlefish,
  FaFeather,
  FaCube,
  FaCheckCircle,
  FaRedoAlt, FaAppStore, FaDatabase
} from "react-icons/fa";

import { GiSandSnake } from "react-icons/gi";
import { IoIosConstruct } from "react-icons/io";

// sections for this page

const advancedSkills = [
  { text: "JavaScript", icon: <FaJsSquare /> },
  { text: "React", icon: <FaReact /> },
  { text: "Node.js", icon: <FaNodeJs /> },
  { text: "TypeScript", icon: <FaCode /> },
  { text: "Java", icon: <FaJava /> },
  { text: "Spring", icon: <FaLeaf /> },
  { text: "Maven", icon: <FaFeather /> },
  { text: "Docker", icon: <FaDocker /> },
  { text: "Jenkins", icon: <FaJenkins /> },
  { text: "Gitlab CI", icon: <FaGitlab /> },
  { text: "Git", icon: <FaGit /> },
  { text: "SonarQube", icon: <FaCube /> },
  { text: "Sass", icon: <FaSass /> },
  { text: "CSS", icon: <FaCss3Alt /> },
  { text: "HTML", icon: <FaHtml5 /> },
  { text: "Matlab", icon: <FaBezierCurve /> },
  { text: "LaTeX", icon: <FaFileCode /> },
  { text: "Linux", icon: <FaLinux /> },
  { text: "Mac OSX", icon: <FaApple /> },
  { text: "Windows", icon: <FaWindows /> },
  { text: "Scrum", icon: <FaRedoAlt /> },
  { text: "TDD", icon: <FaCheckCircle /> },
  { text: "SQL", icon: <FaDatabase /> }
];

const intermediateSkills = [
  { text: "Angular", icon: <FaAngular /> },
  { text: "PHP", icon: <FaPhp /> },
  { text: "C", icon: <FaCuttlefish /> },
  { text: "C++", icon: <IoIosConstruct /> },
  { text: "Python", icon: <FaPython /> },
  { text: "Django", icon: <GiSandSnake /> },
  { text: "Swift", icon: <FaAppStore /> }
];

class Skills extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container} id="skills">
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.sectionTitleCentered}>Skills</h2>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justify="center" alignItems="center">
              <GridItem className={classes.skillCategoryCard}>
                <Card style={{ width: "20rem" }}>
                  <CardHeader color="success" className={classes.cardHeader}>
                    Advanced
                  </CardHeader>
                  <CardBody>
                    <div className={classes.skillGroup}>
                      {advancedSkills.map((skill, key) => (
                        <div
                          className={classes.skill}
                          key={`skill-advanced-${key}`}
                        >
                          {skill.icon}
                          {skill.text}
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem className={classes.skillCategoryCard}>
                <Card style={{ width: "20rem" }}>
                  <CardHeader color="warning" className={classes.cardHeader}>
                    Intermediate
                  </CardHeader>
                  <CardBody>
                    <div className={classes.skillGroup}>
                      {intermediateSkills.map((skill, key) => (
                        <div
                          className={classes.skill}
                          key={`skill-advanced-${key}`}
                        >
                          {skill.icon}
                          {skill.text}
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(skillsStyle)(Skills);
