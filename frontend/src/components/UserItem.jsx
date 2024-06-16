import React from 'react';
import { useRecoilState } from 'recoil';
import { userStateFamily } from '../atoms/UserDetailsAtomFamily';
import axiosInstance from '../functions/axiosInstance';
import { FollowingButton } from './FollowingButton';
import { FollowButton } from './FollowButton';

function UserItem({ userId }) {
    const [user, setUser] = useRecoilState(userStateFamily(userId));

    const handleFollowUser = async () => {
        try {
        await axiosInstance.post('user/follow', { targetUserId: userId });
        setUser(prev => ({ ...prev, isFollowing: true }));
        } catch (error) {
        console.error('Error following user:', error);
        }
    };

    const handleUnfollowUser = async () => {
        try {
        await axiosInstance.post('user/unfollow', { targetUserId: userId });
        setUser(prev => ({ ...prev, isFollowing: false }));
        } catch (error) {
        console.error('Error unfollowing user:', error);
        }
    };

    return (
        <div className="md:grid grid-cols-9">
            <div className="col-span-3"></div>
            <div className="pl-8 col-span-3">
                <div className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                    <div className="w-12 h-12 border-2 rounded-full"></div>
                    <div className="ml-3">
                    <div className="font-sans font-bold text-custom-black2">{user.fullName}</div>
                    <div className="text-sm text-custom-ash">Following: {user.followingCount}</div>

                    </div>
                </div>
                {user.isFollowing?(
                    <FollowingButton onClick={handleUnfollowUser} label={'Following'}/>
                ):(
                    <FollowButton onClick={handleFollowUser} label={'Follow'}/>
                )}
            </div>
        </div>
        </div>
    );
}

export default UserItem;