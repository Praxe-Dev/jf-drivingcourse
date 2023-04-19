import Button from '@mui/material/Button'
import React from 'react'
import BookIcon from '@mui/icons-material/Book';

function BookingInfo() {
  return (
    <div id='booking-info'>
        <h3>Réserver vos cours dès maintenant !</h3>
        <p>En cas de problèmes avec la réservation, vous pouvez également passer par le bouton ci-dessous.</p>
        {/* <p>Cliquer sur le jour qui vous intéresse et remplissez le formulaire de réservation.</p>
        <p>Après validation, vous recevrez un SMS de confirmation</p>
        <p>les jours en vert sont les jours où je suis disponible. Les jours oranges sont ceux ayant déjà une réservation mais au moins un crénau est toujours disponible. Et enfin les jours rouges sont ceux durant lesquels je ne suis pas disponible!</p> */}
      <Button id='booking-info-button' size='large' startIcon={<BookIcon />} href='https://calendar.google.com/calendar/appointments/AcZssZ1tolpDm6PEBrCniMfFx_V1vgL0wOXMN66ZiJE=?gv=true' target='_blank' variant="outlined">Réserver un cours !</Button>

    </div>
  )
}

export default BookingInfo