import { useRecoilValue } from "recoil";
import { followingUsedIdsAtom } from "../atoms/FollowingDetails";
import FollowingItem from "./FollowingItem";


function FollowingList(){
    const userIds=useRecoilValue(followingUsedIdsAtom);
    return(
        <div>
            {userIds.map(id=>(
                <FollowingItem key={id} userId={id}/>
            ))}
        </div>
    )
}
export default FollowingList;