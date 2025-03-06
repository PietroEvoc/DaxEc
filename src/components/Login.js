import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/users/login", { email, password });
      login(response.data.token, response.data.user);
      navigate("/profile");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-4 border rounded-lg" placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-4 border rounded-lg" placeholder="Password" />
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">Login</button>
        </form>

        {/* Register Button */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <button onClick={() => navigate("/register")} className="text-blue-500 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;