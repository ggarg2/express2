var CustomError = require("../error-handlers/custom-error") 

createDog = (req, res, next) => {
    console.log("Create dog called")
    res.send("Create dog called")
}

updateDog = (req, res, next) => {
    console.log("update dog called")
    res.send("update dog called")
}

getAllDog = (req, res, next) => {
    console.log("getAll dog called")
    res.send("getAll dog called")
}

getDogById = (req, res, next) => {
    console.log("get dog by id called")
    res.send("get dog by id called")
}

deleteDog = (req, res, next) => {
    console.log("delete dog called")
    res.send("delete dog called")
}

module.exports = { 
                    createDog, 
                    updateDog, 
                    getAllDog, 
                    getDogById, 
                    deleteDog
                }