import React, { useState } from 'react';
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
import { passwordReset } from 'api/AuthenticationAPI';
import { useNavigate } from 'react-router-dom';

import { object, string } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const defaultTheme = createTheme();

const emailSchema = object({
  email: string().email('Email is invalid').nonempty('Enter your email address'),
});

const Forgot = () => {
  const navigate = useNavigate();
  const [openDialogSuccess, setOpenDialogSuccess] = useState(false);
  const [openDialogError, setOpenDialogError] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const handleCloseDialogSuccess = () => {
    setOpenDialogSuccess(false);
  };

  const handleCloseDialogError = () => {
    setOpenDialogError(false);
  };

  const onSubmit = async data => {
    const body = {
      email: data.email,
    };

    passwordReset(body)
      .then(res => {
        setOpenDialogSuccess(true);
        navigate('/auth/login');
      })
      .catch(error => {
        console.log(error.response.data.email);
        setOpenDialogError(true);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          width: '100%',
          display: 'flex',
          padding: '20px',
          margin: 'auto auto',
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
          Forgot password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...register('email')}
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="login" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Dialog open={openDialogSuccess} keepMounted onClose={handleCloseDialogSuccess}>
          <DialogTitle>Password Reset</DialogTitle>
          <DialogContent>
            <Typography>
              Instructions for password reset have been sent to your email. Please follow the
              instructions to reset your password. After closing, you will be redirected to the
              login page.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogSuccess}>OK</Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openDialogError} keepMounted onClose={handleCloseDialogError}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <Typography>Failed to reset password. Please try again.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogError}>OK</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default Forgot;
