const {Router} = require("express");
const zod = require("zod");
const User = require("../../schema/UserSchema");
const Accounts = require("../../schema/AccountsSchema");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../../config");

const router = Router();

const UserZodSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
});

router.post("/", async (req, res) => {
    const user = UserZodSchema.safeParse(req.body);
    if (!user.success) {
        return res.status(400).json({ error: "Invalid request" });
    }
    const existingUser = await User.findOne({ email: user.data.email });
    if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
    }
    const newUser = new User(user.data);
    await newUser.save();

    const createdUser = await User.findOne({ email: newUser.email });
    await Accounts.create({ user: createdUser._id, balance: 0 });

    const token = jwt.sign({ id: user._id, email: user.email, password: user.password }, JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ message: "User created and account created with zero balance", token });
});

module.exports = router;