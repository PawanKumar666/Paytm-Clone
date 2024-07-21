const mongoose = require("mongoose");

const AccountsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
        required: true,
    },
})

const Accounts = mongoose.model("Accounts", AccountsSchema);

module.exports = Accounts;