import React from 'react'

const CalendarDisplay: React.FC = () => {
  return (
    <div>
      <iframe id='appointment-schedule' title='appointment-schedule' src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2yhhT-Ggtp1PqdoS3gj72d5v-iDyqOgAkAKh9YnFTtMTDGhBhHLcaxPtuVPGgDAV-5GxApZ4bz?gv=true" width="100%" height="600"></iframe>
    </div>
  )
}

export default CalendarDisplay
