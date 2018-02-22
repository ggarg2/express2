const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

console.log("Hello World")

let middleWare1  = (req, res, next) => {
    console.log("MiddleWare 1 Run Successfully !!")
    //console.log(req)
    let auth = req.headers['authorization'];
    console.log("auth is ", auth)
    next();
}

app.use("/admin", middleWare1)

app.get('/service-worker.js', (req, res, next) => {
    console.log("service-worker.js")
    res.send("Get method is working")   
})

app.get('/admin/:id/user/:userId', (req, res, next) => {
    console.log("User method")
    let id = req.params['id'];
    let userId = req.params['userId'];
    res.send("User method is working "+id + " userid is "+userId )   
})

app.post('/admin', (req, res, next) => {
    let body = req.body;
    console.log(body)
    res.send("admin post "+ JSON.stringify(body))
})


app.get('/', (req, res, next) => {
    console.log("Get method is working")
    res.send("Get method is working")   
})

app.post('/', (req, res, next) => {
    res.send("Post is working")
})

app.put('/', (req, res, next) => {
    res.send("Put is working")
})

app.delete('/', (req, res, next) => {
    res.send("delete is working")
})

console.log("before app server")

app.listen(3000, ()=>{
    console.log("App server is started")
})

console.log("after app server")
