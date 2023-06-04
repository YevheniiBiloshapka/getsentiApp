import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  TextField,
} from '@mui/material';
import { passwordResetConfirm } from 'api/AuthenticationAPI';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { object, string } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = object({
  new_password: string()
    .nonempty('enter password')
    .min(8, 'Password must contain at least 8 characters'),
  new_password_confirm: string()
    .nonempty('Confirm the password')
    .min(8, 'Password must contain at least 8 characters'),
}).refine(data => data.new_password === data.new_password_confirm, {
  path: ['new_password_confirm'],
  message: 'Password mismatch',
});

const PasswordResetConfirm = () => {
  const navigate = useNavigate();
  const { token, uid } = useParams();
  const [openDialog, setOpenDialog] = useState(true);

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

  const handleFormSubmit = data => {
    const body = {
      uid: uid,
      token: token,
      new_password: data.new_password,
      new_password_confirm: data.new_password_confirm,
    };
    passwordResetConfirm(body)
      .then(res => {
        setOpenDialog(true);
        navigate('/auth/login');
      })
      .catch(error => {});
  };

  const handleLogin = () => {
    navigate('/auth/login');
  };

  return (
    <div>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <CheckCircleOutlineIcon sx={{ mr: 1 }} fontSize="large" color="success" />
            Password Reset
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ mb: 3 }}>To reset your password please enter a new password and confirm it.</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <TextField
              label="New Password"
              type="password"
              {...register('new_password')}
              error={!!errors.new_password}
              helperText={errors.new_password?.message}
              sx={{ mb: 2, maxWidth: '600px', minWidth: '430px', width: '100%' }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              {...register('new_password_confirm')}
              error={!!errors.new_password_confirm}
              helperText={errors.new_password_confirm?.message}
              sx={{ maxWidth: '600px', minWidth: '430px', width: '100%' }}
            />
            <DialogActions>
              <Button type="submit">Submit</Button>
              <Button onClick={handleLogin}>Cancel</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PasswordResetConfirm;
