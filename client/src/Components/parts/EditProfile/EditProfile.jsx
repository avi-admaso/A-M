
import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { UpdateUser } from "../../../services/userService"
import "./EditProfile.css"

const EditProfile = () => {
  const { user, setU } = useContext(UserContext);
  const [upDate, setUpData] = useState({})

  const InputValue = (e) => {
    upDate[e.target.name] = e.target.value
    setUpData({ ...upDate })
  }
  const tt = (e) => {
    e.preventDefault()
    console.log(user._id);
    UpdateUser(user._id, upDate).then((res) => console.log(res));
  }


  return (
    <div className="EditProfile">

      {/* <button className='close_editPopUp' onClick={nn}>x</button> */}
      <form>
        <h1 >Edit Profile</h1><br />
        <input type="text" name="firstName" onChange={InputValue} defaultValue={user.firstName} />
        <input type="text" name="lastName" deonChange={InputValue} defaultValue={user.lastName} />
        <input type="text" name="email" onChange={InputValue} defaultValue={user.email} />
        <input type="text" name="image" onChange={InputValue} defaultValue={user.image} />
        <input type="text" name="phoneNumber" onChange={InputValue} defaultValue={user.phoneNumber} /><br />
        <button onClick={tt} >save</button>
      </form>

    </div>
  );
};
export default EditProfile;



{/* <div className="EditProfile">
       
<button className='close_editPopUp' >x</button>
<form>
<h1 >Edit Profile</h1><br/>
<input type="text" name="firstName" onChange={InputValue} defaultValue={user.firstName} />
<input type="text" name="lastName" deonChange={InputValue} defaultValue={user.lastName} />
<input type="text" name="email" onChange={InputValue} defaultValue={user.email}  />
<input type="text" name="image" onChange={InputValue} defaultValue={user.image} />
<input type="text" name="phoneNumber" onChange={InputValue} defaultValue={user.phoneNumber } /><br/>
<button onClick={tt} >save</button>
</form> */}

// </div>