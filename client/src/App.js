import "./App.css";
import { useEffect } from 'react'
import RouterApp from "./Router/RouterApp";
import Login from "./Components/Pages/Login/Login";
import { UserProvider } from "./context/UserContext";
import { AppointmentProvider } from "./context/AppointmentContext";
function App() {

  return (
    <div className="App">
      <UserProvider>
        <AppointmentProvider>
        <RouterApp/>    
        </AppointmentProvider>
      </UserProvider>
    </div>
  );
}

export default App;
