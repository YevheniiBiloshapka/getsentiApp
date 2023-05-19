import React, { useState, Suspense } from 'react';
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Header,
  Logo,
  ButtonBox,
  Container,
  List,
  ListItem,
} from './Navigation.styled';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Spiner } from 'components/Spiner/spiner';

const Navigation = () => {
  const navigate = useNavigate();
  const isToken = true;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickButton = link => {
    navigate(link);
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Header>
        <Container className="container">
          <Link to="/">
            <Logo />
          </Link>
          <nav>
            <List>
              <li>
                <ListItem to="/search">Search</ListItem>
              </li>
              {isToken && (
                <li>
                  <ListItem to="/history">History</ListItem>
                </li>
              )}
            </List>
          </nav>
          {!isToken && (
            <ButtonBox>
              <Button
                variant="outlined"
                size="small"
                onClick={() => handleClickButton('/auth/login')}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleClickButton('/auth/signup')}
              >
                Sign Up
              </Button>
            </ButtonBox>
          )}
          {isToken && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
              >
                <AccountBoxIcon />
                <ArrowDropDownIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  to={'/auth/password-change'}
                  component={NavLink}
                  onClick={handleClose}
                >
                  Resset password
                </MenuItem>
                <MenuItem to={'/'} component={NavLink} onClick={handleClose}>
                  Log Out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Container>
      </Header>
      <Suspense fallback={<Spiner styled={{ margin: 'auto auto' }} />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
