const path = require('path')
const cors = require('cors')
const uuid = require('uuid')
const axios = require('axios')
const express = require('express')
const reqParser = require('body-parser')
const schemaLookup = require('./utils')

var expressPooling = require("express-longpoll")
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var app = express()
app.use(cors())
app.use(reqParser.json());

let grammerQL = ()=>{console.log('generate query'); return 'generate query';}


let posResult = {};

app.get('/gramm-query',
    function (req, res) {
        // axios
        //     .post('http://localhost:/pos', {
        //         "text": "My name is John Doe."
        //     })
        //     .then(res => {
        //         console.log(`statusCode: ${res.status}`)
        //         if (res.data && res.data.data && res.data.data){
        //             const posData = res.data.data[0];
        //             posResult['text'] = posData["text"];
        //             posResult['pos'] = posData.tags.reduce((acc, e)=>{
        //                 acc = [...acc, e.pos];
        //                 return acc;
        //             },[]);
        //             posResult['join'] = posData.tags.reduce((acc, e)=>{
        //                 acc = [...acc, {part: e.text, pos: e.pos}];
        //                 return acc;
        //             },[]);
        //         }

        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })

        res.send({"text":"Trending movies 2022.","pos":["V","NOUN","AUX","PROPN","PROPN","PUNCT"],"join":[{"part":"My","pos":"DET"},{"part":"name","pos":"NOUN"},{"part":"is","pos":"V"},{"part":"John","pos":"PROPN"},{"part":"Doe","pos":"PROPN"},{"part":".","pos":"PUNCT"}]});
    });

app.get('/gramm-queryp',
    function (req, res) {
        res.send(JSON.stringify(posResult));
    });



app.get('/getSemanticField',
    function (req, res) {
        console.log("terms ", req.query.terms);
        let terms = ['cinematography'];

        if (req.query.terms) {
            terms = [...terms,  ...req.query.terms.split(',')]
        }
        
        const openApi = require("./rdf/openapi.imdb.json");
        const ontology = require("./rdf/ontology.movie.json");
        
        let  paths={},
            models={}; 

        console.log("lookup paths in openAPI");
        schemaLookup.getPaths(openApi, "", paths)

        console.log("lookup properties in openAPI");
        schemaLookup.getModels(openApi, "", models)
        console.log("lookup resources in RDF documents");
        const links = schemaLookup.getOntologyLinks(ontology, terms)

        if (!openApi.openapi) {
            console.error("Not a valid schema");
            return;
        }

        res.send({
            url: openApi.servers.url,
            links,
            paths,
            models,
        });
    });



app.listen(9000, function () {
    console.log('App listening on port 9000');
});
