import React, { useState, useEffect, } from 'react'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Style.css";
import { GetAppointmentOfBusiness,AddAppointment } from '../../../services/appointmentService';

const locales = { "en-US": require("date-fns/locale/en-US") };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const events = [];

export default function Calendars() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
  const [allEvent, setAllEvent] = useState(events)
  const [appointment,setAppointment] = useState({});

  const ChangingTheValue = (e) => {
    appointment[e.target.name] = e.target.value;
  };

  const SendTheAppointment =(e)=>{
    e.preventDefault();
    setAppointment({...appointment})
    console.log(appointment);
    setAllEvent([...allEvent, newEvent])
    AddAppointment(allEvent);
    console.log(allEvent);
  }

  function handleAddEvent() {
    
    newEvent.allDay = false;
    SendTheAppointment(newEvent);
  }
  useEffect(() => {
    GetAppointmentOfBusiness("ben barbaerShop")
      .then(result => {
        setAllEvent(result.appointment)
        result.appointment.map(event => {
          event.start = new Date(Date.parse(event.start))
          event.end = new Date(Date.parse(event.end))
          return null;
        })
      })
  }, [])
  return (<section className='main'>
    <h1>Calendar</h1>
    <h2>You went to Haircut</h2>
    <div>
      <input type="text" placeholder='Enter your name' style={{ width: "20%", marginRight: "10px" }}
        value={newEvent.title} onChange={ChangingTheValue} 
        name="title" 
      />
      <DatePicker placeholderText='Start Data' style={{ marginRight: "10px" }}
        selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} showTimeSelect timeIntervals={30} name="start" />
      <DatePicker placeholderText='End Data'
        selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} showTimeSelect timeIntervals={30} name="end"/>
      <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>Click</button>
    </div>
    <Calendar
      localizer={localizer}
      events={allEvent}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, margin: "50px" }}
    />
  </section>)

}
