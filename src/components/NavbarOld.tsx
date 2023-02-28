import React from 'react'
import logo from '../resources/driving-school.png'


let Navbar = () => {
  return (
    <div className='navbar-fixed'>
      <nav id='navbar'>
        <div className='nav-wrapper blue'>
          <div className='container'>
            <a href='#' className='brand-logo'>
              <img
                style={{ height: 40, paddingRight: 20 }}
                className='responsive-img'
                src={logo}
                alt='Lolgo'
              />
              Jean-François
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='sass.html'>Content</a>
              </li>
              <li>
                <a href='badges.html'>Calendar</a>
              </li>
              <li>
                <a href='collapsible.html'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
