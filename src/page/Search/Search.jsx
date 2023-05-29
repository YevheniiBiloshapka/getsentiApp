import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import Hero from './Hero/Hero';
import AppInfoDetailed from 'page/AppInfoDetailed/AppInfoDetailed';

const Search = () => {
  const [openModal, setOpenModal] = useState(false);
  const [appId, appIdSetter] =  useState(null);

  const handleClose = () => {
    setOpenModal(false);
  };
  console.log('hit Search', appId)
  return (
    <main className="container">
      <Hero setOpenModal={setOpenModal} idSetter={appIdSetter} />

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
