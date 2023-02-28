import React from 'react'
import Button from '@mui/material/Button'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

let Calendar = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'))

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          orientation='landscape'
          openTo='day'
          value={value}
          // shouldDisableDate={isWeekend}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  )
}

export default Calendar
