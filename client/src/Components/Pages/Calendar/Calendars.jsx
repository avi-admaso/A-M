import React from 'react'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import getHours from 'date-fns/getHours';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";

const locales = {
  // "en-gb": require("date-fns/locale/en-GB")
  "en-US": require("date-fns/locale/en-US")

}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  getHours,
  locales
})

const events = [
  {
    title: "Haircut Lior",
    allDay: true,
    start: new Date(2022, 4, 6, 11),
    end: new Date(2022, 4, 6, 12)

  },
  {
    title: "Haircut Avi",
    start: new Date(2022, 4, 6, 11),
    end: new Date(2022, 4, 6, 12)

  },
]

export default function Calendars() {

  return (<>
    <Calendar localizer={localizer}
    events={events} startAccessor="start"
    endAccessor="end"
    style={{ height: 500, margin: "50px" }} />

  </>)
}
