import { Divider } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import React from 'react'

function Contact () {
  return (
    <div id='contact'>
      <h2>Contact</h2>
      <p>
        <strong>Verbracken Jean-François</strong>
      </p>
      <p>TVA: BE 0770809708</p>
      <p>N° de compte bancaire: BE03 1030 7530 2784</p>
      <Divider id='contact-divider' sx={{ marginBottom: 2 }} />
      <p>
        <CallIcon id='icon-phone' />
        <a href='tel:+32496064352'>0496/06.43.52</a>
      </p>
    </div>
  )
}

export default Contact
