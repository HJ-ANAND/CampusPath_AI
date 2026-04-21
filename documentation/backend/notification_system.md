# Notification System (Backend)

## Overview

The notification system ensures that users are alerted whenever a potential match is found for their lost/found item, or when they receive a new chat message.

## Libraries Used

- **`nodemailer`**: The standard Node.js module used to send transactional emails via SMTP.
- **`socket.io`**: Used for real-time in-app notifications.

## How it Works

1. **In-App Notifications:**
   - When a match is triggered, the `notificationController` creates a Notification record in MongoDB.
   - If the user is currently online (connected via WebSockets), `socket.io` emits a real-time event that updates their bell icon/notification feed instantly.

2. **Email Notifications (Nodemailer / n8n plans):**
   - For high-confidence matches, `emailService.js` (powered by Nodemailer) compiles an HTML email detailing the match and encouraging the user to log in and chat.
   - _Future Architecture:_ There are plans to integrate **n8n** (a workflow automation tool) to listen to database webhooks and dispatch emails automatically, decoupling the heavy email-sending logic from the main Express server.
