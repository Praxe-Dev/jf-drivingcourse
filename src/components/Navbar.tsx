import logo from '../resources/driving-school.png'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

export default function Navbar () {
  return (
    <Box id='title-navbar'>
      <AppBar id='navbar' position='static'>
        {/* <Toolbar id='Toolbar' sx={{bgcolor: '#085aa5'}}> */}
        <Toolbar id='Toolbar'>
          <Container maxWidth='lg'>
            <Typography itemID='title' align='justify' variant='h4' component='div' id='title' >
              <img
                style={{ height: 45, paddingRight: 20 }}
                src={logo}
                alt='jf-monitor-Logo'
                />
              Jean-François
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
