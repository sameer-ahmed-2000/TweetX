import { useRecoilState } from "recoil";
import { followingStateFamily } from "../atoms/FollowingDetails";
import axiosInstance from '../functions/axiosInstance';
import { FollowingButton } from './FollowingButton';

function FollowingItem({userId}){
    const [user,setUser]=useRecoilState(followingStateFamily(userId));
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
    return(
        <div className="flex items-center justify-between py-2 ">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 border-2 rounded-full"></div>
                                    <div className="ml-3">
                                        <div className="font-bold">{user.fullName}</div>
                                        <div className="text-sm text-gray-600">Following: {user.followingCount}</div>
                                    </div>
                                </div>
                                <FollowingButton onClick={handleUnfollowUser} label={'Following'}/>
                            </div>
    )
}

export default FollowingItem