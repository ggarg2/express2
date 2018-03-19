const firebaseAdmin = require('firebase-admin');
const config = require('config');
let firebaseConfig = config.get('appConfig.firebaseConfig');

var CustomError = require("../error-handlers/custom-error")
var serviceAccount = require('./' + firebaseConfig.serviceAccountJsonFilePath);

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: firebaseConfig.dburl
});

module.exports = (req, res, next) => {
    console.log("auth middleware is working perfectly")
    console.log(req.headers['authorization'])
    let authToken = req.headers['authorization'];
    if (!authToken) {
        throw new CustomError("Please login", 401)
    }

    firebaseAdmin.auth().verifyIdToken(authToken)
        .then((decodedToken) => {
            let uid = decodedToken.uid;
            console.log("decodeToken is ", decodedToken)
            next();
        }).catch((error) => {
            console.log("error is ", error)
            res.status(403).send(error.message)
        });
}