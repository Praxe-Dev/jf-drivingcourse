import React from 'react'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
import Navbar from './components/Navbar'
import Infos from './components/Infos'
import Footer from './components/Footer'
import Booking from './components/Booking'

function App () {
  return (
    <div>
      <Navbar />
        <Header />
        <Content />
        <Booking />
        {/* <TestComponent /> */}
        <Infos />
        <Footer />
    </div>
  )
}

export default App
