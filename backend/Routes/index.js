const express = require("express");
const router = express.Router();

/*
This is the core router for all the routes
*/

router.use(express.json());

router.use("/auth", require("./AuthRouter"));
router.use("/user", require("./UserActions"));

module.exports = router;