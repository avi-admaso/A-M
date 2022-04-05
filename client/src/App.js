import React from 'react';
import './App.css';
import NavBar from './Components/parts/navbar/Nav-Bar';
import Calendars from './Components/Pages/Calendar/Calendars';

function App() {
  return (
    <div className="App">
      <Calendar/>
      <NavBar/>
    </div>
  );
}

export default App;
