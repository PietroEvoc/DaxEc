import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { isAuthenticated, user, loading } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      console.log('User is not authenticated. Redirecting to login...');
      navigate('/login');
    } else if (user && user.role !== 'admin') {
      console.log('You do not have access to this page.');
      navigate('/');
    } else {
      // Fetch data for the admin dashboard
      axios
        .get('http://localhost:5001/api/products')
        .then((res) => setProducts(res.data))
        .catch((err) => console.error('Error fetching products:', err));

      axios
        .get('http://localhost:5001/api/orders')
        .then((res) => setOrders(res.data))
        .catch((err) => console.error('Error fetching orders:', err));

      axios
        .get('http://localhost:5001/api/messages')
        .then((res) => setMessages(res.data))
        .catch((err) => console.error('Error fetching messages:', err));
    }
  }, [isAuthenticated, loading, user, navigate]);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!isAuthenticated || !user || user.role !== 'admin') {
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
            onClick={() => navigate('/add-product')}
          >
            Add New Product
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Products Section */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Products</h2>
            <ul>
              {products.length === 0 ? (
                <li>No products available</li>
              ) : (
                products.map((product) => (
                  <li key={product._id} className="mb-2">
                    {product.name} - ${product.price}
                    <button
                      className="bg-red-600 text-white py-1 px-3 rounded-lg ml-4"
                      onClick={() => deleteProduct(product._id)}
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
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Orders</h2>
            <ul>
              {orders.length === 0 ? (
                <li>No orders available</li>
              ) : (
                orders.map((order) => (
                  <li key={order._id} className="mb-2">
                    Order #{order._id} - {order.status}
                    <button
                      className="bg-yellow-600 text-white py-1 px-3 rounded-lg ml-4"
                      onClick={() => handleOrderStatusChange(order._id)}
                    >
                      Change Status
                    </button>
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
                <li>No messages available</li>
              ) : (
                messages.map((message) => (
                  <li key={message._id} className="mb-2">
                    {message.sender}: {message.text}
                    <button
                      className="bg-green-600 text-white py-1 px-3 rounded-lg ml-4"
                      onClick={() => replyToMessage(message._id)}
                    >
                      Reply
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  function deleteProduct(productId) {
    axios
      .delete(`http://localhost:5001/api/products/${productId}`)
      .then(() => {
        setProducts((prev) => prev.filter((product) => product._id !== productId));
      })
      .catch((err) => console.error('Error deleting product:', err));
  }

  function handleOrderStatusChange(orderId) {
    const updatedOrders = orders.map((order) =>
      order._id === orderId ? { ...order, status: 'Processed' } : order
    );
    setOrders(updatedOrders);

    // You can also update the order status on the server if needed
    axios
      .put(`http://localhost:5001/api/orders/${orderId}`, { status: 'Processed' })
      .catch((err) => console.error('Error updating order status:', err));
  }

  function replyToMessage(messageId) {
    const replyText = prompt('Enter your reply:');
    if (replyText) {
      // Send reply to server (optional)
      axios
        .post(`http://localhost:5001/api/messages/${messageId}/reply`, { reply: replyText })
        .then((res) => {
          setMessages((prev) =>
            prev.map((message) =>
              message._id === messageId ? { ...message, reply: res.data.reply } : message
            )
          );
        })
        .catch((err) => console.error('Error replying to message:', err));
    }
  }
};

export default AdminDashboard;