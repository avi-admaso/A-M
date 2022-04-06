import React, { useState, useEffect, useContext, } from 'react'
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
import { UserContext } from '../../../context/UserContext';

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
  const {user} = useContext(UserContext);
  const [newEvent, setNewEvent] = useState({ title: "", businessName: "",orderName:`${user.email}` , start: "", end: ""})
  const [allEvent, setAllEvent] = useState(events)
  const [appointment,setAppointment] = useState({});

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

  // const ChangingTheValue = (e) => {
  //   appointment[e.target.name] = e.target.value;
  // };

  // const SendTheAppointment =(e)=>{
  //   e.preventDefault();
  //   setAppointment({...appointment})
  //   console.log(appointment);
  //   setAllEvent([...allEvent, newEvent])
  //   AddAppointment(allEvent);
  //   console.log(allEvent);
  // }

  function handleAddEvent() {
    
    newEvent.allDay = false;
    setAllEvent([...allEvent,newEvent]);
    console.log(allEvent);
    console.log(newEvent);
    AddAppointment(newEvent).then((data) => {
        console.log(data);
    })
    // SendTheAppointment(newEvent);
  }

  
  return (<section className='main'>

    <section className='calender'>

    <div className='formStyle'>
    <h1>Calendar</h1>
    <h2>You went to Haircut</h2>
      <input type="text" placeholder='Enter your title' style={{ width: "20%", marginRight: "10px" }}
        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} 
      /> <br></br>

      <input type="text" placeholder='Enter your businessName' style={{ width: "20%", marginRight: "10px" }}
        onChange={(e) => setNewEvent({ ...newEvent, businessName: e.target.value })} 
      />

      <DatePicker placeholderText='Start Data' style={{ marginRight: "10px" }}
        selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} showTimeSelect timeIntervals={30} name="start" />
      <DatePicker placeholderText='End Data'
        selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} showTimeSelect timeIntervals={30} name="end"/>
      <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>Click</button>
    </div>
<div className='calendarStyle'>

    <Calendar
      localizer={localizer}
      events={allEvent}
      startAccessor="start"
      endAccessor="end"
      // style={{ height: "100%", marginLeft: "50px",width:"400px" }}
      />
      </div>
  </section>
  </section>)


}
