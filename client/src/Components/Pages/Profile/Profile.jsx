import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import "./Profile.css";

const CreateProfile = (e) => {
  e.preventDefault();
  

}
const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="profilePage main">
      <div className="details">
        <h4>
          <img src={user.image} />
        </h4>
        <h4>firstName: {user.firstName}</h4>
        <h4>LastName : {user.LastName}</h4>
        <h4>Email: {user.email}</h4>
        <h4>Phone Number:{user.phoneNumber}</h4>
        <button onClick={CreateProfile}>Edit Profile</button>
      </div>
    </div>
  );
};
export default Profile;


