import { createContext, useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    // const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [login, setLogin] = useState(false)
    const [signUp, setSignUp] = useState(false)
    useEffect(() => {
        if (localStorage.token !== undefined) {
            const token = localStorage.getItem("token");
            const decoded = jwt_decode(token);
            setUser(decoded.user);
            setIsLogin(true)
            // navigate("")
        }
    }, [])
    
    return (
        <UserContext.Provider value={{ user, setUser, setIsLogin, isLogin,login, setLogin,signUp, setSignUp }}>
            {children}
        </UserContext.Provider>
    )
}