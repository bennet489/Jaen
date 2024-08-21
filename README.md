# Node.js User Authentication API

This is a simple and secure **User Authentication API** built with **Node.js** and **Express.js**. It includes basic functionality for **user registration**, **login**, **logout**, and **JWT (JSON Web Token)**-based authentication. The API also features validation, middleware for token verification, and secure session handling.

## Features

- **User Registration:** Create a new user account with email, first name, last name, and password.
- **User Login:** Authenticate users with JWT for secure session handling.
- **User Logout:** Invalidate JWT tokens upon logout.
- **Token-based Authentication:** Secure endpoints with JWT middleware.
- **Input Validation:** Ensures proper input for email, password, and other fields using `express-validator`.
- **Secure Password Handling:** Passwords are hashed using `bcrypt` before storing them in the database.
- **Session Token Blacklisting:** Logout functionality includes token blacklisting for added security.

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for Node.js to handle routes and requests.
- **MongoDB**: NoSQL database to store user information.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Token)**: For secure token-based authentication.
- **bcrypt.js**: For hashing passwords securely.
- **express-validator**: Middleware to handle input validation and sanitization.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bennet489/jaen
