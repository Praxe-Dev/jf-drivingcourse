import React, { useState } from 'react'
import Calendar from 'react-calendar'
import BookFormModal from './BookFormModal'
import { addDays, differenceInCalendarDays } from 'date-fns'

// import { CalendarTileProperties } from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import { CalendarProps } from 'react-calendar';

type CalendarDisplayProps = {
  openModal: any,
  closeModal: any
  
}

const CalendarDisplay = ({openModal, closeModal}: CalendarDisplayProps) => {
  const now = new Date()
  const fullDays: Date[] = []
  const partialDays: Date[] = []
  fullDays.push(addDays(now, 1), addDays(now, 3))
  partialDays.push(addDays(now, 2), addDays(now, 5), addDays(now, 4))

  const [date, setDate] = useState<any>(addDays(new Date(),1))

  const handleClickOpen = ({value, event}: any) => {
    console.log(date);
    alert(`clicked day: ${date}`);
  }

  const isSameDay = (a: Date, b: Date) => {
    return differenceInCalendarDays(a, b) === 0
  }

  const StyleDay = ({ date, view }: any): any => {
    if (view === 'month') {

      if (fullDays.find(dDate => isSameDay(dDate, date))) {
        return 'full'
      } else if (partialDays.find(dDate => isSameDay(dDate, date))) {
        return 'partial'
      } else {
        return 'free'
      }
    } 
  }

  return (
    <div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={StyleDay}
        locale='fr-FR'
        minDate={addDays(new Date(), 1)}
        maxDetail='month'
        onClickDay={openModal}
        // tileContent={}
      />
    </div>
  )
}

export default CalendarDisplay
