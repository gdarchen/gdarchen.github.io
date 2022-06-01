import { Email } from '@mui/icons-material';
import { FaLinkedin } from 'react-icons/fa';
import useStyles from './ContactStyle';

import ContactBackground from '../../../../assets/img/contact-bg.jpg';
import Button from '../../../../components/Button/Button';
import Card from '../../../../components/Card/Card';
import CardBody from '../../../../components/Card/CardBody/CardBody';
import CardHeader from '../../../../components/Card/CardHeader/CardHeader';
import Grid from '../../../../components/Grid/Grid';
import GridItem from '../../../../components/Grid/GridItem/GridItem';

const Contact = () => {
  const { classes } = useStyles({ image: ContactBackground });

  return (
    <div className={classes.section} id="contact">
      <div className={classes.container}>
        <Grid justifyContent="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Contact</h4>
              </CardHeader>
              <CardBody className={classes.cardBody}>
                <div className={classes.cardBodyRow}>
                  <div>
                    <Button justIcon round color="info">
                      <FaLinkedin className={classes.icons} />
                    </Button>
                  </div>
                  <div className={classes.cardBodyRowData}>
                    <a href="https://www.linkedin.com/in/gautierdarchen/">gautierdarchen</a>
                  </div>
                </div>
                <div className={classes.cardBodyRow}>
                  <div>
                    <Button justIcon round color="info">
                      <Email className={classes.icons} />
                    </Button>
                  </div>
                  <div className={classes.cardBodyRowData}>
                    <a href="mailto:darchen.gautier@gmail.com">darchen.gautier@gmail.com</a>
                  </div>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
