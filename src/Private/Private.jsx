import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Auth_Provider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default Private;