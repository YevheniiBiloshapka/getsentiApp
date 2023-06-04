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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { object, string } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { REACT_APP_SERVER_URL } from 'api/config';


// TODO: make 'This field is required.' a constant
const schema = object({
  email: string().nonempty('This field is required.').email('Please enter a valid email address.'),
  password: string()
    .nonempty('This field is required.')
    .min(8, 'Password must contain at least 8 characters'),
  password_confirm: string()
    .nonempty('This field is required.')
    .min(8, 'Password must contain at least 8 characters'),
}).refine(data => data.password === data.password_confirm, {
  path: ['password_confirm'],
  message: 'Password mismatch',
});

const defaultTheme = createTheme();

const SignUp = () => {
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate('/auth/login');
  };

  const onSubmit = async data => {
    const registerUser = async userData => {
      try {
        await axios.post(`${REACT_APP_SERVER_URL}/api/authentication/signup/`, userData);
        setOpenDialog(true);
      } catch (error) {
        setFormErrors(error.response.data);
      }
    };

    registerUser(data);
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
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                {...register('email')}
                error={!!errors.email || !!formErrors?.email}
                helperText={errors.email?.message || (formErrors && formErrors.email ? formErrors.email[0] : null)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='new-password'
                {...register('password')}
                error={!!errors.password || !!formErrors?.password}
                helperText={errors.password?.message || (formErrors && formErrors.password ? formErrors.password[0] : null)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password_confirm'
                label='Confirm the password'
                type='password'
                id='password_confirm'
                autoComplete='password_confirm'
                {...register('password_confirm')}
                error={!!errors.password_confirm || !!formErrors?.password_confirm}
                helperText={errors.password_confirm?.message || (formErrors && formErrors.password_confirm ? formErrors.password_confirm[0] : null)}
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item xs>
              <Link href='login' variant='body2'>
                Already have an account? Sign in.
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Success</DialogTitle>
          <DialogContent>
            <Typography>An email has been sent to your inbox. Please check your email.</Typography>
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
