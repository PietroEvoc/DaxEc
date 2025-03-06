import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show loading while fetching authentication state
  }

  if (!isAuthenticated || user.role !== 'admin') {
    // Redirect to login if not authenticated or not an admin
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default PrivateRoute;