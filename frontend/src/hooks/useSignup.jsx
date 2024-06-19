import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [fullName, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const handleSignup = async () => {
        if (!username || !fullName || !password || !confirmpassword || password !== confirmpassword) {
            setError('Please fill in all fields and make sure passwords match');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('https://tweetx-w7n0.onrender.com/api/v1/user/signup', {
                username,
                fullName,
                password
            });
            localStorage.setItem('token', response.data.token);
            navigate('/main');
        } catch (err) {
            setError('Sign up failed, Please check your credentials and try again');
        } finally {
            setLoading(false);
        }
    };

    return {
        username,
        setUsername,
        fullName,
        setFullname,
        confirmpassword,
        setConfirmpassword,
        password,
        setPassword,
        loading,
        error,
        handleSignup
    };
}