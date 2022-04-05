import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sideBar">
        <Link to="/SignUp">SignUp</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/SetAppointment">Set Appointment</Link>
        <Link to="/NextAppointment">Next Appointment</Link>
    </div>
  )
}
