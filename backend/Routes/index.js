const express = require("express");
const app = express();

/*
This is the core router for all the routes
*/

app.use(express.json());

app.use("/auth", require("./AuthRouter"));

module.exports = app;