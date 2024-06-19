import { atom, selector } from 'recoil';
import axiosInstance from '../action/axiosInstance';

export const userPostsState = atom({
    key: 'userPostsState',
    default: [],
});

export const otherPostsState = atom({
    key: 'otherPostsState',
    default: [],
});

export const fetchUserPostsSelector = selector({
    key: 'fetchUserPostsSelector',
    get: async () => {
        try {
        const response = await axiosInstance.get('feed/myposts');
        return response.data;
        } catch (error) {
        console.error('Error fetching user posts:', error);
        return [];
        }
    },
});

export const fetchOtherPostsSelector = selector({
    key: 'fetchOtherPostsSelector',
    get: async () => {
        try {
        const response = await axiosInstance.get('feed/feed');
        return response.data;
        } catch (error) {
        console.error('Error fetching other posts:', error);
        return [];
        }
    },
});
