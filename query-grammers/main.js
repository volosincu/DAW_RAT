

var express = require('express')
const path = require('path')
const cors = require('cors')
const uuid = require('uuid')
const reqParser = require("body-parser")
const nlp = require("spacy-nlp");
const serverPromise = spacyNLP.server({ port: 9007 });

var expressPooling = require("express-longpoll")
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var app = express();
app.use(cors())
app.use(reqParser.json());

let grammerQL = ()=>{console.log('generate query'); return 'generate query';}




app.get('/gramm-query',
    function (req, res) {
        grammerQL()
        res.send('test gramm-query');
    });

app.post('/top-movies',
    function (req, res) {
        console.log(req.body.test);
        res.send('');
    });

// const longpoll = expressPooling(app);
// longpoll.create("/resuts", (req, res, next)=>{
//     grammerQL = ()=>{console.log('generate query'); return 'generate query';}
//     console.log('/resuts');
//     next();
// });

// setInterval( function () {
//     if (grammerQL){
//         const stats = grammerQL();
//         longpoll.publish("/resuts", stats);
//     } else {
//         longpoll.publish("/resuts", {"mesage": "loading....."});
//         console.log("loading....")
//     }
// }, 10000);


app.listen(9000, function () {
    console.log('App listening on port 9000');
});
