import { Link } from "react-router-dom";
import { useState } from 'react'; 
import LogOut from "../Log-out/LogOut";
export default function ZSideBar() {
const [isLogOut,setIsLogOut] = useState(false);
  return (
    <div className="sideBar">
      <Link to="/Home">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/SetAppointment">Set Appointment</Link>
        <Link to="/NextAppointment">Next Appointment</Link>
        <Link to="/CreateBusiness">Create Business</Link>
        <button onClick={()=> setIsLogOut(true)}>OUT</button>
        {isLogOut?<LogOut/>:<div></div>} 
    </div>
  )
}
