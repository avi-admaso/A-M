import "./App.css";
import { useEffect } from 'react'
import RouterApp from "./Router/RouterApp";
import Login from "./Components/Pages/Login/Login";
import { UserProvider } from "./context/UserContext";
import Landing from "./Components/Pages/Landing/Landing";
function App() {
  // useEffect(()=>{localStorage.removeItem("token")},[])
  return (
    <div className="App">
      <UserProvider>
        <RouterApp/>    
        {/* <Landing/> */}
      </UserProvider>
    </div>
  );
}

export default App;
