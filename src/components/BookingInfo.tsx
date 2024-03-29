import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import BookIcon from '@mui/icons-material/Book';

function BookingInfo() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 600);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })

  return (
    <div id='booking-info'>
        <h2>Réserver vos cours dès maintenant !</h2>
        {isDesktop ? (
          <p>En cas de problèmes avec la réservation, vous pouvez également utiliser le bouton ci-dessous.</p>
        ) : (
          <p>Cliquez sur le bouton ci-dessous pour réserver votre cours!.</p>
        )}
        {/* <p>En cas de problèmes avec la réservation, vous pouvez également utiliser le bouton ci-dessous.</p> */}
        {/* <p>Cliquer sur le jour qui vous intéresse et remplissez le formulaire de réservation.</p>
        <p>Après validation, vous recevrez un SMS de confirmation</p>
        <p>les jours en vert sont les jours où je suis disponible. Les jours oranges sont ceux ayant déjà une réservation mais au moins un crénau est toujours disponible. Et enfin les jours rouges sont ceux durant lesquels je ne suis pas disponible!</p> */}
      <Button id='booking-info-button' size='large' startIcon={<BookIcon />} href='https://calendar.google.com/calendar/appointments/AcZssZ1tolpDm6PEBrCniMfFx_V1vgL0wOXMN66ZiJE=?gv=true' target='_blank' variant="outlined">Réserver un cours !</Button>

    </div>
  )
}

export default BookingInfo