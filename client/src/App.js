import React from "react";
import "./App.css";
import Calendars from "./Components/Pages/Calendar/Calendars";
import Footer from "./Components/parts/footer/Footer";
import NavBar  from "./Components/parts/navbar/Nav-Bar";

function App() {
  return (
    <div className="App">
       <NavBar/>
      <Calendars/>
       <Footer/>
     
    </div>
  );
}

export default App;
