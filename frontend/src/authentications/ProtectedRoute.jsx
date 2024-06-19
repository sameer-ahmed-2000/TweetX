import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'
import React from 'react';
import ReactDOM from 'react-dom';

export const ProtectedRoute=({children})=>{
    const {isAuthenticated}=useAuth();

    if(!isAuthenticated){
        return <Navigate to="/signin" replace/>
    }
    return children
}