import { useState , useContext} from 'react'
import { loginUser } from '../../../services/userService'
import { UserContext } from '../../../context/UserContext'
import jwt_decode from "jwt-decode";
import './login.css'
export default function Login() {
  const {user, setUser ,setIsLogin} = useContext(UserContext)
  const InputValue = (e) => {
    user[e.target.name] = e.target.value
    setUser({ ... user })
  }
  const SendData =async ()=>{
    // e.preventDefault();
    await loginUser(user)
    .then(res => {
      if (res.success) {
        localStorage.setItem("token", res.token);
        console.log("success");
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser(decoded.user)
        setIsLogin(true)
      }
    })
    .catch(rej => console.log(rej))
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={InputValue}/>
      <label htmlFor="">Password</label>
      <input type="text" name='password' onChange={InputValue}/>
      <button onClick={SendData}>Send</button>
    </div>
  )
}
