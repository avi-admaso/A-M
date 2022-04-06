import { useState , useContext} from 'react'
import { loginUser } from '../../../services/userService'
import { UserContext } from '../../../context/UserContext'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import './login.css'
export default function Login() {
  const {user, setUser ,setIsLogin , setLogin} = useContext(UserContext)
  const InputValue = (e) => {
    user[e.target.name] = e.target.value
    setUser({ ... user })
  }
<<<<<<< HEAD
  const SendData =async ()=>{
    // e.preventDefault();
    const navigate = useNavigate();

=======
  const SendData =async (e)=>{
    e.preventDefault();
>>>>>>> 8202797d1963a204dae46f54c43e9182a86faa3f
    await loginUser(user)
    .then(res => {
      if (res.success) {
        localStorage.setItem("token", res.token);
        console.log("success");
        const token = localStorage.getItem("token");
        const decoded = jwt_decode(token);
        setUser(decoded.user)
        setIsLogin(true)
<<<<<<< HEAD
        navigate('/Home')
=======
        setLogin(false)
>>>>>>> 8202797d1963a204dae46f54c43e9182a86faa3f
      }
    })
    .catch(rej => console.log(rej))
  }
  const ClosePopUp =()=>{
    setLogin(false)
  }
  return (
    <div className='login'>
      <span className='close_popUp' onClick={ClosePopUp}>x</span>
      <h1>Login</h1>
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={InputValue}/>
      <label htmlFor="">Password</label>
      <input type="text" name='password' onChange={InputValue}/>
      <button onClick={SendData}>Send</button>
    </div>
  )
}
