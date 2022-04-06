import React, { useContext ,useState} from "react";
import { UserContext } from "../../../context/UserContext";
import "./Profile.css";
import EditProfile from "../../parts/EditProfile/EditProfile"


const Profile = () => {
  const[bool,setBool]= useState(false)
  const { user } = useContext(UserContext);
 const toggle = () => {
  setBool(!bool);
 }
  return (
    <div className="profilePage main">
      <div className="details">
        <h4>
          <img src={user.image} />
        </h4>
        <h4>firstName: {user.firstName}</h4>
        <h4>LastName : {user.lastName}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Phone Number:{user.phoneNumber}</h4>
       
        {
          bool?
          <EditProfile/>:
          <div></div>
        } 
        <button onClick={toggle}>Edit Profile</button>
      </div>
    </div>
  );
};
export default Profile;


