const {Router} = require("express");
const zod = require("zod");
const User = require("../schema/UserSchema");

const router = Router();

const UserZodSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
});

router.post("/signup", async (req, res) => {
    const user = UserZodSchema.safeParse(req.body);
    if (!user.success) {
        return res.status(400).json({ error: "Invalid request" });
    }
    const newUser = new User(user.data);
    await newUser.save();
    res.status(201).json({ message: "User created" });
});

module.exports = router;