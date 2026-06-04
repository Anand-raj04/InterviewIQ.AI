# InterviewIQ.AI - SaaS MERN Interview Platform
🧠 Overview
InterviewIQ.AI is a production-grade, SaaS-style AI Interview Platform built with the MERN Stack. It integrates AI-powered resume analysis, real-time voice interview simulation, intelligent feedback, and a credit-based monetization system. Users upload their resumes, receive AI-generated questions tailored to their profiles, and practice Technical and HR rounds [1].


-------✅ Features Description---------
📄 Resume UploadUpload PDF resumes parsed by the backend
🤖 AI Question GenerationGet interview questions generated based on your resume
🎤 Interview PracticeSimulate Technical & HR interview rounds
📊 Intelligent FeedbackReceive AI-powered evaluation and scoring
💳 Credit SystemAccess controlled via a credit-based model
💰 Razorpay PaymentsPurchase credits securely via Razorpay
🔐 Google AuthFirebase-powered Google Authentication
🎬 Smooth UIFramer Motion animations throughout
☁️ Deployed on RenderFull stack deployment on Render

## 🏗 Architecture & Tech Stack
**Frontend:** React.js, Vite, Tailwind CSS, Redux Toolkit, React Router DOM, Framer Motion, Axios, Recharts, jsPDF [6].
**Backend:** Node.js, Express.js, MongoDB, Mongoose, OpenRouter (LLM), Razorpay, JWT, Multer [7].

📂 Project Structure
InterviewIQ.AI/
├── client/
│   ├── src/
│   │   ├── components/  # Navbar, Footer, Timer, AuthModal
│   │   ├── pages/       # Home, Auth, Interview, Pricing, History, Report
│   │   ├── redux/       # store.js, userSlice.js
│   │   └── utils/       # firebase.js
├── server/
│   ├── config/          # connectDb.js, token.js
│   ├── models/          # user.model.js, interview.model.js, payment.model.js
│   ├── routes/          # auth.route.js, user.route.js, interview.route.js, payment.route.js
│   ├── controllers/     # Route logic & AI prompts
│   └── middleware/      # isAuth.js, multer.js

🔌 API Documentation
Auth: POST /api/auth/google, GET /api/auth/logout
User: GET /api/user/current-user
Interview: POST /api/interview/resume, POST /api/interview/generate-questions, POST /api/interview/submit-answer, POST /api/interview/finish
Payment: POST /api/payment/order, POST /api/payment/verify
🔮 Future Enhancements
WebRTC integration for real-time, low-latency AI voice processing.
Expanded payment gateways (Stripe, PayPal).
User-customizable interview avatars.

## 🚀 Installation Guide

1. **Clone the repository and install dependencies:**
   ```bash
   # Backend
   cd server
   npm install

   # Frontend
   cd ../client
   npm install
Environment Variables: Create a .env file in the server/ directory:
Create a .env file in the client/ directory:
Running the App:

# Backend URL
VITE_API_URL=http://localhost:6000

▶️ Running the App
***Start the Backend Server***
bashcd server
npm run dev
# Server running on http://localhost:6000

***Start the Frontend Dev Server***
Open a new terminal tab/window:
bashcd client
npm run dev
# App running on http://localhost:5173
Both servers must be running simultaneously for the app to work.

💳 Payment Integration (Razorpay)
This project uses Razorpay for a credit-based payment model.

☁️ Deployment
URL=https://ai-iinterview-iq-1.onrender.com/


