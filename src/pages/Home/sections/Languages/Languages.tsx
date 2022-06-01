import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody/CardBody';
import CardHeader from '../../../../components/Card/CardHeader/CardHeader';
import Grid from '../../../../components/Grid/Grid';
import GridItem from '../../../../components/Grid/GridItem/GridItem';
import { languages } from './LanguagesList';
import useStyles from './LanguagesStyle';

const Langugages = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container} id="languages">
      <Grid justifyContent="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.sectionTitleCentered}>Languages</h2>
        </GridItem>
      </Grid>

      <Grid justifyContent="center">
        <GridItem xs={12} sm={12} md={12}>
          <Grid justifyContent="center" alignItems="center">
            {languages.map((language) => (
              <GridItem className={classes.languageCard} key={language.name}>
                <Card style={{ width: '20rem' }}>
                  <CardHeader color={language.color} className={classes.cardHeader}>
                    {language.name}
                  </CardHeader>
                  <CardBody>
                    <h4 className={classes.cardTitle}>{language.description}</h4>
                    {language.extra && <p className={classes.cardBody}>{language.extra}</p>}
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Langugages;
