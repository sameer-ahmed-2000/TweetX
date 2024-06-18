import { useRecoilValue } from "recoil"
import UserCard from "./Card"
import { otherPostsState } from "../atoms/postsAtoms"
import { useFetchOtherPosts } from "../hooks/useFetchPosts";
import { useState } from "react";
import { FollowButton } from "./FollowButton";
import { NewPostCard } from "./NewPost";


export const Feed=()=>{

    const [showNewPostCard,setShowNewPostCard]=useState(false);
    const handleNewPostSubmit=(newPost)=>{
        setShowNewPostCard(false);
    }
    const feed=useRecoilValue(otherPostsState);
    useFetchOtherPosts();
    return(
    <div className="md:grid grid-cols-9">
        <div className="col-span-3">

        </div>
        <div className="pl-8 col-span-3">
            <div className="py-6">
            <FollowButton onClick={()=>setShowNewPostCard(true)} label={'Write'}></FollowButton>
            </div>
            
            {showNewPostCard && <NewPostCard onPostSubmit={handleNewPostSubmit}/>}
            {feed.map(post=>(
                <UserCard key={post._id} post={post}></UserCard>
                ))}
        </div>
        <div className="col-span-1">

        </div>
    </div>
    
)
}