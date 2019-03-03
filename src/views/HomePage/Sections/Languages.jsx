import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

// sections for this page

import languagesStyle from "../Styles/SectionsStyles/languages.jsx";

class Languages extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.sectionTitleCentered}>Languages</h2>
					</GridItem>
				</GridContainer>

				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={12}>
						<GridContainer justify="center" alignItems="center">
							<GridItem className={classes.languageCard}>
								<Card style={{width: "20rem"}}>
									<CardHeader color="info" className={classes.cardHeader}>English</CardHeader>
									<CardBody>
										<h4 className={classes.cardTitle}>C1 - TOEIC Test</h4>
										<p className={classes.cardBody}>
											Score: 865 • December 2016
										</p>
									</CardBody>
								</Card>
							</GridItem>

							<GridItem className={classes.languageCard}>
								<Card style={{width: "20rem"}}>
									<CardHeader color="success" className={classes.cardHeader}>German</CardHeader>
									<CardBody>
										<h4 className={classes.cardTitle}>B2 - Zertifikat Deutsch</h4>
										<p className={classes.cardBody}>
											G&oelig;the-Institut • June 2013
										</p>
									</CardBody>
								</Card>
							</GridItem>

							<GridItem className={classes.languageCard}>
								<Card style={{width: "20rem"}}>
									<CardHeader color="warning" className={classes.cardHeader}>French</CardHeader>
									<CardBody>
										<h4 className={classes.cardTitle}>Mother tongue</h4>
									</CardBody>
								</Card>
							</GridItem>

						</GridContainer>
					</GridItem>
				</GridContainer>
			</div>
    );
  }
}

export default withStyles(languagesStyle)(Languages);
