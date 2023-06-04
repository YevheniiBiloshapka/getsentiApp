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
  DialogActions, Snackbar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { object, string } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { REACT_APP_SERVER_URL } from 'api/config';
import MuiAlert from '@mui/material/Alert';

const defaultTheme = createTheme();

const emailSchema = object({
  email: string().nonempty('This field is required.').email('Please enter a valid email address.'),
});

const Forgot = () => {
  const navigate = useNavigate();

  const [openDialogSuccess, setOpenDialogSuccess] = useState(false);
  const [resetFormErrors, setResetFormErrors] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const handleCloseDialogSuccess = () => {
    setOpenDialogSuccess(false);
    navigate('/auth/login');
  };

  const onSubmit = async data => {
    const body = {
      email: data.email,
    };

    const passwordReset = async body => {
      try {
        await axios.post(`${REACT_APP_SERVER_URL}/api/authentication/password-reset/`, body);
        setOpenDialogSuccess(true);

      } catch (error) {
        setResetFormErrors(error.response.data);
      }
    };

    passwordReset(body)
  };

  console.log('openDialogSuccess', openDialogSuccess);

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
        <Typography component='h1' variant='h5'>
          Forgot password
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
                onChange={() => setResetFormErrors(null)}
            error={Boolean(errors?.email) || !!resetFormErrors}
            helperText={errors?.email?.message || (resetFormErrors && resetFormErrors.email ? resetFormErrors.email[0] : null)}
          />

          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Send password reset email
          </Button>
          <Grid container>
            <Grid item>
              <Link href='signup' variant='body2'>
                {'Don\'t have an account? Sign Up'}
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
      </Box>
    </ThemeProvider>
  );
};

export default Forgot;
