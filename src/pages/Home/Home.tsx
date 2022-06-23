import classNames from 'classnames';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks/HeaderLinks';
import useStyles from './HomeStyle';

import ProfileBackground from '../../assets/img/profile-bg.jpg';
import EasterEgg from '../../components/EasterEgg/EasterEgg';
import Grid from '../../components/Grid/Grid';
import GridItem from '../../components/Grid/GridItem/GridItem';
import Parallax from '../../components/Parallax/Parallax';
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/Contact/Contact';
import Experiences from './sections/Experiences/Experiences';
import Footer from './sections/Footer/Footer';
import Languages from './sections/Languages/Languages';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

const Home = () => {
  const { classes } = useStyles();

  return (
    <div>
      <EasterEgg />

      <Header
        brand="Gautier Darchen"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
      />

      <Parallax image={ProfileBackground}>
        <div className={classes.container}>
          <Grid>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  Gautier Darchen <span className={classes.helloIcon}>👋</span>
                </h1>
                <h3 className={classes.subtitle}>
                  Full stack web engineer at{' '}
                  <a href="https://www.swile.co/" className={classes.link}>
                    Swile
                  </a>
                  , specialized in React, Node.js and Spring technologies.
                </h3>
              </div>
            </GridItem>
          </Grid>
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
};

export default Home;
