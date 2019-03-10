import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import AboutMe from "./Sections/AboutMe.jsx";
import Contact from "./Sections/Contact.jsx";

import homePageStyle from "./Styles/homePage.jsx";
import Experiences from "./Sections/Experiences.jsx";
import Languages from "./Sections/Languages.jsx";
import Projects from "./Sections/Projects.jsx";
import Skills from "./Sections/Skills";

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          brand="Gautier Darchen"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/profile-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Gautier Darchen</h1>
                  <h3 className={classes.subtitle}>
                    Full stack web engineer at{" "}
                    <a href="https://takima.fr" className={classes.link}>
                      Takima
                    </a>
                    , specialized in React, Node.js and Spring technologies.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <AboutMe />
          <Contact />
          <Experiences />
          <Languages />
          <Projects />
          <Skills />
        </div>
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(homePageStyle)(HomePage);
