import { createContext, useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        if (localStorage.token !== undefined) {
            const token = localStorage.getItem("token");
            const decoded = jwt_decode(token);
            setUser(decoded.user);
            
        }
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}