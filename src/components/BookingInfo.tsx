import React from 'react'

function BookingInfo() {
  return (
    <div id='booking-info'>
        <h3>Choisissez votre plage horaire : </h3>
        <p>Cliquer sur le jour qui vous intéresse et remplissez le formulaire de réservation.</p>
        <p>Après validation, vous recevrez un SMS de confirmation</p>
        <p>les jours en vert sont les jours où je suis disponible. Les jours oranges sont ceux ayant déjà une réservation mais au moins un crénau est toujours disponible. Et enfin les jours rouges sont ceux durant lesquels je ne suis pas disponible!</p>
    </div>
  )
}

export default BookingInfo