import { LocationOn, Stars, Work } from '@mui/icons-material';
import classNames from 'classnames';
import { FaMicrophone } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import Slider, { Settings } from 'react-slick';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import Badge from '../../../../components/Badge/Badge';
import Button from '../../../../components/Button/Button';
import Grid from '../../../../components/Grid/Grid';
import GridItem from '../../../../components/Grid/GridItem/GridItem';
import Arrow from '../../../../components/Slick/Arrow/Arrow';
import projects from './ProjectsList';
import useStyles from './ProjectsStyle';

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  adaptiveHeight: true,
  prevArrow: <Arrow to="prev" />,
  nextArrow: <Arrow to="next" />,
};

const Projects = () => {
  const { classes } = useStyles();

  return (
    <div className={classNames(classes.container, classes.projectsContainer)} id="projects">
      <Grid justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.sectionTitleCentered}>Projects</h2>
        </GridItem>
      </Grid>

      <Grid justifyContent="center" className={classes.timelineZone}>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.verticalTimeline}>
            <VerticalTimeline layout="1-column">
              {projects.map((project) => (
                <VerticalTimelineElement
                  className={
                    project.classTag
                      ? `vertical-timeline-element--${project.classTag}`
                      : 'vertical-timeline-element--work'
                  }
                  date={project.dates}
                  iconStyle={{
                    background: project.color ? project.color : 'rgb(33, 150, 243)',
                    color: '#fff',
                  }}
                  icon={project.icon ? project.icon : <Work />}
                  key={`project-${project.key}`}
                >
                  {project.talk && (
                    <Badge color="danger">
                      <span className={classes.talkBadge}>
                        <FaMicrophone />
                        Talk
                      </span>
                    </Badge>
                  )}
                  <h3 className="vertical-timeline-element-title">{project.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    {project.location}
                  </h4>

                  {project.contents.map((content, key) => (
                    <p
                      className={classes.projectsContent}
                      // eslint-disable-next-line react/no-array-index-key
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
                          // eslint-disable-next-line react/no-array-index-key
                          <li key={key}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className={classes.projectsExternalResources}>
                    {project.github && (
                      <span>
                        <Button justIcon round color="github" href={project.github} target="_blank">
                          <i className="fab fa-github" />
                        </Button>
                      </span>
                    )}

                    {project.npm && (
                      <span>
                        <Button color="danger" round href={project.npm} target="_blank">
                          <i className="fab fa-npm" />
                          Package
                        </Button>
                      </span>
                    )}

                    {project.website && (
                      <span>
                        <Button round color="info" href={project.website} target="_blank">
                          <i className="fas fa-globe" />
                          Website
                        </Button>
                      </span>
                    )}

                    {project.slides && (
                      <span>
                        <Button round color="rose" href={project.slides} target="_blank">
                          <i className="fas fa-folder-open" />
                          Slides
                        </Button>
                      </span>
                    )}
                  </div>

                  {project.technologies && (
                    <p className={classes.technologies}>
                      {project.technologies.map((techno, key) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Badge key={`project-${project}-techno-${key}`}>{techno}</Badge>
                      ))}
                    </p>
                  )}

                  {project.images && (
                    <Grid justifyContent="center">
                      <GridItem xs={12} sm={12} md={8}>
                        <div>
                          <Slider {...settings} className={classes.carousel}>
                            {project.images.map((image) => (
                              <div key={`project-${project.key}-image-${image}`}>
                                <img src={image} alt="First slide" className="slick-image" />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </GridItem>
                    </Grid>
                  )}

                  {project.video && (
                    <Grid justifyContent="center">
                      <GridItem xs={12} sm={12} md={5}>
                        <div>
                          <ReactPlayer url={project.video} className={classes.reactPlayer} />
                        </div>
                      </GridItem>
                    </Grid>
                  )}
                </VerticalTimelineElement>
              ))}

              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<Stars />}
              />
            </VerticalTimeline>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Projects;
