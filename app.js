const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();
const bookRouter = require("./routers/book-router")

gm3 = require('./middleware/middleware-1')

app.use(bodyParser.json())

app.use((req, res, next)=>{
    console.log("GLobal Middleware")
    next();
})

app.use((req, res, next)=>{
    console.log("GLobal Middleware 1")
    next();
})

app.use(gm3);



console.log("Hello World")

let middleWare1  = (req, res, next) => {
    console.log("MiddleWare 1 Run Successfully !!")
    //console.log(req)
    let auth = req.headers['authorization'];
    console.log("auth is ", auth)
    next();
}
let middleWare2  = (req, res, next) => {
    console.log("MiddleWare 2 Run Successfully !!")
    //console.log(req)
    let auth = req.headers['authorization'];
    console.log("auth is ", auth)
    next();
}

app.use("/admin", middleWare1)
app.use("/admin", middleWare2)

app.get('/service-worker.js', (req, res, next) => {
    console.log("service-worker.js")
    res.send("Get method is working")   
})

h = (req, res, next) => {
    console.log("User method")
    let id = req.params['id'];
    let userId = req.params['userId'];
    //res.send("User method is working "+id + " userid is "+userId ) 
    next();  
}

h1 =(req, res, next)=> {
    console.log("Hello World 1")
    next(); 
    }
h2 = (req, res, next)=> {
    console.log("Hello World 2")
    next(); 
}
h3 = (req, res, next)=> {
    console.log("Hello World 3")
    next();
}
h4 = (req, res, next)=> {
    console.log("Hello World 4")
    //res.send("HEllo World 4 is called")
    next();
}

h5 = (req, res, next)=> {
    console.log("Hello World 5")
    next();
}

h6 = (req, res, next)=> {
    console.log("Hello World 6")
    next('route');
}

h7 = (req, res, next)=> {
    console.log("Hello World 7")
    next();
}

h8 = (req, res, next)=> {
    console.log("Hello World 8")
    next();
}

h9 = (req, res, next)=> {
    console.log("Hello World 9")
    res.send("Hello World 9 Called !!")
}

app.get('/admin/:id/user/:userId', [h1, h2, h3, h4])

app.get('/admin/:id/user/:userId', [h5, h6, h7, h8])

app.get('/admin/:id/user/:userId', [h9])

app.post('/admin', (req, res, next) => {
    let body = req.body;
    console.log(body)
    res.send("admin post "+ JSON.stringify(body))
})

// /ab?de => abde, ade
// "/ab+de" ==> abde, abbbbbbbbde
//"/ab*de" ==> abdkjsdhlde
// /a(bd)?e ==> Ternary operator on parenthesis value
app.route("/a(bd)?e").get((req, res, next)=> {
    res.send("Get is working 1")
}).post((req, res, next) => {
    res.send("Post is working")
}).put((req, res, next) => {
    res.send("Put is working")
}).delete((req, res, next) => {
    res.send("delete is working")
})


app.use("/rest/api", router)
app.use("/rest/api/books", bookRouter)

router.get('/', (req, res, next) => {
    console.log("Root route of rest api")
    res.send("Root route oof rest api")   
})

router.get('/city', (req, res, next) => {
    console.log("Get method is working")
    res.send("Get method is working")   
})

router.post('/city', (req, res, next) => {
    res.send("Post is working")
})

router.put('/city', (req, res, next) => {
    res.send("Put is working")
})

router.delete('/city', (req, res, next) => {
    res.send("delete is working")
})

console.log("before app server")

app.listen(3000, ()=>{
    console.log("App server is started")
})

console.log("after app server")
