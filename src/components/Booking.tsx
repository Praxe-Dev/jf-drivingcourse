import { Container, Grid } from '@mui/material'
import React from 'react'
import CalendarDisplay from './CalendarDisplay'
import BookingInfo from './BookingInfo'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Booking () {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id='booking'>
      <Container>
        <Grid id='booking' container columnSpacing={4}>
          <Grid item sm={6}>
            <BookingInfo />
          </Grid>
          <Grid item sm={6}>
            <CalendarDisplay openModal={handleClickOpen} closeModal={handleClose} />
          </Grid>
        </Grid>
      </Container>
      <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  )
}

export default Booking
