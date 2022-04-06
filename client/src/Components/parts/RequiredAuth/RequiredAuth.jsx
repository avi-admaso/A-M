import { useContext} from "react"
import { Outlet, Link} from "react-router-dom"
// import { authContext } from "../../../Context/AuthProvider.component"
import { UserContext } from "../../../context/UserContext"
export default function RequiredAuth() {
  const {isLogin} = useContext(UserContext)
  return (
    <>
    {isLogin ? <Outlet/> : <Link to='/Login' />}
    </>    
  )
}
