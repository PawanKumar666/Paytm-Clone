const express = require("express");
const router = express.Router();
const User = require("../../schema/UserSchema");

router.get("/", async (req, res) => {
  const searchTerm = req.query.searchTerm;
  // Search for users by email, pattern match with regex and case insensitive ( $options: "i" )
  const users = await User.find({ email: { $regex: searchTerm, $options: "i" } });
  res.json(users);
});

module.exports = router;