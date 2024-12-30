/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('user'));

    return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export const AuthRoute = ({ children }) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('user'));

    return isAuthenticated ? <Navigate to="/home" /> : children;
};