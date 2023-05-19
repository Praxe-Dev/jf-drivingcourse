// import react from 'react'
import { Box, Container } from '@mui/material'

let Header = () => {
  return (
    <Box sx={{ bgcolor: '#b4e6ff' }}>
      <Container maxWidth='md'>
        <div id='header' className='blue lighten-5'>
          {/* <div id='header' className='blue lighten-5'> */}
          <div className='container'>
            <h1>Jean-François VERBRACKEN</h1>
            <h2>Formations à la conduite</h2>
            <p>
              Je m'appelle Verbracken Jean-François, je suis moniteur à l'apprentissage de la conduite pour l'obtention du permis B, je travaille à temps plein pour une auto-école comme statut indépendant et je donne des leçons de conduite pendant mon temps libre <em>uniquement dans la région de HUY</em>
            </p>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Header
