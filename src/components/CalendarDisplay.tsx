import React, { Dispatch, SetStateAction, useState } from 'react'
import Calendar from 'react-calendar'
import { addDays, differenceInCalendarDays } from 'date-fns'

type CalendarDisplayProps = {
  openModal: any,
  closeModal: any,
  chosenDate: Date | undefined,
  setChosenDate: Dispatch<SetStateAction<Date | undefined>>
}

const CalendarDisplay: React.FC<CalendarDisplayProps> = ({openModal, closeModal, chosenDate, setChosenDate}) => {
  const now = new Date()
  const fullDays: Date[] = []
  const partialDays: Date[] = []

  // Test Data
  fullDays.push(addDays(now, 1), addDays(now, 3))
  partialDays.push(addDays(now, 2), addDays(now, 5), addDays(now, 4))

  const [date, setDate] = useState<any>(addDays(new Date(),1))

  // Types not working?
  // const handleClickOpen = ({value, event}: {value:Date, event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>}) => {
  const handleClickOpen = ({value, event}: any) => {
    setChosenDate(date);
    openModal();
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
        onClickDay={handleClickOpen}
      />
    </div>
  )
}

export default CalendarDisplay
