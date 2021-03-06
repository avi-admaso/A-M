import { useState, useContext } from 'react';
import { registerNewUser } from '../../../services/userService';
import { UserContext } from '../../../context/UserContext';
import jwt_decode from "jwt-decode";
import './signUp.css'
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
  const { user, setUser, setIsLogin, setSignUp } = useContext(UserContext)
  const navigate = useNavigate();

  
  const InputValue = (e) => {
    user[e.target.name] = e.target.value
    setUser({ ...user })
  }

  const SendData =async (e)=>{
    e.preventDefault();
    await registerNewUser(user)
    .then(res => {
      if (res.success) {
        localStorage.setItem("token", res.token);
        console.log("success");
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser(decoded.user)
        setIsLogin(true)
        navigate('/Home');
      }
    })
    .catch(rej => console.log(rej))
  }


  const ClosePopUp = () => {
    setSignUp(false)
  }
  return (
    <div className='signUp'>
      <span className='close_popUp' onClick={ClosePopUp}>x</span>
      <h1>Sign Up</h1>
      <label htmlFor="">first Name:</label>
      <input type="text" name='firstName' onChange={InputValue} /> <br />
      <label htmlFor="">last Name:</label>
      <input type="text" name='lastName' onChange={InputValue} /> <br />
      <label htmlFor="">Email:</label>
      <input type="text" name='email' onChange={InputValue} /> <br />
      <label htmlFor="">phone Number:</label>
      <input type="text" name='phoneNumber' onChange={InputValue} /> <br />
      <label htmlFor="">password:</label>
      <input type="text" name='password' onChange={InputValue} /> <br />
      <button onClick={SendData}>Create</button>
    </div>

  )
}
