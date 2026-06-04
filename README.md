🧠 About the Project---------
InterviewIQ.AI is a production-grade, SaaS-style AI Interview Platform built with the MERN Stack. It goes far beyond a basic CRUD app — it integrates AI-powered resume analysis, real-time interview simulation, intelligent feedback, and a credit-based monetization system.
Users upload their resume (PDF), receive AI-generated interview questions tailored to their profile, practice both Technical and HR rounds, and get smart performance feedback — all within a smooth, animated UI.


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

🛠 Tech Stack

FRONTEND
| Technology                 | Purpose                         |
| -------------------------- | ------------------------------- |
| React.js                   | UI Framework                    |
| Vite                       | Build Tool & Development Server |
| Tailwind CSS               | Utility-first Styling           |
| Redux Toolkit              | Global State Management         |
| Redux Persist              | Persisted Redux State           |
| React Router DOM           | Client-side Routing             |
| Framer Motion              | Animations                      |
| Firebase                   | Google Authentication           |
| Axios                      | HTTP Client                     |
| Recharts                   | Data Visualization              |
| jsPDF                      | PDF Report Export               |
| React Circular Progressbar | Score Visualization             |
| React Icons                | Icon Library                    |

BACKEND
| Technology              | Purpose                |
| ----------------------- | ---------------------- |
| Node.js                 | Runtime Environment    |
| Express.js              | Web Framework          |
| MongoDB                 | Database               |
| Mongoose                | ODM for MongoDB        |
| OpenAI SDK / OpenRouter | AI / LLM Integration   |
| Razorpay                | Payment Gateway        |
| Multer                  | File Upload Middleware |
| pdf-parse               | PDF Text Extraction    |
| JWT                     | Authentication Tokens  |
| Cookie Parser           | Cookie Handling        |
| dotenv                  | Environment Variables  |
| CORS                    | Cross-Origin Requests  |



📁 Project Structure
InterviewIQ.AI/
│
├── client/                          # React Frontend (Vite)
│   ├── public/
│   │   └── img1.png                 # Favicon
│   ├── src/
│   │   ├── components/              # Reusable UI Components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── pages/                   # Route-level Pages
│   │   │   ├── Home.jsx
│   │   │   ├── Auth.jsx
│   │   │   ├── Interview.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── History.jsx
│   │   │   └── Report.jsx
│   │   ├── redux/                   # Redux Store & Slices
│   │   │   ├── store.js
│   │   │   └── userSlice.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── package.json
│
├── server/                          # Node.js + Express Backend
│   ├── config/
│   │   └── connectDb.js             # MongoDB Connection
│   ├── models/                      # Mongoose Models
│   │   ├── user.model.js
│   │   └── interview.model.js
│   ├── routes/                      # Express Routers
│   │   ├── auth.route.js
│   │   ├── user.route.js
│   │   ├── interview.route.js
│   │   └── payment.route.js
│   ├── controllers/                 # Route Controllers
│   ├── middleware/                  # Custom Middleware
│   │   ├── isAuth.js
│   │   └── multer.js
│   ├── index.js                     # Entry Point
│   └── package.json
│
└── README.md



🚀 Getting Started
1. Backend Setup (server/)
bashcd server
npm install

2. Frontend Setup (client/)
bashcd ../client
npm install

3. Environment Variables
server/.env
Create a .env file inside the server/ directory:
env# Server
PORT=6000


# Backend URL
VITE_API_URL=http://localhost:6000

▶️ Running the App
Start the Backend Server
bashcd server
npm run dev
# Server running on http://localhost:6000

Start the Frontend Dev Server
Open a new terminal tab/window:
bashcd client
npm run dev
# App running on http://localhost:5173
Both servers must be running simultaneously for the app to work.



💳 Payment Integration (Razorpay)
This project uses Razorpay for a credit-based payment model.

☁️ Deployment
URL=https://ai-iinterview-iq-1.onrender.com/


