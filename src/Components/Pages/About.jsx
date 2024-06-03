
import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import React, { useState } from 'react'

export default function About() {
  const [Dialogue, setDialogue] = useState(false);

  const handleClickDialogue = () => {
    setDialogue(true);
  };

  const handleClose = () => {
    setDialogue(false);
  };
  return (
    <div>
       <Button variant="outlined" onClick={handleClickDialogue}>
        Dialogue alert dialog
      </Button>
      <Dialog
        open={Dialogue}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            lorem2000
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
