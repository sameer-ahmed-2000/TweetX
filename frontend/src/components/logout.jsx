import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authentications/AuthContext';

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/signin');
    };

    return (
        <button className="rounded h-8 w-24 px-4 py-1 font-medium rounded-m text-sm bg-custom-red text-white" onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
