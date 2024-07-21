const User = require("../schema/UserSchema");

async function UserMiddleware(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: email, password: password });
  if (!user) return res.status(401).json({ message: "Unauthorized" });
  next();
}

module.exports = UserMiddleware;