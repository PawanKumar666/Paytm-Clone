const { Router } = require("express");
const User = require("../schema/UserSchema");
const zod = require("zod");
const router = Router();

const UserMetaDataSchema = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    email: zod.string().email(),
    password: zod.string().min(8),
});

router.post("/update", async (req, res) => {
    const UserUpdateData = UserMetaDataSchema.safeParse(req.body);
    if (!UserUpdateData.success) {
        return res.status(400).json({ error: "Invalid request" });
    }
    const user = await User.findOne({ email: UserUpdateData.data.email });
    if (!user) {
        return res.status(400).json({ error: "User not found" });
    }
    user.firstName = UserUpdateData.data?.firstName;
    user.lastName = UserUpdateData.data?.lastName;
    user.password = UserUpdateData.data?.password;
    await user.save();
    res.status(200).json({ message: "User updated" });
});

module.exports = router;