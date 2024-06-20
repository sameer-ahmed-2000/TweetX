import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('Checking for token in localStorage...');
        const token = localStorage.getItem('token');
        if (token) {
            console.log('Token found:');
            setIsAuthenticated(true);
        } else {
            console.log('No token found');
        }
        setIsLoading(false);
    }, []);

    const login = (token) => {
        console.log('Logging in with token:');
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        console.log('Logging out...');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
