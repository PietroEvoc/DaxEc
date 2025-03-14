DaxDudes E-Commerce Website

DaxDudes is an e-commerce platform designed for an independent artist to showcase and sell artwork, provide custom commissions, and connect directly with customers without relying on high-commission marketplaces.

Live Demo
https://dax-ec-ytjo.vercel.app/

Project Overview

Independent artists often struggle to reach a wider audience due to expensive commissions on generic marketplaces. DaxDudes solves this by providing an artist-first platform that enables:
	•	A personalized online gallery and shop
	•	Custom art requests through a streamlined contact form
	•	A smooth shopping experience with secure payment options
	•	Direct artist-customer interactions

The platform is built with simplicity and an aesthetic that reflects the artist’s style.

Features

User Features
	•	Browse and purchase artwork
	•	View detailed product descriptions
	•	Add/remove items from the shopping cart
	•	Checkout securely using Stripe/PayPal
	•	Request custom artwork commissions
	•	User authentication (Register/Login)

Admin Features
	•	Upload and manage artwork listings
	•	Delete products from the shop
	•	View and manage orders
	•	Respond to customer messages and custom requests
	•	Access admin dashboard with management tools

Technology Stack

Frontend:
	•	React (with React Router)
	•	Tailwind CSS (for styling)
	•	Vercel (for deployment)

Backend:
	•	Node.js + Express
	•	MongoDB (Database)
	•	Cloudinary (Image storage)
	•	Joi & Helmet (Security)

Additional Services:
	•	Stripe/PayPal (Payments)
	•	JWT (User Authentication)

Project Structure

📦 daxDudes
 ┣ 📂 daxdudes-frontend (React Frontend)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components (Navbar, Shop, HeroSection, etc.)
 ┃ ┃ ┣ 📂 context (State management)
 ┃ ┃ ┣ 📜 App.js
 ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┣ 📜 index.css
 ┃ ┃ ┗ 📂 assets (Images, icons, etc.)
 ┃ ┣ 📜 tailwind.config.js
 ┃ ┗ 📜 package.json
 ┣ 📂 daxdudes-backend (Node.js Backend)
 ┃ ┣ 📂 config (Database connection, environment variables)
 ┃ ┣ 📂 controllers (Handles API logic)
 ┃ ┣ 📂 middleware (Auth, validation, etc.)
 ┃ ┣ 📂 models (User, Product, Cart, Admin, etc.)
 ┃ ┣ 📂 routes (API routes)
 ┃ ┃ ┣ 📜 admin.js
 ┃ ┃ ┣ 📜 cartRoutes.js
 ┃ ┃ ┣ 📜 messages.js
 ┃ ┃ ┣ 📜 products.js
 ┃ ┃ ┣ 📜 uploadRoute.js
 ┃ ┃ ┗ 📜 users.js
 ┃ ┣ 📂 utils (Helper functions)
 ┃ ┣ 📜 server.js (Main backend entry point)
 ┃ ┗ 📜 package.json
 ┣ 📜 .env (Environment variables)
 ┗ 📜 README.md

Setup & Installation

1. Clone the Repository

git clone https://github.com/your-username/DaxDudes.git
cd DaxDudes

2. Backend Setup

cd daxdudes-backend
npm install
npm start

3. Frontend Setup

cd daxdudes-frontend
npm install
npm start

4. Environment Variables

Create a .env file in the daxdudes-backend directory and add:

MONGO_URI=your_mongodb_connection_string
CLOUDINARY_URL=your_cloudinary_api_key
STRIPE_SECRET=your_stripe_key
JWT_SECRET=your_jwt_secret

API Endpoints

<img width="535" alt="image" src="https://github.com/user-attachments/assets/d6045649-838c-4883-9715-4fffc24d89df" />


Authentication & Security
	•	JWT (JSON Web Token) authentication for user security
	•	Admin authentication required for product and order management
	•	Data validation to prevent invalid inputs
	•	Secure transactions with Stripe/PayPal

Future Enhancements
	•	Wishlist & Favorites: Users can save artworks to their favorites
	•	User Reviews: Customers can leave reviews for purchased artwork
	•	Order Tracking: Allow users to track the status of their orders

Contributing

Contributions are welcome! Feel free to open an issue or create a pull request to improve the project.
