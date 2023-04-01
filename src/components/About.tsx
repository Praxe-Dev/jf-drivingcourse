import { Divider, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';

let About = () => {
  return (
    <Container maxWidth="lg">

      <Grid
        container
        columnSpacing={2}
        justifyContent='space-evenly'
      >
        {/* <Grid item xs={12} sm={5} sx={{ paddingRight: 15 }}> */}
        <Grid item sm={12} md={5} sx={{ paddingRight: 15 }}>
          <h2>Contact</h2>
          <p><strong>Jean-François</strong></p>
          <p>
            TVA: BE0865.008.584
          </p>
          <p>
            N° de compte bancaire: BE42 8508 2770 6654
          </p>
          <Divider sx={{ marginBottom: 2 }} />
          <p>
            <CallIcon sx={{ color: 'green' }} />
            0472 83 48 80
          </p>
        </Grid>
        <Grid item sm={12} md={7}>
          <h2>À propos</h2>
          <p>
            Je peux vous aider pour
          </p>
          <ul>
            <li>
              l'apprentissage des bases de la conduite,
            </li>
            <li>
              manœuvres,
            </li>
            <li>
              préparation à l'examen,
            </li>
            <li>
              accompagnement à l'examen.
            </li>
          </ul>
          <p>
            Attention que cette filière n'est pas valable pour des heures obligatoires (6h après 2 échecs, 20h pour pouvoir rouler seul ou 30h pour présenter l'examen en accès direct).
          </p>
          <p>
            Les cours sont donnés par 2h (80€) mais possibilité de faire 1h (40€) ou 1h30 (60€) au départ du permis de conduire à Tihange ou dans un rayon proche.
          </p>
        </Grid>
      </Grid>
    </Container >
  )
}

export default About