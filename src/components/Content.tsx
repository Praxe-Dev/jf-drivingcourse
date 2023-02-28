import React from 'react'
import logo from '../resources/driving-school.png'
import { Box, Container, Grid } from '@mui/material'

let Content = () => {
  return (
    // <div id='content' style={{
    //   padding: 20
    // }}>
    // <Box sx={{ width: '100%' }}>
    <Container maxWidth="xl">
      {/* <Grid id='grid-content' container columnSpacing={4}> */}
      <Grid
        justifyContent='space-between'
        id='grid-content'
        container
        columnSpacing={4}
      >
        <Grid item xs={12} lg={3} sm={6}>
          {/* <Grid item> */}
          <img src={logo} alt='' />
          <h5>Plages Horaires</h5>
          <p>Je donne mes cours les vendredis et samedis par tranches de 2h.</p>
        </Grid>
        {/* <Grid item> */}
        <Grid item xs={12} lg={3} sm={6}>
          <img src={logo} alt='' />
          <h5>Tarifs</h5>
          <p>
            Je demande 90€ par séances de 2h. À régler sur place ou par virement
            bancaire.
          </p>
        </Grid>
        {/* <Grid item> */}
        <Grid item xs={12} lg={3} sm={6}>
          <img src={logo} alt='' />
          <h5>Point de rendez-vous</h5>
          <p>
            Le point de rendez-vous pour mes cours est{' '}
            <a href='https://goo.gl/maps/WviVnwxAva7pNQLG9' target={'_blank'}>
              Drive-Cool
            </a>
            .
          </p>
        </Grid>
        {/* <Grid item> */}
        <Grid item xs={12} lg={3} sm={6}>
          <img src={logo} alt='' />
          <h5>Véhicules</h5>
          <p>
            Le véhicule utilisé pour les cours est équipé des doubles commandes.
            Possibilité d'utiliser votre véhicule pour la préparation à l'examen
          </p>
        </Grid>
      </Grid>
    </Container>
    // </Box>
    // </div>
  )
}

export default Content
