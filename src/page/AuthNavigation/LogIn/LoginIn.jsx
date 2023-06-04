import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'api/redux/auth/auth-operation';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Avatar, Button, TextField, Link, Box, Grid, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const loginSchema = object({
  email: string().nonempty('This field is required.').email('Please enter a valid email address.'),
  password: string().nonempty('This field is required.'),
});

const LoginIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector(state => state.auth);

  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (auth.isLoggedIn) {
      setOpen(true);
      navigate('/');
    }

    if (auth.error) {
      setOpen(true);
    }
  }, [auth.isLoggedIn, navigate, auth.error]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = data => {
    dispatch(login(data));
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
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            {...register('email')}
            error={Boolean(errors?.email)}
            helperText={errors?.email?.message}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            {...register('password')}
            error={Boolean(errors?.password)}
            helperText={errors?.password?.message}
          />

          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='password-reset' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs>
              <Link href='signup' variant='body2'>
                {'Don\'t have an account? Sign Up'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}   anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <MuiAlert onClose={handleClose} severity="error">
          {auth.error?.non_field_errors}
        </MuiAlert>
      </Snackbar>
    </ThemeProvider>
  );
};
export default LoginIn;
