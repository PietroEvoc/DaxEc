import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    // Log the data being sent to the server for debugging
    console.log({ name, email, password });

    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/register", 
        { name, email, password }, 
        { headers: { "Content-Type": "application/json" } }
      );
      login(response.data.token, response.data.user);
      navigate("/profile");
    } catch (error) {
      // Log the error response for debugging
      console.error("Error response:", error.response);
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-3 mb-4 border rounded-lg" 
            placeholder="Name" 
          />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 mb-4 border rounded-lg" 
            placeholder="Email" 
          />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 mb-4 border rounded-lg" 
            placeholder="Password" 
          />
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="w-full p-3 mb-4 border rounded-lg" 
            placeholder="Confirm Password" 
          />
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;