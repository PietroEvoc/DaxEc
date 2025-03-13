import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const AdminDashboard = () => {
  const { isAuthenticated, user, loading } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      console.log("User is not authenticated. Redirecting to login...");
      navigate("/login");
    } else if (user && user.role !== "admin") {
      console.log("You do not have access to this page.");
      navigate("/");
    } else {
      // Fetch products
      axios.get("http://localhost:5001/api/products")
        .then((res) => setProducts(res.data))
        .catch((err) => console.error("Error fetching products:", err));

      // Fetch orders
      axios.get("http://localhost:5001/api/orders")
        .then((res) => setOrders(res.data))
        .catch((err) => console.error("Error fetching orders:", err));

      // Fetch messages
      axios.get(`http://localhost:5001/api/messages/conversation/${user.email}`)
        .then((res) => setMessages(res.data))
        .catch((err) => console.error("Error fetching messages:", err));
    }
  }, [isAuthenticated, loading, user, navigate]);

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5001/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!isAuthenticated || !user || user.role !== "admin") {
    return (
      <div className="text-center text-xl text-red-600">
        You do not have access to this page.
      </div>
    );
  }

  return (
    <div className="admin-dashboard bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Welcome, Admin {user.name}!
        </h1>
        <p className="text-center text-xl mb-8">Admin Dashboard</p>

        <div className="text-center mb-8">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700"
            onClick={() => navigate("/add-product")}
          >
            Add New Product
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Products Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Products</h2>
            <ul>
              {products.length === 0 ? (
                <li>No products available</li>
              ) : (
                products.map((product) => (
                  <li key={product._id} className="mb-4 p-3 border-b flex justify-between items-center">
                    <div>
                      <strong>{product.name}</strong> - ${product.price}
                    </div>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      Delete
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Orders Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Orders</h2>
            <ul>
              {orders.length === 0 ? (
                <li>No orders yet</li>
              ) : (
                orders.map((order) => (
                  <li key={order._id} className="mb-4 p-3 border-b">
                    <strong>Order ID:</strong> {order._id}
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Messages Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Messages</h2>
            <ul>
              {messages.length === 0 ? (
                <li>No messages received</li>
              ) : (
                messages.map((msg) => (
                  <li key={msg._id} className="mb-4 p-3 border-b">
                    <strong>From:</strong> {msg.sender} <br />
                    <strong>Email:</strong> {msg.email} <br />
                    <strong>Message:</strong> {msg.message}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;