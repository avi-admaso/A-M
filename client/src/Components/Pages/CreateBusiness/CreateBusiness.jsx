import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Loading from "../../Features/Loading/Loading.component";
import { UpdateUser } from "../../../services/userService";
import { AddBusiness } from "../../../services/businessService";
import { UserContext } from "../../../context/UserContext";
import './CreateBusiness.css'
const CreateBusiness = ()=> {
    const { user, setUser, loading, setLoading } = useContext(UserContext);
    const [createBusinessInfo, setCreateBusinessInfo] = useState({});
    const navigate = useNavigate();

    const createBusinessInfos = (event) => {
        createBusinessInfo[event.target.name] = event.target.value;
        setCreateBusinessInfo({ ...createBusinessInfo })
    };

    const createBusiness = (event) => {
        event.preventDefault();
        AddBusiness({...createBusinessInfo,userId:user._id},user._id)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.log(err))
    };

    return (
            <div className="CreateBusiness">
                <h1>Create Business</h1>
                <form onSubmit={createBusiness}>
                    <label>Business Name</label>
                    <input name="businessName" type="text" onChange={createBusinessInfos} />

                    <label>Business image</label>
                    <input name="image" type="text" onChange={createBusinessInfos} />

                    <label>Business Number</label>
                    <input name="businessNumber" type="text" onChange={createBusinessInfos} />
{/* 
                    <label>Options</label>
                    <input name="serviceOptions" type="text" onChange={createBusinessInfos} />

                    <label>Opening Hours</label>
                    <input name="openingHours" type="text" onChange={createBusinessInfos} /> */}
                    {/* <input type="text" /> */}
                    <br/>
                    <button>Create Business</button>
                </form>
            </div>
    )
}

export default CreateBusiness;









