import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import getHours from 'date-fns/getHours';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  // "en-gb": require("date-fns/locale/en-GB")
  "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  getHours,
  locales
});

const events = [
  {
    title: "Haircut Lior",
    // allDay: true,
    start: new Date(2022, 3, 5,10,0),
    end: new Date(2022, 3, 5,11,0),

  },
  {
    title: "Haircut Avi",
    start: new Date(2022, 3, 0),
    end: new Date(2022, 3, 0)

  },
]

export default function Calendars() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
  const [allEvent, setAllEvent] = useState(events)

  function handleAddEvent(params) {
    setAllEvent([...allEvent, newEvent])
  }
  return (<>
    <h1>Calendar</h1>
    <h2>You went to Haircut</h2>
    <div>
    <input type="text" placeholder='Enter your name' style={{ width: "20%", marginRight: "10px" }}
      value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
    />
    <DatePicker placeholderText='Start Data' style={{ marginRight: "10px" }}
      selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
    <DatePicker placeholderText='End Data'
      selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
    <button style={{marginTop:"10px"}} onClick={handleAddEvent}>Click</button>  
    </div>
    <Calendar
      localizer={localizer}
      events={allEvent}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, margin: "50px" }}
    />
  </>)

}
