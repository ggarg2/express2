const express = require("express")
const Router = express.Router();
const dogController = require("../controllers/dog-controller");

Router.get("/", dogController.getAllDog)
Router.post("/", dogController.createDog)
Router.put("/", dogController.updateDog)
Router.delete("/:id", dogController.deleteDog)
Router.get("/:id", dogController.getDogById)

module.exports = Router;