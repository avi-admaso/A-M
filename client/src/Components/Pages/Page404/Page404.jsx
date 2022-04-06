import React from 'react'
import "./Style.css";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const Navigate = useNavigate();
  return (<div className="main">
    <div className='ErrPage'>
    <h1>404</h1>
    <p>The Page You Were Looking For Does Not Exist</p> <br />
    <button onClick={()=>Navigate("/Home")}>BACK TO HOME</button> 
    </div>
    </div>
  )
}
