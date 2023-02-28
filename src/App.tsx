import React from 'react'
// import Navbar from './components/NavbarOld'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
// import Calendar from 'react-calendar';

function App () {
  return (
    <div>
      <Navbar />
      <Container maxWidth='lg'>
        {/* <Navbar />  */}
        <Header />
        {/* <div className="divider"></div> */}
        <Content />
      </Container>
    </div>
  )
}

export default App
