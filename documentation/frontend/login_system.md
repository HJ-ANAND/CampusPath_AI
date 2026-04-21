# Authentication & Login System (Frontend)

## Overview

The application uses **Clerk** to handle authentication securely and easily. Clerk provides a complete suite of robust UI components and session management features out-of-the-box.

## Library Used

- **`@clerk/clerk-react`**: The official React SDK for Clerk.

## How it Works

1. **Providers:** The root of the React app (usually in `main.jsx` or `App.jsx`) is wrapped in a `<ClerkProvider>` which takes the Clerk Publishable Key from environment variables.
2. **UI Components:** We utilize Clerk's pre-built components like `<SignInButton>`, `<SignUpButton>`, `<UserButton>`, and `<SignedIn>`/`<SignedOut>` to control what the user sees based on their authentication state.
3. **Session Management:** Once a user logs in, Clerk securely manages the session tokens. When making API requests to our backend, we can attach the user's Clerk ID or JWT token to authenticate the request at the server level.
4. **No Local Passwords:** By deferring to Clerk, we avoid storing passwords or managing password reset flows directly in our database, reducing security risks.
