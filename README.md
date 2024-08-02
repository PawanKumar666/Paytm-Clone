# PayTM - Clone

This project is a clone of PayTM, built using React for the frontend, Node.js/Express for the backend, and MongoDB for the database. Tailwind CSS is used for styling.

## Table of Contents
- [Project Overview](#project-overview)
- [Backend Overview](#backend-overview)
  - [Folder Structure](#folder-structure)
  - [Significance of Routing](#significance-of-routing)
  - [Available Routes](#available-routes)
- [Frontend Overview](#frontend-overview)
- [Setup Instructions](#setup-instructions)

## Project Overview
This project aims to replicate the core functionalities of PayTM, including user authentication, user actions, and utility operations. The backend is structured to handle various functionalities efficiently, while the frontend provides a responsive and interactive user interface.

## Backend Overview

The backend of this project is built using Node.js with Express and MongoDB. It is structured to handle various functionalities such as user authentication, user actions, and utility operations. Below is a brief overview of the backend folder and the significance of routing within the application.

### Folder Structure

- **Routes**: Contains all the route definitions and their respective handlers.
  - **index.js**: The core router that combines all sub-routers.
  - **AuthRouter**: Handles authentication-related routes like signup, signin, and update.
  - **UserActions**: Manages user-specific actions such as getting user details, updating user data, and handling transactions.
  - **UtilRoutes**: Contains utility routes like searching for users and getting all users.

- **Middleware**: Contains middleware functions used across the application.
  - **AuthMiddleware.js**: Middleware to authenticate and authorize users based on JWT tokens.

- **Schema**: Contains Mongoose schemas for MongoDB collections.
  - **UserSchema.js**: Defines the schema for user data.
  - **AccountsSchema.js**: Defines the schema for user accounts.

- **config.js**: Configuration file for constants like JWT secret.
- **db.js**: Database connection setup using Mongoose.

### Significance of Routing

Routing is a crucial part of this backend application as it defines how the server responds to various HTTP requests. Each route is associated with a specific URL path and HTTP method (GET, POST, etc.). Here's a breakdown of the routing setup:

#### Core Router
The core router (`index.js`) combines all sub-routers and applies middleware where necessary:
```javascript:backend/Routes/index.js
const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../Middleware/AuthMiddleware");

/*
This is the core router for all the routes
*/

router.use("/auth", require("./AuthRouter"));
router.use("/user", AuthMiddleware, require("./UserActions"));
router.use("/util", AuthMiddleware,require("./UtilRoutes"));

module.exports = router;
```

#### Authentication Routes
The authentication routes handle user signup, signin, and updating user data:
```javascript:backend/Routes/AuthRouter/index.js
const express = require("express");
const router = express.Router();

/*
Created each api in separate file and then used them here
This is the main router for the auth routes

The final routes will be - /api/v1/auth/signup, /api/v1/auth/signin, /api/v1/auth/update
*/

router.use("/signup", require("./SignUp"));
router.use("/signin", require("./SignIn"));
router.use("/update", require("../UserActions/UpdateUserData"));

module.exports = router;
```

#### User Actions Routes
These routes manage user-specific actions like getting user details, updating user data, and handling transactions:
```javascript:backend/Routes/UserActions/index.js
const express = require("express");
const router = express.Router();

/*
Created each api in separate file and then used them here
This is the main router for the user actions

The final routes will be - /api/v1/user/get-user-details
*/

router.use("/get-details", require("./GetDetailsOfUser"));
router.use("/update-details", require("./UpdateUserData"));
router.use("/transact-amount", require("./TransactAmount"));
router.use("/add-money", require("./AddMoneyToAccount"));

module.exports = router;
```

#### Utility Routes
Utility routes provide additional functionalities like searching for users and retrieving all users:
```javascript:backend/Routes/UtilRoutes/index.js
const router = require("express").Router();

router.use("/search-user", require("./SearchUser"));
router.use("/get-all-users", require("./GetAllUsers"));

module.exports = router;
```

### Available Routes

#### Authentication Routes
- **POST /api/v1/auth/signup**: Registers a new user and creates an account with a zero balance.
- **POST /api/v1/auth/signin**: Authenticates a user and returns a JWT token.
- **POST /api/v1/auth/update**: Updates user data.

#### User Actions Routes
- **GET /api/v1/user/get-details**: Retrieves the details of the authenticated user.
- **POST /api/v1/user/update-details**: Updates the details of the authenticated user.
- **POST /api/v1/user/transact-amount**: Transfers an amount from the authenticated user's account to another user's account.
- **POST /api/v1/user/add-money**: Adds money to the authenticated user's account.

#### Utility Routes
- **GET /api/v1/util/search-user**: Searches for users by email.
- **GET /api/v1/util/get-all-users**: Retrieves a list of all users with their email and full name.

## Frontend Overview

The frontend of this project is built using React and Vite. It provides a responsive and interactive user interface. Tailwind CSS is used for styling to ensure a modern and clean design.

## Setup Instructions

To set up the project, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install` in the root directory.
3. Start the MongoDB server.
4. Start the backend server by running `npm start` in the root directory.
5. Open a new terminal and navigate to the frontend directory.
6. Start the frontend server by running `npm start`.
7. Open the frontend in your preferred web browser.

Note: Make sure to replace the placeholders in the `config.js` file with your actual MongoDB connection details and JWT secret.


THIS IS STILL OPEN, PARTICULARLY COMPONENTS ARE NOT STYLED CLEAN.