const path = require('path')
const cors = require('cors')
const uuid = require('uuid')
const axios = require('axios')
const express = require('express')
const reqParser = require('body-parser')

var expressPooling = require("express-longpoll")
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var app = express()
app.use(cors())
app.use(reqParser.json());

let grammerQL = ()=>{console.log('generate query'); return 'generate query';}


let posResult = {};

app.get('/gramm-query',
    function (req, res) {

        axios
            .post('http://localhost:18000/pos', {
                "text": "My name is John Doe."
            })
            .then(res => {
                console.log(`statusCode: ${res.status}`)
                if (res.data && res.data.data && res.data.data){
                    const posData = res.data.data[0];
                    posResult['text'] = posData["text"];
                    posResult['pos'] = posData.tags.reduce((acc, e)=>{
                        acc = [...acc, e.pos];
                        return acc;
                    },[]);
                    posResult['join'] = posData.tags.reduce((acc, e)=>{
                        acc = [...acc, {part: e.text, pos: e.pos}];
                        return acc;
                    },[]);
                }

            })
            .catch(error => {
                console.error(error)
            })

        res.send('test gramm-query');
    });

app.get('/gramm-queryp',
    function (req, res) {
        res.send(JSON.stringify(posResult));
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
