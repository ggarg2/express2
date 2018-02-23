const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("Root route of rest api boook")
    res.send("Root route oof rest api boook")   
})

router.get('/book', (req, res, next) => {
    console.log("Get method is working")
    res.send("Get method is working bookRouter")   
})

router.post('/book', (req, res, next) => {
    res.send("Post is working")
})

router.put('/book', (req, res, next) => {
    res.send("Put is working")
})

router.delete('/book', (req, res, next) => {
    res.send("delete is working")
})

module.exports = router;