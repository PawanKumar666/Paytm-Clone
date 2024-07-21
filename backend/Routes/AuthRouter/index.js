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