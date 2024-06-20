import React, { useState } from 'react';
import UserCard from './Card';
import { FollowButton } from './FollowButton';
import { FollowingButton } from './FollowingButton';
import FollowList from './FollowList';
import { useFetchFollowers } from '../hooks/useFetchFollwer';
import FollowingList from './FollowingList';
import { useFetchFollowing } from '../hooks/useFetchFollowing';
import { useRecoilValue } from 'recoil';
import { useFetchUserPosts } from '../hooks/useFetchPosts';
import { userPostsState } from '../atoms/postsAtoms';
import LogoutButton from './logout';



const ProfileTab = () => {

    const userPosts=useRecoilValue(userPostsState);
    useFetchFollowers('user/followers');
    useFetchFollowing('user/following');
    const [activeTab, setActiveTab] = useState('posts');
    useFetchUserPosts();

    const tabStyle = (tab) => ({
        cursor: 'pointer',
        padding: '10px 20px',
        borderBottom: activeTab === tab ? '2px solid transparent' : '',
        borderTop: activeTab === tab ? '2px solid #ec4899' : '',
        color: activeTab === tab ? '#747474' : '',
    });

    
    return (
        <div className="w-full max-w-md mx-auto mt-8">
            <div className="border border-gray-300"></div>
            
                <nav className="sticky top-0 flex text-sm text-custom-ash justify-center ">
                
                    {['posts', 'followers', 'following'].map((tab) => (
                        <div
                            key={tab}
                            style={tabStyle(tab)}
                            onClick={() => setActiveTab(tab)}
                            className="flex items-center gap-2 text-lg"
                        >
                            <img src="https://img.icons8.com/?size=100&id=gQyeH2JWpHth&format=png&color=000000" alt={`${tab} icon`} className="h-4 w-4"></img>
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </div>
                    ))}
                </nav>
            
            <div className="pt-4">
                {activeTab === 'posts' && (<div>{userPosts.map((post)=>(
                    <UserCard key={post._id} post={post}/>
                ))}</div>)}
                {activeTab === 'followers' && (
                    <div>
                        <FollowList></FollowList>
                    </div>
                )}
                {activeTab === 'following' && (
                    <div>
                        
                        <FollowingList></FollowingList>
                    </div>
                )}
                
                <LogoutButton></LogoutButton>
            </div>
        </div>
    );
};

export default ProfileTab;
