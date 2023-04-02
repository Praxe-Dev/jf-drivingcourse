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
        columnSpacing={2}
        justifyContent='space-evenly'
        >
        {/* <Grid item xs={12} sm={5} sx={{ paddingRight: 15 }}> */}
        <Grid item sm={12} md={5} sx={{ paddingRight: 15 }}>
          <Contact />
        </Grid>
        <Grid item sm={12} md={7}>
          <About />
        </Grid>
      </Grid>
    </Container >
        </div>
  )
}

export default Infos