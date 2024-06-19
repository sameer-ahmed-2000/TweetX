import React from 'react';
import ReactDOM from 'react-dom';

import { useRecoilValue } from "recoil";
import { followerUsedIdsAtom } from "../atoms/FollowerDetails";
import FollowerItem from "./FollowerItem";


function FollowList(){
    const userIds=useRecoilValue(followerUsedIdsAtom);
    return(
        <div>
            {userIds.map(id=>(
                <FollowerItem key={id} userId={id}/>
            ))}
        </div>
    )
}
export default FollowList;