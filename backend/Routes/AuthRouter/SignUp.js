const {Router} = require("express");
const zod = require("zod");
const User = require("../../schema/UserSchema");
const Accounts = require("../../schema/AccountsSchema");

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
    const createdAccount = await Accounts.create({ user: createdUser._id, balance: 0 });
    res.status(201).json({ message: "User created and account created with zero balance" });
});

module.exports = router;