import { Container, Grid } from '@mui/material'
import React from 'react'
import CalendarDisplay from './CalendarDisplay'
import BookingInfo from './BookingInfo'

function Booking () {
  return (
    <div id='booking'>
      <Container>
        <Grid id='booking' container columnSpacing={4}>
          <Grid item sm={6}>
            <BookingInfo />
          </Grid>
          <Grid item sm={6}>
            <CalendarDisplay />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Booking
