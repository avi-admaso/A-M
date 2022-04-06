import { useContext,useState } from "react";
import { authContext } from "../../../Context/AuthProvider.component";
import { joinGroup } from "../../../Services/GroupsService.service";
import { useNavigate } from "react-router-dom";
import Loading from "../../Features/Loading/Loading.component";



export default function JoinBusiness() {
    const { auth,setAuth,loading,setLoading } = useContext(authContext);
    const [joinTeamInfo, setJoinTeamInfo] = useState({});
    const navigate = useNavigate();

  return (
    loading ? <Loading/> :
    <div>
            <h1>JoinBusiness</h1>

        
        <form onSubmit={joinTeam}>
            <label>team name</label>
            <input name="groupName" type="text" onChange={joinInfo} />

            <label>password</label>
            <input name="password" type="password" onChange={joinInfo} />

            <button>join team</button>
        </form>
    </div>
)
}









    // const joinInfo = (event: any): void => {
    //     joinTeamInfo[event.target.name] = event.target.value;
    // };

    // const joinTeam = (event: any): void => {
    //     event.preventDefault();
    //     // setJoinTeamInfo(joinTeamInfo);
    //     setLoading(true)
    //     joinGroup(auth.id,joinTeamInfo)
    //         .then((data) => {
    //             setAuth(auth)
    //             console.log(data);
    //             navigate('/ListToBuy')
    //             console.log(auth);      
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => setLoading(false));
    // };

