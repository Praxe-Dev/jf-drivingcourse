import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';
import { ChangeEvent, useState } from 'react';

type FormModalProps = {
  isOpen: boolean,
  onCloseModal: any,
  chosenDate: Date | undefined;
}

const BookFormModal = ({isOpen, chosenDate, onCloseModal}: FormModalProps) => {

  // console.log(chosenDate);

  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // console.log(e.target.value.length > 0);
    setIsPhoneValid(e.target.value.length > 0) 
  }

  return (
    <div>
        <Dialog open={isOpen} onClose={onCloseModal} fullWidth maxWidth={'sm'}>
          <DialogTitle>Réserver un cours</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <h2>Choisissez la plage horaire pour la date du {chosenDate?.toString()}</h2>
              <RadioGroup name='use-radio-group'>
                <FormControlLabel
                  value='08:00 - 10:00'
                  control={<Radio />}
                  label='08:00 - 10:00'
                />
                <FormControlLabel
                  value='10:00 - 12:00'
                  control={<Radio />}
                  label='10:00 - 12:00'
                  disabled
                />
                <FormControlLabel
                  value='13:00 - 15:00'
                  control={<Radio />}
                  label='13:00 - 15:00'
                />
              </RadioGroup>
              <h2>Merci de renseigner vos coordonnées</h2>
            </DialogContentText>
            <Container disableGutters maxWidth={false}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  margin='dense'
                  id='firstname'
                  label='Prénom'
                  type='text'
                  fullWidth
                  variant='standard'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin='dense'
                  id='name'
                  label='Nom'
                  type='text'
                  fullWidth
                  variant='standard'
                />
              </Grid>
              <Grid item>
                <TextField
                  margin='dense'
                  id='phone'
                  label='Téléphone'
                  type='tel'
                  fullWidth
                  error={!isPhoneValid}
                  onChange={handlePhoneChange}
                  required
                  variant='standard'
                />
              </Grid>
              <Grid item>
                <TextField
                  multiline
                  margin='dense'
                  id='comment'
                  label='Commentaires'
                  type='comment'
                  fullWidth
                  variant='standard'
                />
              </Grid>
            </Container>
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseModal}>Cancel</Button>
            <Button onClick={onCloseModal} disabled={!isPhoneValid}>Réserver</Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}
export default BookFormModal