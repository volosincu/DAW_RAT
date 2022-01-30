# dawrestinteractiv

### [Scholarly HTML](https://volosincu.github.io/dawrestinteractiv/) 

### [App architecture](https://github.com/volosincu/dawrestinteractiv/tree/main/docs)

### [OpenApi](https://github.com/volosincu/dawrestinteractiv/blob/main/daw-rest-api/swagger/swagger.json) Lipeste continut in https://editor.swagger.io/ pentru o afisare API-ului intr-o interfata usor de vizualizat.

### [Demo Deployment API](http://188.215.55.136:51337/api/v1/actor) 

Exemplu: 
1.Interogare api actor: 

http://188.215.55.136:51337/api/v1/actor

`http://188.215.55.136:51337/api/v1/actor/<actorId>`

Mai multe in directorul postman `dawrestinteractiv/postman`


--------------


# Documentatie: 

## Dezvoltare si rulare cu docker 
Clone repo locally:
`git clone https://github.com/volosincu/dawrestinteractiv.git`

Change dir:
`cd dawrestinteractiv`

Run with docker-compose:
`docker-compose up -d`


### Build and run locally 

Build 
`docker build -t daw-open-api .`
or 
`docker build --no-cache -t daw-open-api .`

Run
`docker run -p 51337:1337 daw-open-api`

Tag a version:
`docker tag daw-open-api <your-dockerID>/daw-open-api:alpha`

Push version on your dockerid 
`docker push <your-dockerID>/daw-open-api:alpha`


Dupa ce imaginea a pornit API-ul poate fi accesat la adresa : `http://localhost:51337/api/v1/actor`
In directorul `dawrestinteractiv/postman` sunt si 2 colectii postman pentru a acesa API-ul.

Examplu creare intrare pentru schema actor: 

POST: `http://localhost:51337/api/v1/actor`

BODY:

```
{
  "name":"Anca",
  "surname":"Lupu",
  "description":"Actrita de teatru 2013 Universitatea de Arte George Enescu, Iasi; Facultatea de Teatru, specializarea Arta Actorului și Arta actorului mânuitor de papusi;",
  "birthday":"1991-02-08T22:00:00.000Z",
  "movies":"",
  "plays":"Crucifixion, regia Xavier Gens;Afacerea Est, regia Igor Cobileanski;Ecce Homo, regia Dimitar Kutmanov;Cameristele, regia Laura Dimbu;Hackerville, regia Igor Cobileanski si Miruna Lazarescu",
  "prizes":"2008 Ideo Ideis; 2009  Premiul special al juriului, festivalul Amfiteatru, Botosani; 2014 Marele Premiu, Stefan Iordache, Premiul publicului",
  "theatre":"Teatrul Naional Vasile Alecsandri Iasi"
}
```


## Local setup description/steps done for creating the app 

Go to repo root folder:
`dawrestinteractiv`

install sails, framework to create a web-application
`npm install sails -g`

generate an application:
`sails new daw-rest-api`

`cd daw-rest-api`

install swagger hook to generate Openapi schema based on endpoints and models:
`npm install sails-hook-swagger-generator --save`

Pentru tokenizare, extragerea parților de vorbire sau NER (name entity recognition) folosim 
libraria spacy într-un container docker (configurat în docker-compose).
https://hub.docker.com/r/neelkamath/spacy-server

Run the application:

`sails lift`

`http://localhost:1337`

Pentru mai multe informatii despre sails: https://sailsjs.com/get-started

 
