# Frontend Overview

## Technology Stack & Libraries

The frontend is built as a single-page application (SPA) using **React**. We utilize **Vite** as a modern, fast build tool, significantly improving the development experience.

### Key Libraries

- **React & React DOM:** Core framework for building user interfaces.
- **React Router DOM (`react-router-dom`):** Used for client-side routing (e.g., navigating between Home, About, Contact, Item pages without reloading).
- **Vite (`vite`):** Next-generation frontend tooling and bundler.
- **Tailwind CSS (`tailwindcss`, `@tailwindcss/vite`):** A utility-first CSS framework for rapid and responsive UI development.
- **Clerk React (`@clerk/clerk-react`):** Handles all user authentication and session management directly within the UI.
- **Axios (`axios`):** Promise-based HTTP client to make requests to our backend API.
- **Socket.io Client (`socket.io-client`):** Enables bidirectional, real-time communication for the chat system.

## Project Structure

- \`src/Pages/\`: Contains full-page components representing routes (Home, About, Contact).
- \`src/component/\`: Contains reusable UI building blocks (Navbar, ChatWindow).
- \`src/App.jsx\` / \`main.jsx\`: Main entry points and routing definitions.
