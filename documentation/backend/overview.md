# Backend Overview

## Technology Stack & Libraries

The backend is a robust RESTful API built on **Node.js** and **Express.js**, designed to handle incoming requests from the frontend, communicate with the database, process item matching, and manage real-time sockets.

### Key Libraries

- **Express (`express`):** Fast, unopinionated, minimalist web framework for building our API routes.
- **Mongoose (`mongoose`):** MongoDB object modeling tool, offering a rigorous schema-based solution for our application data.
- **Clerk Node SDK (`@clerk/clerk-sdk-node`):** Used to verify JWT tokens sent by the frontend and fetch user details securely from Clerk.
- **Axios (`axios`):** Used in the backend to make external API calls (e.g., to Google's Gemini AI API).
- **Socket.io (`socket.io`):** Enables the real-time, bidirectional WebSocket connections for the chat system.
- **Nodemailer (`nodemailer`):** Module for sending transactional emails (notifications, match alerts).
- **String Similarity (`string-similarity`):** Used as part of the backend string comparison heuristic to score missing/found item descriptions.
- **Dotenv (`dotenv`):** Loads environment variables from a `.env` file.

## Project Structure

- \`src/controllers/\`: Business logic for route endpoints (chat, item, match, notification).
- \`src/models/\`: Mongoose schemas defining our database collections (Item, Match, Message, Notification).
- \`src/routes/\`: Express routers mapping URLs to controller functions.
- \`src/utils/\`: Helper services including AI integration, Clerk fetchers, matching logic, and email services.
