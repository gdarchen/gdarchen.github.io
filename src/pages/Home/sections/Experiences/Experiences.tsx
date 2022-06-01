import { LocationOn } from '@mui/icons-material';
import classNames from 'classnames';
import { FaRocket } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from '../../../../components/Badge/Badge';
import Grid from '../../../../components/Grid/Grid';
import GridItem from '../../../../components/Grid/GridItem/GridItem';
import { experiences } from './ExperiencesList';
import useStyles from './ExperiencesStyle';

const Experiences = () => {
  const { classes } = useStyles();

  return (
    <div className={classNames(classes.container, classes.experienceContainer)} id="experiences">
      <Grid justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.sectionTitleCentered}>Work experience &amp; Education</h2>
        </GridItem>
      </Grid>

      <Grid justifyContent="center" className={classes.timelineZone}>
        <GridItem xs={12} sm={12} md={12}>
          <div className={classes.verticalTimeline}>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  className={experience.className}
                  date={experience.date}
                  iconStyle={experience.iconStyle}
                  icon={experience.icon}
                  key={experience.date}
                >
                  <h3 className="vertical-timeline-element-title">{experience.title}</h3>

                  <h4 className="vertical-timeline-element-subtitle">
                    <LocationOn className={classes.locationIcon} />
                    {experience.location}
                  </h4>

                  {experience.description && (
                    <div className={classes.experienceContent}>{experience.description}</div>
                  )}

                  {experience.technologies && experience.technologies.length > 0 && (
                    <div className={classes.technologies}>
                      {experience.technologies?.map((technology) => (
                        <Badge key={technology}>{technology}</Badge>
                      ))}
                    </div>
                  )}
                </VerticalTimelineElement>
              ))}

              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FaRocket />}
              />
            </VerticalTimeline>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Experiences;
