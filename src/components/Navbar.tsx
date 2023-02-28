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

export default function NavbarTest () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Container maxWidth='lg'>
          <img
                // noWrap
                // sx={{display: {xs: 'flex', md:'none'}}}
                style={{ height: 90, paddingRight: 20 }}
                src={logo}
                alt='Lolgo'
              />
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Jean-François
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
