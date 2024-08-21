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

   ```

2. Navigate to the project directory:

   ```bash
   cd Jaen

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Set up environment variables:

## Create a .env file in the root directory with the following content:

```bash
DB_URI=mongodb://localhost:5000/authentication-api
PORT=5000
SECRET_ACCESS_TOKEN=your_secret_key
```

5. Start the server:

   ```bash
   npm start

   ```

6. The server should now be running on http://localhost:5000.

# Contact Me

For any inquiries or issues, feel free to reach out to me at
bennetasare@outlook.com
