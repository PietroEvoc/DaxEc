import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleGoToAdminDashboard = () => {
    navigate('/admin/dashboard');
  };

  const handleLogout = async () => {
    try {
      await logout(); // Call logout from context
      navigate('/login'); // Redirect to login after logging out
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-1/2 md:w-1/3">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">Profile</h1>
        {isAuthenticated && user ? (
          <>
            <p className="text-lg text-gray-600 mb-4">Welcome, <span className="font-semibold text-blue-500">{user.name}</span></p>
            
            {user.role === 'admin' && (
              <button
                onClick={handleGoToAdminDashboard}
                className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Go to Admin Dashboard
              </button>
            )}

            <button
              onClick={handleLogout}
              className="w-full mt-4 py-2 px-4 bg-red-600 text-white rounded-lg text-lg font-medium hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-500">You need to log in to access your profile.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;