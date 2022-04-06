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
        <h1>Profile Page </h1>
      <div className="details">
        <img src={user.image} alt="user image"/>
        <section className="detailsUser">
        <h4>{user.firstName} {user.lastName}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Phone Number:{user.phoneNumber}</h4>
       
        {
          bool?
          <EditProfile/>:
          <div></div>
        } 
        <button onClick={toggle}>Edit Profile</button>
        </section>
      </div>
    </div>
  );
};
export default Profile;


