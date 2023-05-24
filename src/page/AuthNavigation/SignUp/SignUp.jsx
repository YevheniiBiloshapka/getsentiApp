import * as React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { registerUser } from 'api/registerUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const SignUp = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');

  const handleDialogClose = () => {
    setOpenDialog(false);
    if (severity === 'success') {
      navigate('/auth/login');
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get('email'),
      password: data.get('password'),
      password_confirm: data.get('password_confirm'),
    };

    registerUser(userData)
      .then(res => {
        setMessage('An email has been sent to your inbox. Please check your email.');
        setSeverity('success');
        setOpenDialog(true);
      })
      .catch(error => {
        setSeverity('error');
        setMessage(error.response.data.email);
        setOpenDialog(true);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          margin: 'auto auto',
          padding: '20px',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          maxWidth: '390px',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password_confirm"
                label="Confirm the password"
                type="password"
                id="password_confirm"
                autoComplete="password_confirm"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item xs>
              <Link href="login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Success</DialogTitle>
          <DialogContent>
            <Typography>{message}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>OK</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
