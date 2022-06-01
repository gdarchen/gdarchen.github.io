import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody/CardBody';
import CardHeader from '../../../../components/Card/CardHeader/CardHeader';
import Grid from '../../../../components/Grid/Grid';
import GridItem from '../../../../components/Grid/GridItem/GridItem';
import { advancedSkills, intermediateSkills } from './SkillsList';
import useStyles from './SkillsStyle';

const Skills = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container} id="skills">
      <Grid justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.sectionTitleCentered}>Skills</h2>
        </GridItem>
      </Grid>

      <Grid justifyContent="center">
        <GridItem xs={12} sm={12} md={12}>
          <Grid justifyContent="center" alignItems="center">
            <GridItem className={classes.skillCategoryCard}>
              <Card style={{ width: '20rem' }}>
                <CardHeader color="success" className={classes.cardHeader}>
                  Advanced
                </CardHeader>
                <CardBody>
                  <div className={classes.skillGroup}>
                    {advancedSkills.map((skill) => (
                      <div className={classes.skill} key={`skill-advanced-${skill.text}`}>
                        {skill.icon}
                        {skill.text}
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </GridItem>

            <GridItem className={classes.skillCategoryCard}>
              <Card style={{ width: '20rem' }}>
                <CardHeader color="warning" className={classes.cardHeader}>
                  Intermediate
                </CardHeader>
                <CardBody>
                  <div className={classes.skillGroup}>
                    {intermediateSkills.map((skill) => (
                      <div className={classes.skill} key={`skill-advanced-${skill.text}`}>
                        {skill.icon}
                        {skill.text}
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Skills;
