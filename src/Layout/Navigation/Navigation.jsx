import React, { useState, Suspense } from 'react';
import { Button, IconButton, Menu, MenuItem, Snackbar } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Header, Logo, ButtonBox, Container, List, ListItem } from './Navigation.styled';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Spiner } from 'components/Spiner/spiner';
import { logout } from 'api/redux/auth/auth-operation';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@mui/material/Alert';
import { selectorToken } from 'api/redux/auth/auth-selector';

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isToken = useSelector(selectorToken);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickButton = link => {
    navigate(link);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickLogout = async () => {
    try {
      await dispatch(logout());
      setAnchorEl(null);
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
                <MenuItem to={'/auth/password-change'} component={NavLink} onClick={handleClose}>
                  Change Password
                </MenuItem>
                <MenuItem to={'/'} component={NavLink} onClick={() => handleClickLogout()}>
                  Log Out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Container>
      </Header>
      <Suspense fallback={<Spiner styled={{ margin: 'auto auto' }} />}>
        <Outlet />
        <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar}>
          <MuiAlert onClose={handleCloseSnackbar} severity="success">
            Logged out successfully!
          </MuiAlert>
        </Snackbar>
      </Suspense>
    </>
  );
};

export default Navigation;
