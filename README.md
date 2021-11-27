# dawrestinteractiv

### [Scholarly HTML](https://volosincu.github.io/dawrestinteractiv/) 

### [App architecture](https://github.com/volosincu/dawrestinteractiv/tree/main/docs)

### [OpenApi](https://github.com/volosincu/dawrestinteractiv/blob/main/daw-rest-api/swagger/swagger.json) Lipeste continut in https://editor.swagger.io/ pentru o afisare API-ului intr-o interfata usor de vizualizat.

### [Deployment](https://volosincu.github.io/dawrestinteractiv/) 


--------------


# Documentatie: 

## run with docker 
Clone repo locally:
`cd dawrestinteractiv`

Run with docker-compose:
`docker-compose run daw-interactive`

Build and run locally 
`docker build -t daw-open-api .`

Run
`docker run -p 51337:1337 daw-open-api`

Tag a version:
`docker tag daw-open-api <your-dockerID>/daw-open-api:alpha`

Push version on your dockerid 
`docker push daw-open-api:noiemb-27`


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

```
sails generate model Movie id:string title:string ratings:number cast:json isReleased:boolean isPlaying:boolean isSeries:boolean releasedTimestamp:string

sails generate model Actor id:string name:string surname:string birthday:string movies:json plays:json foto:string prizes:json

sails generate model Review id:string stars:number comment:string movieId:string
```

Run the application:

`sails lift`

`http://localhost:1337`

Pentru mai multe informatii despre sails: https://sailsjs.com/get-started

 
