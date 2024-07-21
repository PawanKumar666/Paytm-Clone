const express = require("express");
const UserMiddleware = require("../../Middleware/UserMiddleware");
const router = express.Router();

router.use("/get-user-details", UserMiddleware, require("./GetDetailsOfUser"));

module.exports = router;