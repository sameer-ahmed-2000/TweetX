import { useEffect } from 'react';
import axiosInstance from '../functions/axiosInstance';
import { useAddFollower } from '../functions/followerAction';

export const useFetchFollowers = (endpoint) => {
    const addFollower = useAddFollower();

    useEffect(() => {
        const fetchFollowers = async () => {
        try {
            const response = await axiosInstance.get(endpoint);
            const users = response.data;
            users.forEach(user => {
            addFollower({
                _id: user._id,
                fullName: user.fullName,
                isFollowing: user.isFollowing,
                followingCount: user.followingCount,
            });
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
        };

        fetchFollowers();
    }, [endpoint, addFollower]);
};

