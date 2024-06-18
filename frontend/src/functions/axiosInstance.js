import axios from 'axios';
import { getToken } from '../functions/getToken';

const axiosInstance = axios.create({
    baseURL: 'https://tweetx-oca8.onrender.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;