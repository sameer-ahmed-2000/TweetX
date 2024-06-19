import { useEffect } from 'react';
import axiosInstance from '../action/axiosInstance';
import { useAddFollower } from '../action/followerAction';
import React from 'react';
import ReactDOM from 'react-dom';

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

