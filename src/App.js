// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import AboutPage from "./components/AboutPage";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;