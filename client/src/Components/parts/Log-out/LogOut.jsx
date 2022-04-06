import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
const LogOut = ()=>{
const { setUser , setIsLogin} = useContext(UserContext);
const LogOutFromApp = ()=>{
    setUser({})
    setIsLogin(false)
    localStorage.removeItem("token")
}
return(
    <div>
     <button onClick={LogOutFromApp}>logout</button>  
    </div>
)    
}
export default LogOut;