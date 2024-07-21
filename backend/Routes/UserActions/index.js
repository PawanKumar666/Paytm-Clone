const express = require("express");
const router = express.Router();

/*
Created each api in separate file and then used them here
This is the main router for the user actions

The final routes will be - /api/v1/user/get-user-details
*/

router.use("/get-details", require("./GetDetailsOfUser"));
router.use("/update-details", require("./UpdateUserData"));

module.exports = router;