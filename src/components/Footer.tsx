import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function Footer () {
  return (
    <Container maxWidth={false} disableGutters id='footer'>
      <Grid container justifyContent='normal'>
        <Grid id='footer-left' item xs={12} sm={6}>
          <p style={{ marginLeft: 40 }}>
            &copy; Jean-François VERBRACKEN 2023. Tous droits réservés.
          </p>
        </Grid>
        <Grid id='footer-right' item xs={12} sm={6}>
          <p style={{ marginLeft: 40 }}>
          &copy; Jean-François VERBRACKEN 2023. Tous droits réservés.
          </p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
