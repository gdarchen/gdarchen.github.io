import React from 'react';
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import contactStyle from '../Styles/SectionsStyles/contact.jsx';
import { FaLinkedin } from 'react-icons/fa';

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} id="contact">
        <div className={classes.container}>
          <GridContainer justify="center">
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
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(contactStyle)(Contact);
