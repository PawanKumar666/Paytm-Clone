const express = require("express");
const router = express.Router();

/*
Created each api in separate file and then used them here
This is the main router for the auth routes
*/
router.use("/signup", require("./SignUp"));
router.use("/signin", require("./SignIn"));
router.use("/update", require("./UpdateUserData"));

module.exports = router;