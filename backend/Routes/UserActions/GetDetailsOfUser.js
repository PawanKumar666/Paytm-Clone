const express = require("express");
const router = express.Router();
const User = require("../../schema/UserSchema");
const Accounts = require("../../schema/AccountsSchema");

router.get("/", async (req, res) => {
  const userId = req.userId;
  const user = await User.findOne({ _id: userId });
  const account = await Accounts.findOne({ user: userId });
  res.status(200).json({ name: user.firstName + " " + user.lastName, email: user.email, balance: account.balance });
});

module.exports = router;