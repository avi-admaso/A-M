import { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Features/Loading/Loading.component";
import { UpdateUser } from "../../../services/userService";
import { UserContext } from "../../../context/UserContext";



export default function JoinBusiness() {
    const { user,setUser,loading,setLoading } = useContext(UserContext);
    const [joinBusinessInfo, setJoinBusinessInfo] = useState({});
    const navigate = useNavigate();

    
    const joinInfo = (event) => {
        joinTeamInfo[event.target.name] = event.target.value;
    };

    const joinTeam = (event) => {
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
            <h1>JoinBusiness</h1>

        
        <form onSubmit={joinTeam}>
            <label>Business Name</label>
            <input name="businessName" type="text" onChange={joinInfo} />

            <label>password</label>
            <input name="password" type="password" onChange={joinInfo} />

            <button>Join Business</button>
        </form>
    </div>
)
}









