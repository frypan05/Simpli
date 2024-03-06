const express = require("express")

//now we take all the powers that Express has in the constant express and put it into a constant app.
const app = express()

//middleware

app.use(function (req, res, next) {
    console.log("middleware before home page route");
    next();
});

app.get('/', function (req,res) {
    res.sendFile('views/test.html', {root: __dirname })
});

app.use(function (req, res, next) {
    console.log("middleware 2 before contact page route");
    next();
});

app.get('/Contact', function (req, res) {
    res.sendFile('views/test.html', {root: __dirname })
});

app.get('/About', function (req, res) {
    res.sendFile('views/test.html', {root: __dirname })
});
app.listen(3000)


//this is updated code