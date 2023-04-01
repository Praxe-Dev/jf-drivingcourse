import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import dayjs, { Dayjs } from 'dayjs'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Badge, Container, Grid, styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Moment } from 'moment';
import CheckIcon from '@mui/icons-material/Check';
import { PickersDay } from '@mui/x-date-pickers'

const StyledDay = styled('div')(({ theme }) => ({

}));

// renderDay={(day, _value, DayComponentProps) => {
//   const isSelected =
//     !DayComponentProps.outsideCurrentMonth &&
//     highlightedDays.indexOf(day.getDate()) >= 0;

//   return (
//     <Badge
//       key={day.toString()}
//       overlap='circular'
//       badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
//     >
//       <PickersDay {...DayComponentProps} />
//     </Badge>
//   );
// }}



let Calendar = () => {
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'))


  const RenderDay = (day: any, _value: any, DayComponentProps: any) => {
    const isSelected =
      !DayComponentProps.outsideCurrentMonth
    return (
      <Badge
        key={day.toString()}
        overlap='circular'
        badgeContent={isSelected ? <CheckIcon color='action' /> : undefined}>
        <PickersDay {...DayComponentProps} />
      </Badge>
    );
  }

  return (
    <Container maxWidth='md'>
      <Grid
        justifyContent='flex-start'
        id='grid-content'
        container
        columnSpacing={4}
      >

        <Grid item sm={6}>
          <Typography variant="body1">
            Choisissez une date pour votre cours pratique
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <LocalizationProvider id="calendar" dateAdapter={AdapterDayjs}>
            <StaticDatePicker
            // value={SelectedDate}
              displayStaticWrapperAs='mobile'
              orientation='portrait'
              // openTo='day'
              disablePast
              // shouldDisableDate={} // Disable date that are already full
              value={value}
              // shouldDisableDate={isWeekend}
              showToolbar={false}
              onChange={(newValue: any) => {
                setValue(newValue)
                // alert(newValue)
              }}
              componentsProps={{
                actionBar: {
                  actions: ['today']
                }
              }}
              renderDay={RenderDay}
              renderInput={params => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Calendar
