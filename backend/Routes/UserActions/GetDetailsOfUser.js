const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.send("User details fetched");
});

module.exports = router;