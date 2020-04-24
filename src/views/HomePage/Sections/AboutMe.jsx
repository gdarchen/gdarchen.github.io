import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

import profile from 'assets/img/faces/gautier.jpg';

import aboutMeStyle from '../Styles/SectionsStyles/aboutMe.jsx';

class AboutMe extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
    return (
      <div className={classes.container} id="aboutMe">
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.profile}>
              <div>
                <img src={profile} alt="..." className={imageClasses} />
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <div className={classes.profileHeader}>
              <div className={classes.name}>
                <h2>About me</h2>
                <p>
                  Young engineer, I really love new technologies and the challenges they represent
                  in our current society. I particularly enjoy web development, <i>data mining</i>
                  and Devops activities.
                </p>
                <p>
                  After five years of study at INSA Rouen-Normandie in the Department of
                  Architecture of Information Systems where I specialized in the web and{' '}
                  <i>data mining</i>, I decided to realize my end of studies project at{' '}
                  <strong>Takima</strong>. The high level of technical requirements and the
                  importance of human relations in this society were two factors behind my decision
                  to embark on this adventure.
                </p>
                <p>
                  On the other hand, I was lucky to be able to follow the "Takima Academy" course, a
                  10-week training during which my skills were increased tenfold, especially those
                  around the Java, web and Devops environments. During this training, I also learned
                  about good development practices, code quality, the importance of tests, and agile
                  methodologies.
                </p>
                <p>
                  In 2020, I decided to join <strong>Kannelle</strong> and the world of startups in
                  order to have more responsibilities and get better technically.
                </p>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(aboutMeStyle)(AboutMe);
