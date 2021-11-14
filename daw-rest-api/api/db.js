

function Db() {
    this.store = {
        actor: [],
        review: [],
        movie: []
    }


}


const imdb = new Db();
module.exports = imdb;