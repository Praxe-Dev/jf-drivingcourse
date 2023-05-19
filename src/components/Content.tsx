import React from 'react'
import { Container, Grid } from '@mui/material'
// Icons
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

// const iconColor = '#085aa5'

let Content = () => {
  return (
    <Container id='content' maxWidth="xl">
      <Grid
        justifyContent='space-between'
        id='grid-content'
        container
        columnSpacing={4}
      >
        <Grid className='content-item' item xs={12} lg={3} sm={6}>
          <CalendarTodayIcon />
          <h3>Plages Horaires</h3>
          <p>Je donne mes cours tout au long de la semaine !</p>
        </Grid>
        <Grid className='content-item' item xs={12} lg={3} sm={6}>
          <AttachMoneyIcon />
          <h3>Tarifs</h3>
          <p>
            Je demande 90€ par séances de 2h. À régler sur place ou par virement
            bancaire.
          </p>
        </Grid>
        <Grid className='content-item' item xs={12} lg={3} sm={6}>
          <MapOutlinedIcon />
          <h3>Point de rendez-vous</h3>
          <p>
            Le point de rendez-vous pour mes cours est{' '}
            <a href='https://goo.gl/maps/Nf1BNkXd21yGxwAWA' target={'_blank'} rel="noreferrer">
              au centre des Permis de conduire à Tihange ou dans les alentours 
            </a>
            .
          </p>
        </Grid>
        <Grid className='content-item' item xs={12} lg={3} sm={6}>
          {/* <DirectionsCarIcon sx={{fontSize: 70, color: iconColor}} /> */}
          <DirectionsCarIcon />
          <h3>Véhicules</h3>
          <p>
            Le véhicule utilisé pour les cours est équipé des doubles commandes.
            Possibilité d'utiliser votre véhicule pour la préparation à l'examen.
          </p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Content
