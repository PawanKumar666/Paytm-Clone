const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../Middleware/AuthMiddleware");

/*
This is the core router for all the routes
*/

router.use("/auth", require("./AuthRouter"));
router.use("/user", AuthMiddleware, require("./UserActions"));

module.exports = router;