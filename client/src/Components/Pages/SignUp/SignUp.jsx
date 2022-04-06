import { useState, useContext } from 'react';
import { registerNewUser } from '../../../services/userService';
import { UserContext } from '../../../context/UserContext';
import jwt_decode from "jwt-decode";
import './signUp.css'
export default function SignUp() {
  const { user, setUser, setIsLogin, setSignUp } = useContext(UserContext)
  const InputValue = (e) => {
    user[e.target.name] = e.target.value
    setUser({ ...user })
  }

  const SendData = async (e) => {
    e.preventDefault();
    await registerNewUser(user)
      .then(res => {
        if (res.success) {
          localStorage.setItem("token", res.token);
          console.log("success");
          const token = localStorage.getItem("token");
          const decoded = jwt_decode(token);
          setUser(decoded.user);
          setIsLogin(true);
          setSignUp(false);

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
      <label htmlFor="">first Name</label>
      <input type="text" name='firstName' onChange={InputValue} />
      <label htmlFor="">last Name</label>
      <input type="text" name='lastName' onChange={InputValue} />
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={InputValue} />
      <label htmlFor="">phone Number</label>
      <input type="text" name='phoneNumber' onChange={InputValue} />
      <label htmlFor="">password</label>
      <input type="text" name='password' onChange={InputValue} />
      <button onClick={SendData}>Create</button>
    </div>

  )
}
