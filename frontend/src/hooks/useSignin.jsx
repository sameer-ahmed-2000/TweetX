import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSignin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignin = async () => {
        if (!username || !password) {
            setError('Please fill in all fields');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/signin', {
                username,
                password
            });
            localStorage.setItem('token', response.data.token);
            navigate('/main');
        } catch (err) {
            setError('Sign in failed, Please check your credentials and try again');
        } finally {
            setLoading(false);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        loading,
        error,
        handleSignin
    };
}