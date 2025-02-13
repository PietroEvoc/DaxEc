import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import AboutPage from "./components/AboutPage";
import Cart from "./components/Cart"; // Import Cart component
import AddProduct from "./components/AddProduct"; // Import AddProduct component
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<Cart />} /> {/* Add this route for Cart */}
          <Route path="/add-product" element={<AddProduct />} /> {/* Add route for AddProduct */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;