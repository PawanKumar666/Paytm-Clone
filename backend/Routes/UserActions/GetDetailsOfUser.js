const express = require("express");
const router = express.Router();
const User = require("../../schema/UserSchema");
const Accounts = require("../../schema/AccountsSchema");

router.get("/", async (req, res) => {
  const userEmail = req.email;
  const user = await User.findOne({ email: userEmail });
  const account = await Accounts.findOne({ user: user._id });
  res.status(200).json({ name: user.firstName + " " + user.lastName, email: user.email, balance: account.balance });
});

module.exports = router;