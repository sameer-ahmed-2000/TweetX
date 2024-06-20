import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Navigate to="/main" replace />;
    }

    return children;
};
