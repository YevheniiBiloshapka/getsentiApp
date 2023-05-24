import * as React from 'react';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { changePassword } from 'api/registerUser';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const PasswordChange = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = { old_password: data.get('old_password'), new_password: data.get('new_password') };

    changePassword(body)
      .then(() => {
        setOpenDialog(true);
      })
      .catch(error => console.log(error.response.data));
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate('/');
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
          Change Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="old_password"
            label="Old password"
            type="password"
            id="old_password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="new_password"
            label="New password"
            type="password"
            id="new_password"
            autoComplete="current-password"
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Change password
          </Button>
        </Box>
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Success</DialogTitle>
          <DialogContent>
            <Typography>Password has been changed successfully!</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>OK</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default PasswordChange;
