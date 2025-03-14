DaxDudes E-Commerce Website

DaxDudes is an e-commerce platform built for artists to showcase, sell artwork, and handle custom commission requests. It offers a smooth shopping experience, secure payments, and an admin dashboard for managing products, orders, and customer interactions.

Live Demo
https://dax-ec-ytjo.vercel.app/

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

Tech Stack

Frontend:
	•	React (with React Router)
	•	Tailwind CSS (for styling)
	•	Vercel (for deployment)

Backend:
	•	Node.js + Express
	•	MongoDB (Database)
	•	Cloudinary (Image storage)
	•	Joi & Helmet (Security)

Project Structure

📦 daxDudes
 ┣ 📂 daxdudes-frontend (React Frontend)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components (All UI Components: Navbar, Shop, HeroSection, etc.)
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

Getting Started

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
npm run dev

4. Environment Variables

Create a .env file in the daxdudes-backend directory and add:

MONGO_URI=your_mongodb_connection_string
CLOUDINARY_URL=your_cloudinary_api_key
STRIPE_SECRET=your_stripe_key
JWT_SECRET=your_jwt_secret

API Endpoints

Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and get a token
GET	/api/products	Fetch all products
GET	/api/products/:id	Get a single product by ID
POST	/api/cart	Add an item to the cart
GET	/api/cart	Get cart items
DELETE	/api/cart/:id	Remove item from cart
POST	/api/orders	Place an order

UI/UX Design

The frontend is styled with Tailwind CSS for a modern, sleek user experience. The homepage features a hero section, followed by a product gallery and a shop section. The admin dashboard provides easy access to manage the store.

Deployment
	•	Frontend: Vercel
	•	Backend: (To be added)
	•	Database: MongoDB Atlas
	•	Images: Cloudinary

Contributing

Feel free to open an issue or create a pull request to improve the project.
