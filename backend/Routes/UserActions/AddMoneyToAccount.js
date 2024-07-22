const express = require("express");
const router = express.Router();
const zod = require("zod");
const Accounts = require("../../schema/AccountsSchema");
const mongoose = require("mongoose");

const AddMoneySchema = zod.object({
    amount: zod.number().gt(0),
});


router.post("/", async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const userId = req.userId;
    const addMoneyData = AddMoneySchema.safeParse(req.body);
    if(!addMoneyData.success) {
        res.status(400).json({ message: "Invalid request" });
        return;
    }
    const account = await Accounts.findOne({ user: userId }).session(session);
    if(!account) {
        res.status(400).json({ message: "User does not have an account" });
        return;
    }
    await Accounts.updateOne({ user: userId }, { $inc: { balance: addMoneyData.data.amount } }, { session: session });
    await session.commitTransaction();
    await session.endSession();
    res.json({ message: "Money added to account" });
});

module.exports = router;