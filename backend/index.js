const express = require("express");
const app = express();
const connectDB = require("./schema/db");
const Routes = require("./Routes");

app.use(express.json());

app.use("/", Routes);

connectDB();

module.exports = app;
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});