var CustomError = require("../error-handlers/custom-error") 
var DogModel = require("../models/dog.model")

createDog = (req, res, next) => {
    console.log("Create dog called")
    let newDog = new DogModel(req.body);
    newDog.save(newDog).then(
        (data)=> {
            console.log("data is ", data)
            res.send("Dog is created.")
        }
    ).catch(
        (error) => {
            console.log("error is ", error)
            throw new CustomError("Error while creating Dog", 500)
        }
    )
}

updateDog = (req, res, next) => {
    console.log("update dog called")

    let newDog = new DogModel(req.body);

    DogModel.findByIdAndUpdate(newDog._id, newDog).then(
        (data)=> {
            console.log("data is ", data)
            res.send("Dog is created.")
        }
    ).catch(
        (error) => {
            console.log("error is ", error)
            throw new CustomError("Error while updating Dog", 500)
        }
    )


   // res.send("update dog called")
}

getAllDog = (req, res, next) => {
    console.log("getAll dog called")
    DogModel.find().then(
        (data)=>{
            console.log("Data is ", data)
            res.send(data)
        }
    ).catch(
        (error)=>{
            console.log("Error is ", error)
            throw new CustomError("Error while fetching all dog", 500)
        }
    )
}

getDogById = (req, res, next) => {
    DogModel.findById(req.params.id).then(
        (data)=>{
            console.log("Data is ", data)
            res.send(data)
        }
    ).catch(
        (error)=>{
            console.log("Error is ", error)
            throw new CustomError("Error while fetching dog by id", 500)
        }
    )
}

deleteDog = (req, res, next) => {
    console.log("delete dog called")

    DogModel.deleteOne({_id: req.params.id}).then(
        (data)=>{
            console.log("Data is ", data)
            res.send("Dog is deleted")
        }
    ).catch(
        (error)=>{
            console.log("Error is ", error)
            throw new CustomError("Error while deleting dog by id", 500)
        }
    )
    
   // res.send("delete dog called")
}

module.exports = { 
                    createDog, 
                    updateDog, 
                    getAllDog, 
                    getDogById, 
                    deleteDog
                }