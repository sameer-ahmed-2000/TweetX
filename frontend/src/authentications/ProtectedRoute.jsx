import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

export const ProtectedRoute=({children})=>{
    const {isAuthenticated}=useAuth();

    if(!isAuthenticated){
        return <Navigate to="/signin" replace/>
    }
    return children
}