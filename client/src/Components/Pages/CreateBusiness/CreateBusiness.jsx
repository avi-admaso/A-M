import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Features/Loading/Loading.component";
import { UpdateUser } from "../../../services/userService";
import { UserContext } from "../../../context/UserContext";


export default function CreateBusiness() {
    const { user,setUser,loading,setLoading } = useContext(UserContext);
    const [createBusinessInfo, setCreateBusinessInfo] = useState({});
    const navigate = useNavigate();

    const createBusinessInfo = (event) => {
        createBusinessInfo[event.target.name] = event.target.value;
    };

    const createBusiness = (event) => {
        event.preventDefault();
        // setJoinTeamInfo(joinTeamInfo);
        setLoading(true)
        UpdateUser(user._id,user)
            .then((data) => {
                setUser({...user,businessName: user.businessName})
                console.log(data);
                navigate('/Home')
                console.log(user);      
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };

  return (
    loading ? <Loading/> :
    <div>
            <h1>Create Business</h1>

        
        <form onSubmit={createBusiness}>
            <label>Business Name</label>
            <input name="businessName" type="text" onChange={createBusinessInfo} />
    {/* isAdmin:{type: Boolean}, */}

            <label>Business image</label>
            <input name="image" type="text" onChange={createBusinessInfo} />

            <label>Business phoneNumber</label>
            <input name="phoneNumber" type="text" onChange={createBusinessInfo} />

            <label>Business Name</label>
            <input name="businessName" type="text" onChange={createBusinessInfo} />


            <label>Business Number</label>
            <input name="businessNumber" type="text" onChange={createBusinessInfo} />

            <button>Create Business</button>
        </form>
    </div>
  )
}











