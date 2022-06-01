import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { AppBar, Box, Button, Drawer, IconButton, Toolbar } from '@mui/material';

import useStyles from './HeaderStyle';

type Color =
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'transparent'
  | 'white'
  | 'rose'
  | 'dark';

type Props = {
  changeColorOnScroll: { height: number; color: Color };
  brand: string;
  color?: Color;
  rightLinks?: JSX.Element;
  leftLinks?: JSX.Element;
  absolute?: boolean;
  fixed?: boolean;
};

const Header = ({
  changeColorOnScroll,
  brand,
  color = 'white',
  rightLinks,
  leftLinks,
  absolute,
  fixed,
}: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isTopBarDisplayed, setIsTopBarDisplayed] = useState(false);

  const { classes } = useStyles();

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      setIsTopBarDisplayed(true);
    } else {
      setIsTopBarDisplayed(false);
    }
  };

  useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }

    return () => {
      window.removeEventListener('scroll', headerColorChange);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const brandComponent = <Button className={classes.title}>{brand}</Button>;

  const appBarClasses = classNames(
    classes.appBar,
    absolute && classes.absolute,
    fixed && classes.fixed,
    !isTopBarDisplayed && classes[color],
    isTopBarDisplayed && classes[changeColorOnScroll.color]
  );

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}

        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Box sx={{ display: { sm: 'block', xs: 'none' } }}>{leftLinks}</Box>
          ) : (
            brandComponent
          )}
        </div>

        <Box sx={{ display: { sm: 'flex', xs: 'none' } }} className={classes.rightLinksContainer}>
          {rightLinks}
        </Box>

        {/* Button to open the drawer menu for small devices */}
        <Box sx={{ display: { md: 'none', sm: 'block' } }}>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Drawer on small devices */}
      <Box sx={{ display: { md: 'none', sm: 'block' } }}>
        <Drawer
          anchor="right"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Box>
    </AppBar>
  );
};

export default Header;
