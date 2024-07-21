const { Router } = require("express");
const zod = require("zod");
const User = require("../../schema/UserSchema");
const router = Router();

const UserSignInSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});

router.post("/", async (req, res) => {
    const signInUser = UserSignInSchema.safeParse(req.body);
    if (!signInUser.success) {
        return res.status(400).json({ error: "Invalid request" });
    }
    const user = await User.findOne({ email: signInUser.data.email });
    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }
    return user.password === signInUser.data.password ? res.status(200).json({ message: "User signed in" }) : res.status(400).json({ error: "Invalid password" });
});

module.exports = router;