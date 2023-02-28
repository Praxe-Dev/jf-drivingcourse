import { Box, Container } from '@mui/material'
import react from 'react'

let Header = () => {
  return (
    <Box sx={{ bgcolor: '#b4e6ff' }}>
      <Container maxWidth='md'>
        <div id='header' className='blue lighten-5'>
          {/* <div id='header' className='blue lighten-5'> */}
          <div className='container'>
            <h1>Jean-François VERBRACKEN</h1>
            <h2>Formations permis de conduire</h2>
            <p>
              Bienvenu sur mon site Web. Ici, vous pouvez prendre rendez-vous
              avec moi pour vos cours de formation permis de conduire.
            </p>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Header
