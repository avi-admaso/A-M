import "./landing.css"
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import { useState, useContext } from 'react'
import { UserContext } from "../../../context/UserContext"
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const { login, setLogin, signUp, setSignUp, isLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const PresentLogin = () => {
    setLogin(!login)
  }
  const PresentLogin2 = () => {
    setSignUp(!signUp)
  }
  return (
    <div className="Landing main" >
      {
        !isLogin?
          <>
            <img src="https://www.torim4u.co.il/wp-content/uploads/2016/08/ehr-1476525_640.png" alt="" />
            <button onClick={PresentLogin}>Login</button>
            {login ? <Login /> : <div></div>}
            <button onClick={PresentLogin2}>Sign Up</button>
            {signUp ? <SignUp /> : <div></div>}
          </>:
          navigate("/Home")
      }

    </div>
  );
};
export default Landing;
