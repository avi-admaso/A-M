import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './Components/Pages/Calendar/Calendar';
import NavBar from './Components/parts/navbar/Nav-Bar';

function App() {
  return (
    <div className="App">
      <Calendar/>
      <NavBar/>
    </div>
  );
}

export default App;
