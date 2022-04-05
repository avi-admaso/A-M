import { createContext, useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isLogin,setIsLogin] = useState(false);
    useEffect(() => {
        if (localStorage.token !== undefined) {
            const token = localStorage.getItem("token");
            const decoded = jwt_decode(token);
            setUser(decoded.user);
            setIsLogin(true)
        }
        // localStorage.removeItem("token")
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser ,setIsLogin ,isLogin}}>
            {children}
        </UserContext.Provider>
    )
}