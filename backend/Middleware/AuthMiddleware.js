const User = require("../schema/UserSchema");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function AuthMiddleware(req, res, next) {
  const token = req.headers?.authorization;
  if (!token) return res.status(401).json({ message: "Token not found" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ email: decoded.email, password: decoded.password });
    if (!user) return res.status(401).json({ message: "User not found" });
    req.userId = user._id;
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
  next();
}

module.exports = AuthMiddleware;