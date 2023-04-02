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
        <CallIcon sx={{ color: 'green', marginRight: 2 }} />
        0472 83 48 80
      </p>
    </div>
  )
}

export default Contact
