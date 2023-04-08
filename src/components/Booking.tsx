import { Container, Grid } from '@mui/material'
import React from 'react'
import CalendarDisplay from './CalendarDisplay'
import BookingInfo from './BookingInfo'

import BookFormModal from './BookFormModal'

function Booking () {
  const [open, setOpen] = React.useState(false)
  const [chosenDate, setChosenDate] = React.useState<Date | undefined>(
    new Date()
  )

  const handleClickOpen = () => {
    console.log(chosenDate)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div id='booking'>
      <Container>
        <Grid id='booking' container columnSpacing={4}>
          <Grid item sm={6}>
            <BookingInfo />
          </Grid>
          <Grid item sm={6}>
            <CalendarDisplay
              openModal={handleClickOpen}
              closeModal={handleClose}
              choseDate={chosenDate}
              setChosenDate={setChosenDate}
            />
          </Grid>
        </Grid>
      </Container>
      <BookFormModal
        isOpen={open}
        openModal={handleClickOpen}
        onCloseModal={handleClose}
      />
    </div>
  )
}

export default Booking
