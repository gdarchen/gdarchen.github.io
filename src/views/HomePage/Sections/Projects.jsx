import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Work from "@material-ui/icons/Work";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Badge from "components/Badge/Badge.jsx";
import Button from "components/CustomButtons/Button.jsx";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import projectsStyle from "../Styles/SectionsStyles/projects.jsx";

function Transition(props) {
	return <Slide direction="down" {...props} />;
}

const projects = [
	/* PIC AEROW */
	{
		dates: "January 2017 - January 2018",
		title: "Redesign the web application \"Stratow\" for AEROW Solutions",
		location: "INSA Rouen-Normandie, Rouen, France",
		contents: [
			"Half-time project realized at the INSA Rouen-Normandie for the company AEROW Solutions. In a team of eight students, this ISO 9001:2015 certified project aims to set up the transition from the web platform of Electronic Document Management to MVC (Model-View-Controller) by using the Symfony framework, as well as the complete redesign of the front-end architecture (thanks to the Bootstrap framework). We developped in TDD (Test Driven Development) and the working methodology is an Agile Method named Scrum.",
			"During the first 6 months, I was Project Manager.",
		],
		technologies: [
			"Symfony", "Scrum", "PHP", "ELK",
		],
	},
	/* WhatsASI? */
	{
		dates: "January 2017 - April 2018",
		title: "Development of an instant messaging application: \"WhatsASI?\"",
		location: "INSA Rouen-Normandie, Rouen, France",
		contents: [
			"In Java 8 and using the RMI technology as part of a Distributed Computing course, creation of an instant messaging application, enabling users to chat from different machines. Users can choose a pseudo, a profile avatar, and decide in which conversation they want to chat. It is also possible to chat with an artificial intelligence (AI). Finally, the user can also select words that he wants the application to filter.",
			"There are two graphic interfaces available: one developed thanks to JavaFX, the other one to be used in a terminal.",
		],
		technologies: [
			"Java 8", "JavaFX", "AI", "RMI", "Messaging",
		],
		modalDetails: {},
	}
];

class Projects extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isModalOpened: false
		};
	}
	handleClickOpen(project) {
		this.setState({ isModalOpened: true, projectInModal: project });
	}
	handleClose() {
		this.setState({ isModalOpened: false, projectInModal: undefined });
	}

	render() {
		const { classes } = this.props;

		const { isModalOpened, projectInModal } = this.state;

		return (
			<div className={classes.container}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.sectionTitleCentered}>Projects</h2>
					</GridItem>
				</GridContainer>

				<GridContainer justify="center" className={classes.timelineZone}>
					<GridItem xs={12} sm={12} md={12}>
						<div className={classes.verticalTimeline}>
							<VerticalTimeline>
								{
									projects.map((project, key) => (
										<VerticalTimelineElement
											className="vertical-timeline-element--work"
											date={project.dates}
											iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
											icon={<Work />}
											key={`project-${key}`}
										>
											<h3 className="vertical-timeline-element-title">{project.title}</h3>
											<h4 className="vertical-timeline-element-subtitle">{project.location}</h4>
											{
												project.contents.map((content, key) => (
													<p className={classes.projectsContent} key={`project-${project}-content-${key}`}>
														{content}
													</p>
												))
											}

											{
												project.technologies && (
													<p className={classes.technologies}>
														{
															project.technologies.map((techno, key) => (
																<Badge key={`project-${project}-techno-${key}`}>{techno}</Badge>
															))
														}
													</p>
												)
											}

											{
												project.modalDetails && (
													<div>
														<Button
															color="rose"
															round
															onClick={() => this.handleClickOpen(project)}
															key={key}
														>
															Modal
													</Button>
														<Dialog
															key={`project-${project}-dialog-${key}`}
															classes={{
																root: classes.center,
																paper: classes.modal
															}}
															open={this.state.isModalOpened}
															TransitionComponent={Transition}
															keepMounted
															onClose={() => this.handleClose()}
															aria-labelledby="modal-slide-title"
															aria-describedby="modal-slide-description">
															<DialogTitle
																id="classic-modal-slide-title"
																disableTypography
																className={classes.modalHeader}>
																<IconButton
																	className={classes.modalCloseButton}
																	key="close"
																	aria-label="Close"
																	color="inherit"
																	onClick={() => this.handleClose()}>
																	<Close className={classes.modalCloseIcon} />
																</IconButton>
																<h4 className={classes.modalTitle}>{isModalOpened && projectInModal.title}</h4>
															</DialogTitle>
															<DialogContent
																id="modal-slide-description"
																className={classes.modalBody}>
																<h5>Are you sure you want to do this?</h5>
															</DialogContent>
															<DialogActions
																className={classes.modalFooter + " " + classes.modalFooterCenter}>
																<Button
																	onClick={() => this.handleClose()}
																>
																	Never Mind
															</Button>
																<Button
																	onClick={() => this.handleClose()}
																	color="success">
																	Yes
															</Button>
															</DialogActions>
														</Dialog>
													</div>
												)
											}

										</VerticalTimelineElement>
									))
								}
								{/* WhatsASI?
								<VerticalTimelineElement
									className="vertical-timeline-element--work"
									date="January 2017 - April 2018"
									iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
									icon={<Work />}
								>
									<h3 className="vertical-timeline-element-title">Development of an instant messaging application: "WhatsASI?"</h3>
									<h4 className="vertical-timeline-element-subtitle">INSA Rouen-Normandie, Rouen, France</h4>
									<p className={classes.projectsContent}>
										In Java 8 and using the RMI technology as part of a Distributed Computing course, creation of an instant messaging application, enabling users to chat from different machines. Users can choose a pseudo, a profile avatar, and decide in which conversation they want to chat. It is also possible to chat with an artificial intelligence (AI). Finally, the user can also select words that he wants the application to filter. 
									</p>
									<p className={classes.projectsContent}>
										There are two graphic interfaces available: one developed thanks to JavaFX, the other one to be used in a terminal.
									</p>
									<p className={classes.technologies}>
										<Badge>Java 8</Badge>
										<Badge>JavaFX</Badge>
										<Badge>AI</Badge>
										<Badge>RMI</Badge>
										<Badge>Messaging</Badge>
									</p>

									<Button
										color="rose"
										round
										onClick={() => this.handleClickOpen("modal")}>
										Modal
									</Button>
									<Dialog
										classes={{
											root: classes.center,
											paper: classes.modal
										}}
										open={this.state.modal}
										TransitionComponent={Transition}
										keepMounted
										onClose={() => this.handleClose("modal")}
										aria-labelledby="modal-slide-title"
										aria-describedby="modal-slide-description">
										<DialogTitle
											id="classic-modal-slide-title"
											disableTypography
											className={classes.modalHeader}>
											<IconButton
												className={classes.modalCloseButton}
												key="close"
												aria-label="Close"
												color="inherit"
												onClick={() => this.handleClose("modal")}>
												<Close className={classes.modalCloseIcon} />
											</IconButton>
											<h4 className={classes.modalTitle}>Modal title</h4>
										</DialogTitle>
										<DialogContent
											id="modal-slide-description"
											className={classes.modalBody}>
											<h5>Are you sure you want to do this?</h5>
										</DialogContent>
										<DialogActions
											className={classes.modalFooter +" " +classes.modalFooterCenter}>
											<Button
												onClick={() => this.handleClose("modal")}
											>
												Never Mind
											</Button>
											<Button
												onClick={() => this.handleClose("modal")}
												color="successNoBackground">
												Yes
											</Button>
										</DialogActions>
									</Dialog>
								</VerticalTimelineElement> */}

							</VerticalTimeline>
						</div>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(projectsStyle)(Projects);
