/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import classNames from "classnames";

// import {Link} from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Apps, CloudDownload} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({...props}) {
  const {classes} = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Navigation"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="#aboutMe" className={classes.dropdownLink}>
              About me
            </Link>,
            <Link to="#contact" className={classes.dropdownLink}>
              Contact
            </Link>,
            <Link to="#experiences" className={classes.dropdownLink}>
              Experiences
            </Link>,
            <Link to="#languages" className={classes.dropdownLink}>
              Languages
            </Link>,
            <Link to="#projects" className={classes.dropdownLink}>
              Projects
            </Link>,
            <Link to="#skills" className={classes.dropdownLink}>
              Skills
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="download-resume"
          title="Download my résumé"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            onClick={() => alert('NOT IMPLEMENTED YET')}
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons}/> Résumé
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="@GDarchen"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            href="https://twitter.com/gdarchen"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"}/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-github"
          title="gdarchen"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            href="https://github.com/gdarchen"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"}/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-linkedin"
          title="Gautier Darchen"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            color="transparent"
            href="https://www.linkedin.com/in/gautierdarchen/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"}/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Gautier Darchen"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/gautier.darchen"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"}/>
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="@g_darchen"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{tooltip: classes.tooltip}}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/g_darchen/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"}/>
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
