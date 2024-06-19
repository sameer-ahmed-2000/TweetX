import { useEffect } from 'react';
import axiosInstance from '../action/axiosInstance';
import { useAddfollowing } from '../action/followingAction';
import React from 'react';
import ReactDOM from 'react-dom';

export const useFetchFollowing = (endpoint) => {
    const addFollowing = useAddfollowing();

    useEffect(() => {
        const fetchFollowing = async () => {
        try {
            const response = await axiosInstance.get(endpoint);
            const users = response.data;
            users.forEach(user => {
            addFollowing({
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

        fetchFollowing();
    }, [endpoint, addFollowing]);
};

