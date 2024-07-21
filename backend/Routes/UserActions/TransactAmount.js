const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post("/", async(req, res) => {
    const mongooseSession = await mongoose.startSession();
    mongooseSession.startTransaction();
    // Learn about implementing transactions in mongoose and implement it here
});