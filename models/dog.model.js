var mongoose = require("../config/mongodb.config")

var dogSchema = mongoose.Schema({
    //_id: String,
    name: String,
    color: String,
    age: Number,
    category: String
});

module.exports = mongoose.model('Dog', dogSchema, "Dogs");