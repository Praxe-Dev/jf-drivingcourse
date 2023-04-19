import { Container, Grid } from '@mui/material'
import React from 'react'
import CalendarDisplay from './CalendarDisplay'
import BookingInfo from './BookingInfo'

function Booking () {
  return (
    <div id='booking'>
      <Container>
        <Grid id='booking' container columnSpacing={4}>
          <Grid item sm={4}>
            <BookingInfo />
          </Grid>
          <Grid item sm={8}>
            <CalendarDisplay />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Booking
