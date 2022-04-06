import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const LogOut = ()=>{
const { setUser , setIsLogin} = useContext(UserContext);
const navigate = useNavigate();

const LogOutFromApp = ()=>{
    setUser({})
    setIsLogin(false)
    localStorage.removeItem("token")
    navigate('/')
}
return(
    <div>
     <button onClick={LogOutFromApp}>logout</button>  
    </div>
)    
}
export default LogOut;