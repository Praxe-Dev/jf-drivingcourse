import { Divider } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import React from 'react'

function Contact () {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        <strong>Jean-François</strong>
      </p>
      <p>TVA: BEXXXX.XXX.XXX</p>
      <p>N° de compte bancaire: BEXX XXXX XXXX XXXX</p>
      <Divider sx={{ marginBottom: 2 }} />
      <p>
        {/* <CallIcon id='icon-phone' sx={{ color: 'green', marginRight: 2 }} /> */}
        <CallIcon id='icon-phone' />
        <a href='tel:+32472834880'>0472/83.48.80</a>
      </p>
    </div>
  )
}

export default Contact
