# Chat Room (Frontend)

## Overview

The frontend chat room allows users to communicate in real-time when a lost item matches a found item, enabling them to coordinate the return of the item.

## Library Used

- **`socket.io-client`**: The client-side library for connecting to the Socket.io WebSocket server on our backend.

## How it Works

1. **Connection:** When a user enters the chat view (e.g., `ChatWindow.jsx`), a connection is established with the backend WebSocket server using `io()`.
2. **Joining a Room:** The chat is scoped to specific "matches" or "rooms" to ensure privacy. The frontend emits an event to join a specific room ID corresponding to the matched items.
3. **Sending Messages:** When a user types a message and hits send, the frontend emits a `send_message` event over the socket with the payload (sender ID, text, timestamp).
4. **Receiving Messages:** The frontend listens for `receive_message` events and updates the chat UI state instantly without requiring a page refresh.
5. **Real-time UX:** The system is completely real-time, giving a seamless messaging experience comparable to modern chat apps.
