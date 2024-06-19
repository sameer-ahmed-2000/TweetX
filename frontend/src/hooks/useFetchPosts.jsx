import { useEffect } from 'react';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { fetchUserPostsSelector, otherPostsState, userPostsState } from '../atoms/postsAtoms';
import axiosInstance from '../action/axiosInstance';
import React from 'react';
import ReactDOM from 'react-dom';


export const useFetchUserPosts = () => {
    const setUserPosts = useSetRecoilState(userPostsState);
    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await axiosInstance.get('feed/myposts');
                setUserPosts(response.data);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        fetchUserPosts();
    }, [setUserPosts]);
};

export const useFetchOtherPosts = () => {
    const setOtherPosts = useSetRecoilState(otherPostsState);

    useEffect(() => {
        const fetchOtherPosts = async () => {
            try {
                const response = await axiosInstance.get('feed/feed');
                setOtherPosts(response.data);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        fetchOtherPosts();
    }, [setOtherPosts]);
};
