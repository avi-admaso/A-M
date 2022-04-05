import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Layout/Header/Header";
import Home from "../Components/Pages/Home/Home";
import Footer from "../Components/Layout/Footer/Footer";
import SignUp from "../Components/Pages/SignUp/SignUp"
import Login from "../Components/Pages/Login/Login";
import Page404 from "../Components/Pages/Page404/Page404";
import Profile from "../Components/Pages/Profile/Profile";
import RequiredAuth from "../Components/Pages/RequiredAuth/RequiredAuth";
import ContactUs from "../Components/Pages/ContactUs/ContactUs";
import Calendar from "../Components/Pages/Calendar/Calendar";


export default function RouterApp(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/** Public Routes **/}
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        {/** Private Routes **/}
        <Route element={<RequiredAuth />}>
             <Route path="/Profile" element={<Profile />} />
             <Route path="/Calender" element={<Calendar/>}/>

        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};



