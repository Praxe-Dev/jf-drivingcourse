import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function Footer () {
  return (
    <Container maxWidth={false} disableGutters id='footer'>
      <Grid container justifyContent='normal'>
        <Grid id='footer-left' item xs={6}>
          <p style={{ marginLeft: 40 }}>
            Copyright Jean-François VERBRACKEN 2022. Tous droits réservés.
          </p>
        </Grid>
        <Grid id='footer-right' item xs={6}>
          <p style={{ marginLeft: 40 }}>
            Copyright Jean-François VERBRACKEN 2022. Tous droits réservés.
          </p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
