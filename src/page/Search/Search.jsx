import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Hero from './Hero/Hero';
import AppInfoDetailed from 'page/AppInfoDetailed/AppInfoDetailed';

const Search = () => {
  const [appId, setAppId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <main className="container">
      <Hero setAppId={setAppId} setOpenModal={setOpenModal} />

      <AppInfoDetailed appId={appId} />

      <Dialog open={openModal} keepMounted onClose={handleClose}>
        <DialogTitle>Request Processing</DialogTitle>
        <DialogContent>
          <p>
            Please wait while we process your request. This application is not yet in our database,
            and it may take some time.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </main>
  );
};

export default Search;
