import  "./landing.css"
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import { useState} from 'react'
const Landing = () => {
const [login,setLogin] = useState(false)
const [sign,setSign] = useState(false)
const PresentLogin = ()=>{
setLogin(!login)
}
const PresentLogin2 = ()=>{
setSign(!sign)
}
  return (
    <div className="Landing main" >    
       <img src="https://www.torim4u.co.il/wp-content/uploads/2016/08/ehr-1476525_640.png" alt="" />
       <button onClick={PresentLogin}>Login</button>
       {login?<Login/>:<div></div>}
       <button onClick={PresentLogin2}>Sign Up</button>
       {sign?<SignUp/>:<div></div>}
       {/* <label className="">Login</label>
       <input type="text" />
       <label className="">password</label>
       <input type="text" /> */}
    </div>
  );
};
export default Landing;
 