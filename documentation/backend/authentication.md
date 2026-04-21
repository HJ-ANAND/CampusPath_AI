# Authentication & Clerk Integration (Backend)

## Overview

While the frontend handles the UI for logging in, the backend must ensure that incoming API requests are actually coming from authenticated users to protect private data like chat messages and user profiles.

## Libraries Used

- **`@clerk/clerk-sdk-node`**: The official Node API client for Clerk.

## How it Works (`clerkClient.js` & Middleware)

1. **Request Verification:** API routes (like `/api/chat` or `/api/items/me`) are wrapped in Clerk authentication middleware. This middleware checks the headers for a valid Bearer token (JWT).
2. **Fetching User Data:** Sometimes the backend needs the user's email address or profile picture to send a notification or attach a name to a chat message.
3. **`getUserEmail` Utility:** The backend uses the `clerkClient` to query Clerk's servers with a specific User ID to fetch their trusted email address securely, bypassing the need to store this data locally in our MongoDB.
