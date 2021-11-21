const fs = require('fs');

function Db() {

    this.store = {};
    // {
    //     "actor": [
    //         {"actorId":"7815401720078343","name":"Anca","surname":"Lupu","description":"Actrita de teatru 2013 Universitatea de Arte George Enescu, Iasi; Facultatea de Teatru, specializarea Arta Actorului și Arta actorului mânuitor de papusi;","birthday":"1991-02-08T22:00:00.000Z","movies":"","plays":"Crucifixion, regia Xavier Gens;Afacerea Est, regia Igor Cobileanski;Ecce Homo, regia Dimitar Kutmanov;Cameristele, regia Laura Dimbu;Hackerville, regia Igor Cobileanski si Miruna Lazarescu","prizes":"2008 Ideo Ideis; 2009  Premiul special al juriului, festivalul Amfiteatru, Botosani; 2014 Marele Premiu, Stefan Iordache, Premiul publicului","theatre":"Teatrul National Vasile Alecsandri Iasi"},
    //         {"actorId":"11823038426148047","name":"Andrei Grigore","surname":"Sava","description":"Actor de teatru, Colegiul National M. Sadoveanu Iasi; Universitatea G. Enescu Iasi – Faculatea de Actorie","birthday":"1987-11-04T22:00:00.000Z","movies":"","plays":"Ivanov de A. P. Cehov, regie Vasea Blohat;Visul unei nopti de vara de W. Shakespeare, regie Radu Afrim;Cum am devenit stupid de Martin Page;Tartuffe de  Moliere, regie Vlad Massaci;Titus Andronicus de William Shakespeare, regia Charles Muller;Troienele de Euripide regie Andrei Serban","prizes":"","theatre":"Teatrul National Vasile Alecsandri Iasi"}],
    //     "review":[],
    //     "movie":[]
    // }

        fs.readFile('./imdb-store.json', (err, data) => {
            if (err) throw err;
            let store = JSON.parse(data);
            console.log(data);
            this.store = Object.assign({}, this.store, store);
        });
    
}


const imdb = new Db();
module.exports = imdb;

