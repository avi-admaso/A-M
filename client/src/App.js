import React from "react";
import "./App.css";
import Calendars from "./Components/Pages/Calendar/Calendars";
import NavBar  from "./Components/parts/navbar/Nav-Bar";

function App() {
  return (
    <div className="App">
       <NavBar/>
      <Calendars/>
     
    </div>
  );
}

export default App;
