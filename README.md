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

 <img width="1459" alt="image" src="https://github.com/user-attachments/assets/07d0382e-0a4f-4639-961d-3230628cc22b" />
 <img width="1459" alt="image" src="https://github.com/user-attachments/assets/a40b3e99-e7a9-4033-a4ae-3e9a1d40cdaf" />
 <img width="543" alt="image" src="https://github.com/user-attachments/assets/fb7e9e48-a75a-460a-912d-e0f35ccd9b63" />



Backend:
	•	Node.js + Express
	•	MongoDB (Database)
	•	Cloudinary (Image storage)
	•	Joi & Helmet (Security)

Additional Services:
	•	Stripe/PayPal (Payments)
	•	JWT (User Authentication)

Project Structure

<img width="535" alt="image" src="https://github.com/user-attachments/assets/0ba806cd-1804-4728-9518-7562d50b275b" />


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
