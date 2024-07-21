const express = require("express");
const UserMiddleware = require("../../Middleware/UserMiddleware");
const router = express.Router();

/*
Created each api in separate file and then used them here
This is the main router for the user actions

The final routes will be - /api/v1/user/get-user-details
*/

router.use("/get-user-details", UserMiddleware, require("./GetDetailsOfUser"));

module.exports = router;