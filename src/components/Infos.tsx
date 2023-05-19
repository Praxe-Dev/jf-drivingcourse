import React from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import Contact from './Contact';
import About from './About';

let Infos = () => {
  return (
    <div id='infos'>

    <Container maxWidth="lg">

      <Grid
        container
        columnSpacing={1}
        justifyContent='space-evenly'
        >
        {/* <Grid item xs={12} sm={5} sx={{ paddingRight: 15 }}> */}
        {/* <Grid item sm={12} md={3} sx={{ marginRight: 15 }}> */}
        <Grid item sm={12} md={5} 
        sx={{paddingRight: 7}}
        >
          <Contact />
        </Grid>
        <Grid item sm={12} md={7} 
        >
          <About />
        </Grid>
        {/* <Grid item sm={12} md={3}>
          <iframe title='map-embed' id='map-embed' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.0600493022298!2d5.262043261700486!3d50.53193682894921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c1aa268bdc72c9%3A0x9885da07d59f2845!2sAutos%C3%A9curit%C3%A9%20-%20Centre%20d&#39;examens%20de%20Huy%20-%201027!5e0!3m2!1sen!2sbe!4v1682153404084!5m2!1sen!2sbe" width="600" height="450" loading="lazy"></iframe>
        </Grid> */}
      </Grid>
    </Container >
        </div>
  )
}

export default Infos