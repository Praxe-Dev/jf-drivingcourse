import React from 'react'
// import Navbar from './components/NavbarOld'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
// import Calendar from './components/CalendarOld'
import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import About from './components/Infos'
import Footer from './components/Footer'
import CalendarDisplay from './components/CalendarDisplay'
import Booking from './components/Booking'

function App () {
  return (
    <div>
      <Navbar />
        <Header />
        <Content />
        <Booking />
        <About />
        <Footer />
    </div>
  )
}

export default App
