import "./App.css";
import { useEffect } from 'react'
import RouterApp from "./Router/RouterApp";
import Login from "./Components/Pages/Login/Login";
import { UserProvider } from "./context/UserContext";
function App() {

  return (
    <div className="App">
      <UserProvider>
        <RouterApp/>    
      </UserProvider>
    </div>
  );
}

export default App;
