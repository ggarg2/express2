const express = require("express")
const Router = express.Router();
const dogRouter = require("./dog-routes")

Router.use("/dog", dogRouter)

module.exports = Router;
