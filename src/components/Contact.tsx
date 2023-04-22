import { Divider } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import React from 'react'

function Contact () {
  return (
    <div id='contact'>
      <h2>Contact</h2>
      <p>
        <strong>Jean-François</strong>
      </p>
      <p>TVA: BEXXXX.XXX.XXX</p>
      <p>N° de compte bancaire: </p>
      <p>BEXX XXXX XXXX XXXX</p>
      <Divider id='contact-divider' sx={{ marginBottom: 2 }} />
      <p>
        <CallIcon id='icon-phone' />
        <a href='tel:+32496064352'>0496/06.4352</a>
      </p>
    </div>
  )
}

export default Contact
