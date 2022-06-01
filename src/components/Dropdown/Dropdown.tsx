import React, { useState } from 'react';

import classNames from 'classnames';

import {
  ClickAwayListener,
  Divider,
  Grow,
  Icon,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import Button from '../Button/Button';
import useStyles from './DropdownStyle';

type Color = 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose';

type Props = {
  buttonText: string | JSX.Element;
  buttonIcon: string | React.FunctionComponent<any>;
  dropdownList: any[];
  hoverColor?: Color;
  buttonProps?: any;
  dropup?: boolean;
  dropdownHeader?: JSX.Element;
  rtlActive?: boolean;
  caret?: boolean;
  left?: boolean;
  noLiPadding?: boolean;
  onClick?: (item: any) => void;
};

const Dropdown = ({
  hoverColor = 'primary',
  buttonText,
  buttonIcon,
  dropdownList,
  buttonProps,
  dropup,
  dropdownHeader,
  rtlActive,
  caret = true,
  left,
  noLiPadding,
  onClick,
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { classes } = useStyles();

  // const [isOpened, setIsOpened] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = (param: any) => {
    setAnchorEl(null);

    if (onClick) {
      onClick(param);
    }
  };

  // const handleCloseAway = (event: MouseEvent | TouchEvent) => {
  //   if (anchorEl.current === event.target) {
  //     return;
  //   }

  //   setIsOpened(false);
  // };

  const caretClasses = classNames(
    classes.caret,
    open && classes.caretActive,
    rtlActive && classes.caretRTL
  );

  const dropdownItem = classNames(
    classes.dropdownItem,
    hoverColor === 'black' && classes.blackHover,
    hoverColor === 'primary' && classes.primaryHover,
    hoverColor === 'info' && classes.infoHover,
    hoverColor === 'success' && classes.successHover,
    hoverColor === 'warning' && classes.warningHover,
    hoverColor === 'danger' && classes.dangerHover,
    hoverColor === 'rose' && classes.roseHover,
    noLiPadding && classes.noLiPadding,
    rtlActive && classes.dropdownItemRTL
  );

  let icon = null;

  switch (typeof buttonIcon) {
    case 'function':
    case 'object':
      // eslint-disable-next-line no-case-declarations
      const ButtonIcon = buttonIcon;
      icon = <ButtonIcon className={classes.buttonIcon} />;
      break;
    case 'string':
      icon = <Icon className={classes.buttonIcon}>{buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div>
      <Button
        aria-label="Notifications"
        aria-owns={open ? 'menu-list' : null}
        aria-haspopup="true"
        {...buttonProps}
        // ref={(node: any) => {
        //   anchorEl.current = node;
        // }}
        onClick={handleClick}
      >
        {icon}
        {buttonText !== undefined ? buttonText : null}
        {caret ? <b className={caretClasses} /> : null}
      </Button>

      <Popper
        open={open}
        anchorEl={anchorEl}
        disablePortal
        // eslint-disable-next-line no-nested-ternary
        placement={dropup ? (left ? 'top-start' : 'top') : left ? 'bottom-start' : 'bottom'}
        className={classNames({
          [classes.popperClose]: !open,
          [classes.popperResponsive]: true,
        })}
      >
        <Grow
          in={open}
          id="menu-list"
          style={dropup ? { transformOrigin: '0 100% 0' } : { transformOrigin: '0 0 0' }}
        >
          <Paper className={classes.dropdown}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList role="menu" className={classes.menuList}>
                {dropdownHeader !== undefined ? (
                  <MenuItem
                    onClick={() => handleClose(dropdownHeader)}
                    className={classes.dropdownHeader}
                  >
                    {dropdownHeader}
                  </MenuItem>
                ) : null}
                {dropdownList.map((prop, key) => {
                  if (prop.divider) {
                    return (
                      <Divider
                        // eslint-disable-next-line react/no-array-index-key
                        key={`prop-${key}`}
                        onClick={() => handleClose('divider')}
                        className={classes.dropdownDividerItem}
                      />
                    );
                  }
                  return (
                    <MenuItem
                      // eslint-disable-next-line react/no-array-index-key
                      key={`prop-${key}`}
                      onClick={() => handleClose(prop)}
                      className={dropdownItem}
                    >
                      {prop}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      </Popper>
    </div>
  );
};

export default Dropdown;
