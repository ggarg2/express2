m1 = (req, res, next) => {
    console.log("Global middle ware 3")
    next();
}

module.exports = m1;