const express = require("express");
const router = express.Router();
const UserMiddleware = require("../Middleware/AuthMiddleware");

/*
This is the core router for all the routes
*/

router.use(express.json());

router.use("/auth", require("./AuthRouter"));
router.use("/user", UserMiddleware, require("./UserActions"));

module.exports = router;