import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
import Footer from "../Components/parts/Footer/Footer"
import SignUp from "../Components/Pages/SignUp/SignUp"
import Login from "../Components/Pages/Login/Login";
import Page404 from "../Components/Pages/Page404/Page404";
import Profile from "../Components/Pages/Profile/Profile";
import RequiredAuth from "../Components/parts/RequiredAuth/RequiredAuth"
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import Calendar from "../Components/Pages/Calendar/Calendar";
import HistoricalAppointment from "../Components/Pages/HistoricalAppointment/HistoricalAppointment";
import NextAppointment from "../Components/Pages/NextAppointment/NextAppointment";
import SetAppointment from "../Components/Pages/SetAppointment/SetAppointment";
import SideBar from "../Components/parts/SideBar/SideBar";


export default function RouterApp(){
  return (
    <BrowserRouter>
      <Routes>
        {/** Public Routes **/}
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        {/** Private Routes **/}
        {/* <Route element={<RequiredAuth />}> */}
             <Route path="/SideBar" element={<SideBar />} />
             <Route path="/Profile" element={<Profile />} />
             <Route path="/Calender" element={<Calendar/>}/>
             <Route path="/HistoricalAppointment" element={<HistoricalAppointment/>}/>
             <Route path="/SetAppointment" element={<SetAppointment/>}/>
             <Route path="/NextAppointment" element={<NextAppointment/>}/>
        {/* </Route> */}

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};



