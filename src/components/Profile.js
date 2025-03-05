import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p className="text-lg">Welcome, {user?.email}!</p>
      <button onClick={logout} className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Profile;