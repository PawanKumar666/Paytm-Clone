const express = require("express");
const router = express.Router();
const Users = require("../../schema/UserSchema");

router.get("/", async (_, res) => {
    const UsersInSystem = await Users.find({});
    const UserEmailsNameMap = UsersInSystem.reduce((acc, user) => {
        acc[user.email] = user.firstName + " " + user.lastName;
        return acc;
    }, {});
    res.json(UserEmailsNameMap);
})

module.exports = router;
