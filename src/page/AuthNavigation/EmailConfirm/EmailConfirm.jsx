import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from '@mui/material';
import { emailConfirm } from 'api/registerUser';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const EmailConfirm = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [openDialog, setOpenDialog] = useState(true);

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate('/auth/login');
  };

  useEffect(() => {
    const body = { token: token };
    emailConfirm(body).then(res => {
      setOpenDialog(true);
    });
  }, [token]);

  const handleLogin = () => {
    navigate('/auth/login'); // Redirect to the login page
  };

  return (
    <div>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <CheckCircleOutlineIcon sx={{ mr: 1 }} fontSize="large" color="success" />
            Email Confirmation Successful
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography>You have successfully confirmed your email address.</Typography>
          <Typography>Please click "Okay" to proceed to the login page.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogin}>Okay</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmailConfirm;
