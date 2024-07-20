const express = require("express");
const app = express();
const connectDB = require("./schema/db");
const SignIn = require("./Routes/SignIn");
const SignUp = require("./Routes/SignUp");
const UpdateUserData = require("./Routes/UpdateUserData");

app.use(express.json());

app.use("/", SignIn);
app.use("/", SignUp);
app.use("/", UpdateUserData);

connectDB();

module.exports = app;
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});