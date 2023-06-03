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

const PasswordResetConfirm = () => {
  const navigate = useNavigate();
  const { token, uid } = useParams();
  const [openDialog, setOpenDialog] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordError = '';
  const [formError, setFormError] = useState('');

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate('/auth/login');
  };

  const handlePasswordChange = event => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const validateForm = () => {
    if (newPassword === '') {
      setFormError('Please enter a new password.');
      return false;
    }

    if (newPassword !== confirmPassword) {
      setFormError('Passwords do not match.');
      return false;
    }

    return true;
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      const body = {
        uid: uid,
        token: token,
        new_password: newPassword,
        new_password_confirm: confirmPassword,
      };
      passwordResetConfirm(body)
        .then(res => {
          setOpenDialog(true);
          navigate('/auth/login');
        })
        .catch(error => {
          if (error.response.data.token) {
            setFormError(error.response.data.token);
          } else if (error.response.data.uid) {
            setFormError(error.response.data.uid);
          }
        });
    }
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
          <Typography>Your password has been successfully reset.</Typography>
          <Typography sx={{ mb: 3 }}>Please enter your new password and confirm it.</Typography>
          <TextField
            label="New Password"
            type="password"
            value={newPassword}
            onChange={handlePasswordChange}
            error={passwordError !== ''}
            helperText={passwordError}
            sx={{ mr: 1 }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={passwordError !== ''}
            helperText={passwordError}
          />
          {formError && <Typography color="error">{formError}</Typography>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormSubmit}>Submit</Button>
          <Button onClick={handleLogin}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PasswordResetConfirm;
