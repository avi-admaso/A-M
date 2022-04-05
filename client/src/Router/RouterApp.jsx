import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Footer from "../Components/parts/Footers/Footer"
import SignUp from "../Components/Pages/SignUp/SignUp"
import Login from "../Components/Pages/Login/Login";
import Page404 from "../Components/Pages/Page404/Page404";
import Profile from "../Components/Pages/Profile/Profile";
import RequiredAuth from "../Components/parts/RequiredAuth/RequiredAuth"
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import HistoricalAppointment from "../Components/Pages/HistoricalAppointment/HistoricalAppointment";
import NextAppointment from "../Components/Pages/NextAppointment/NextAppointment";
import SetAppointment from "../Components/Pages/SetAppointment/SetAppointment";
import SideBar from "../Components/parts/SideBar/SideBar";
import Calendars from "../Components/Pages/Calendar/Calendars";
import NavBar from "../Components/parts/navbar/Nav-Bar"
import Landing from "../Components/Pages/Landing/Landing";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import AboutUs from "../Components/parts/AboutUs/AboutUs";
export default function RouterApp(){
const { isLogin } = useContext(UserContext)
  return (
    <BrowserRouter>
        <NavBar/>
        {
          isLogin?
          <SideBar/>:
          <div></div>
        }
        <SideBar/>
        <AboutUs/>
      <Routes>
        {/** Public Routes **/}
        <Route path="/" element={<Landing/>} />

        {/* <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} /> */}
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        
        {/** Private Routes **/}
        <Route element={<RequiredAuth />}>
             <Route path="/Home" element={<Home />} />
             <Route path="/Profile" element={<Profile />} />
             <Route path="/Calender" element={<Calendars/>}/>
             <Route path="/HistoricalAppointment" element={<HistoricalAppointment/>}/>
             <Route path="/SetAppointment" element={<SetAppointment/>}/>
             <Route path="/NextAppointment" element={<NextAppointment/>}/>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};



