import { useState , useContext} from 'react';
import { registerNewUser } from '../../../services/userService';
import { UserContext } from '../../../context/UserContext';
import jwt_decode from "jwt-decode";
export default function SignUp() {
  const {user, setUser} = useContext(UserContext)
  const InputValue = (e) => {
    user[e.target.name] = e.target.value
    setUser({ ... user })
  }
  const SendData =async (e)=>{
    e.preventDefault();
    // await loginUser(user)
    // .then(res => {
    //   if (res.success) {
    //     localStorage.setItem("token", res.token);
    //     console.log("success");
    //     const token = localStorage.getItem("token");
    //     const decoded = jwt_decode(token);
    //     setUser(decoded.user)
    //   }
    // })
    // .catch(rej => console.log(rej))
  }
  return (
    <div className='main'>
     <h1>Sign Up</h1> 
     <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={InputValue}/>
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={InputValue}/>
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={InputValue}/>
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={InputValue}/>
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={InputValue}/>
    </div>

  )
}
