import { Apps } from '@mui/icons-material';
import { Stack, Tooltip, useMediaQuery } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import { headerLinks, navigationLinks } from './HeaderLinksList';

import useStyles from './HeaderLinksStyle';

const HeaderLinks = () => {
  const { classes } = useStyles();

  const largeScreen = useMediaQuery('(min-width: 900px)');

  return (
    <Stack className={classes.list} direction={largeScreen ? 'row' : 'column'}>
      <div className={classes.listItem}>
        <Dropdown
          noLiPadding
          buttonText="Navigation"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          buttonIcon={Apps}
          caret
          dropdownList={navigationLinks.map((navigationLink) => (
            <Link
              smooth
              key={navigationLink.hash}
              to={navigationLink.hash}
              className={classes.dropdownLink}
            >
              {navigationLink.label}
            </Link>
          ))}
        />
      </div>

      {headerLinks.map((headerLink) => {
        const Icon = headerLink.icon;

        return (
          <div className={classes.listItem} key={headerLink.key}>
            <Tooltip
              title={headerLink.tooltip}
              placement={largeScreen ? 'bottom' : 'left'}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                target="_blank"
                className={classes.navLink}
                href={headerLink.href}
              >
                <Icon className={classes.icons} />
                {(!largeScreen || headerLink.showTextOnLargeScreen) && headerLink.text}
              </Button>
            </Tooltip>
          </div>
        );
      })}
    </Stack>
  );
};

export default HeaderLinks;
