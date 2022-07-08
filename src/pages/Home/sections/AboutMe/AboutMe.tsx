import classNames from 'classnames';
import Grid from '../../../../components/Grid/Grid';
import GridItem from '../../../../components/Grid/GridItem/GridItem';
import useStyles from './AboutMeStyle';

import ProfileImage from '../../../../assets/img/gdarchen.png';

const AboutMe = () => {
  const { classes } = useStyles();

  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);

  return (
    <div className={classes.container} id="aboutMe">
      <Grid justifyContent="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <div>
              <img src={ProfileImage} alt="Profile" className={imageClasses} />
            </div>
          </div>
        </GridItem>

        <GridItem xs={12} sm={12} md={8}>
          <div className={classes.profileHeader}>
            <div>
              <h2>About me</h2>
              <p>
                Young engineer, I really love new technologies and the challenges they represent in
                our current society. I particularly enjoy web development, <i>data mining</i>
                and Devops activities.
              </p>
              <p>
                After five years of study at INSA Rouen-Normandie in the Department of Architecture
                of Information Systems where I specialized in the web and <i>data mining</i>, I
                decided to realize my end of studies project at <strong>Takima</strong>. The high
                level of technical requirements and the importance of human relations in this
                society were two factors behind my decision to embark on this adventure.
              </p>
              <p>
                On the other hand, I was lucky to be able to follow the &quot;Takima Academy&quot;
                course, a 10-week training during which my skills were increased tenfold, especially
                those around the Java, web and Devops environments. During this training, I also
                learned about good development practices, code quality, the importance of tests, and
                agile methodologies.
              </p>
              <p>
                From 2018 to 2020, I worked at <strong>Cartier</strong> as a consultant, where I
                built several fullstack applications to improve the working conditions and
                performance of craftsmen in luxury jewelry manufacturing workshops.
              </p>
              <p>
                In 2020, I decided to join <strong>Kannelle</strong> and the world of startups in
                order to have more responsibilities and get better technically. I was in charge of
                developing from scratch an administration platform enabling to configure the
                experience within the mobile application, as well as a video editor. During the
                mission, I was also given the responsibility for the back-end, DevOps and cloud
                architecture.
              </p>
              <p>
                In 2022, I took part in a great adventure by joining a french unicorn:{' '}
                <strong>Swile</strong> 🦄. Working in the &quot;Places&quot; team as a full stack
                engineer, I am in charge of developing many features related to the geolocation of
                the restaurants and shops affiliated with Swile, enhancing the existing product,
                contributing to the roadmap, etc.
              </p>
            </div>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default AboutMe;
