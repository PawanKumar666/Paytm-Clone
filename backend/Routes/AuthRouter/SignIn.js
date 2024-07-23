const { Router } = require("express");
const zod = require("zod");
const User = require("../../schema/UserSchema");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

const UserSignInSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});

router.post("/", async (req, res) => {
    console.log("SIGN IN REQUEST", req.body);
    const signInUser = UserSignInSchema.safeParse(req.body);
    if (!signInUser.success) {
        return res.status(400).json({ error: "Invalid request" });
    }
    const user = await User.findOne({ email: signInUser.data.email, password: signInUser.data.password });
    console.log("USER", user);
    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }
    // This should be passed in header with key 'Authorization' and a key will be valid for 1 hour
    const token = jwt.sign({ id: user._id, email: user.email, password: user.password }, JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ message: "User signed in", token });
});

module.exports = router;