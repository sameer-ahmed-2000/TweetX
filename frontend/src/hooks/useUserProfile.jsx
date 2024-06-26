import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userProfileAtom } from '../atoms/UserProfileAtom';
import { getToken } from '../action/getToken';
import React from 'react';
import ReactDOM from 'react-dom';

const useUserProfile = (userId) => {
    const [profile, setProfile] = useRecoilState(userProfileAtom);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
        try {
            const token=getToken();
            const userDetails = await axios.get('https://tweetx-w7n0.onrender.com/api/v1/user/me', { headers: { Authorization: `Bearer ${token}` } });
            const postCount = await axios.get('https://tweetx-w7n0.onrender.com/api/v1/user/postcount', { headers: { Authorization: `Bearer ${token}` } });
            const followerCount = await axios.get('https://tweetx-w7n0.onrender.com/api/v1/user/followercount', { headers: { Authorization: `Bearer ${token}` } });
            const followingCount = await axios.get('https://tweetx-w7n0.onrender.com/api/v1/user/followingcount', { headers: { Authorization: `Bearer ${token}` } });

            setProfile({
                fullName: userDetails.data.fullName,
                postCount: postCount.data.numberOfPost,
                followerCount: followerCount.data.numberOfFollowers,
                followingCount: followingCount.data.numberOfFollowing
            });
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };

        fetchProfile();
    }, [userId, setProfile]);

    return { profile, loading, error };
};

export default useUserProfile;
