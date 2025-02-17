import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('image', product.image);

    try {
      const response = await axios.post('http://localhost:5001/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccess(true);
      setProduct({
        name: '',
        description: '',
        price: '',
        image: null,
      });
    } catch (err) {
      setError('Failed to add product. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">Add a New Product</h2>

      {success && <p className="text-green-500 text-center mb-4">Product added successfully!</p>}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-800">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-lg font-semibold text-gray-800">Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="price" className="block text-lg font-semibold text-gray-800">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image" className="block text-lg font-semibold text-gray-800">Product Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg"
          />
        </div>

        {product.image && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Image Preview:</h3>
            <img
              src={URL.createObjectURL(product.image)}
              alt="Product Preview"
              className="mt-2 w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        )}

        <div className="text-center">
          <button 
            type="submit" 
            disabled={loading}
            className="w-full p-4 mt-6 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;