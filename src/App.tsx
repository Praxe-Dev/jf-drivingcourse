import React from 'react'
// import Navbar from './components/NavbarOld'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
import Calendar from './components/Calendar'
import Container from '@mui/material/Container'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
// import { Calendar } from 'react-calendar'
// import Calendar from 'react-calendar';

// Primary color : #085aa5

function App () {
  return (
    <div>
      <Navbar />
        <Header />
        <Content />
        <Calendar />
        <About />
        <Footer />
    </div>
  )
}

export default App
