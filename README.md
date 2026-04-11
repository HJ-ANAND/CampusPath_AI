# Lost & Found AI

A modern, full-stack web application designed to help users report and recover lost items with the power of AI. The platform features intelligent reporting and secure user authentication to ensure a seamless and trustworthy experience.

## ✨ Features

- **🤖 AI-Powered Reporting:** Leverage Artificial Intelligence to efficiently report, categorize, and match lost and found items.
- **🔒 Secure Authentication:** Seamless and secure user login, registration, and session management powered by [Clerk](https://clerk.dev/).
- **⚡ Modern Frontend:** Fast, responsive, and beautifully designed user interface built with React, Vite, and Tailwind CSS.
- **⚙️ Robust Backend:** Scalable REST API built with Node.js, Express, and a structured MVC architecture.

## 🛠️ Tech Stack

### Frontend

- **Framework:** React.js (via Vite)
- **Routing:** React Router DOM
- **Authentication:** @clerk/clerk-react
- **Styling:** Tailwind CSS

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB instance (local or Atlas)
- [Clerk](https://clerk.dev/) account for authentication keys
- AI API keys (e.g., OpenAI, Gemini, etc., depending on your AI implementation)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd Lost_And_Found
   ```

2. **Install Backend Dependencies:**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

You will need to create `.env` files for both the frontend and backend.

**Frontend (`frontend/.env`):**

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_BASE_URL=http://localhost:5000 # or your backend port
```

**Backend (`backend/.env`):**

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
AI_API_KEY=your_ai_service_api_key
```

### Running the Application

1. **Start the Backend Server:**

   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Frontend Development Server:**

   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port provided by Vite).

## 📁 Project Structure

```
Lost_And_Found/
├── backend/                # Node.js/Express backend
│   ├── config/             # Database connection & configurations
│   ├── src/
│   │   ├── controllers/    # Route controllers (logic)
│   │   ├── models/         # Database models/schemas
│   │   ├── routes/         # API routes definition
│   │   └── middlewares/    # Custom middlewares
│   └── server.js           # Server entry point
│
└── frontend/               # React frontend
    ├── src/
    │   ├── component/      # Reusable UI components
    │   ├── Pages/          # Application pages (Home, About, Contact, AppPage)
    │   ├── App.jsx         # Main React component & Routing
    │   └── main.jsx        # Frontend entry point
    └── vite.config.js      # Vite configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
