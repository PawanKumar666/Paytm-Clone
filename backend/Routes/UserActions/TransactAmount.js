const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");
const router = express.Router();
const Accounts = require("../../schema/AccountsSchema");

const transactSchema = zod.object({
    userId: zod.string(),
    amount: zod.number().gt(0),
});

router.post("/", async(req, res) => {
    const mongooseSession = await mongoose.startSession();
    mongooseSession.startTransaction();
    const fromUserId = req.userId;
    const fromAccount = await Accounts.findOne({ user: fromUserId }).session(mongooseSession);
    const transactData = transactSchema.safeParse(req.body);
    if(!transactData.success) {
        res.status(400).json({ message: "Invalid request" });
        return;
    }
    if(!fromAccount || fromAccount.balance < transactData.data.amount) {
        res.status(400).json({ message: "Insufficient balance" });
        return;
    }
    const toAccount = await Accounts.findOne({ user: transactData.data.userId }).session(mongooseSession);
    if(!toAccount) {
        res.status(400).json({ message: "User does not have an account" });
        return;
    }
    await Accounts.updateOne({ user: fromUserId }, { $inc: { balance: -transactData.data.amount } }, { session: mongooseSession });
    await Accounts.updateOne({ user: transactData.data.userId }, { $inc: { balance: transactData.data.amount } }, { session: mongooseSession });
    await mongooseSession.commitTransaction();
    await mongooseSession.endSession();
    res.json({ message: "Transaction successful" });
});

module.exports = router;