import * as React from 'react'
import logo from '../resources/driving-school.png'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'

export default function Navbar () {
  return (
    <Box id='title-navbar'>
      <AppBar id='navbar' position='static'>
        {/* <Toolbar id='Toolbar' sx={{bgcolor: '#085aa5'}}> */}
        <Toolbar id='Toolbar'>
          <Container maxWidth='lg'>
            {/* <Typography variant='h6' component='div' id='title' sx={{ flexGrow: 1 }}> */}
            <Typography variant='h6' component='div' id='title' >
              <img
                style={{ height: 45, paddingRight: 20 }}
                src={logo}
                alt='Lolgo'
              />
              Jean-François
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
