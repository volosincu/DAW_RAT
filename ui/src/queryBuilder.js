
import {resources} from './queryResources'
import axios from 'axios';

const criterias = {
    generalQuery: [resources.actors, resources.movies],
    queryByActor: [resources.actorSearch, resources.movieByCast],
    queryByMovie: [resources.movieByTitle, resources.movieByPlatform ],
    title: [resources.movieByTitle, resources.actorMoviesByActorId,  resources.actorPlaysByActorId],
    platform: [resources.movieByPlatform],
    movies: [resources.movies],
    actors: [resources.actors],
}

// const targetDomain = {
//   actor: []
//   movie: 
// }

export function getRESTmanticTargets(nlpData) {
    const {rdf_domains, similarities, nouns, names } = nlpData;


    const mappings = nouns.map(n=> {
      const pair = {};
      pair[n] = similarities[n].reduce((acc, v, i)=>{
        const similarity = {};
        similarity[rdf_domains[i]] = v;
        return {...acc, ...similarity };
      },{});
      return pair;
    });

    const queryTargets = mappings.map((noun, i)=>{
      let max = ["actor", 0];
        for (const [key, value] of Object.entries(noun[nouns[i]])) {
          if(value> max[1]){
            max = [key, value]
          }
        }
        const v = {};
        v[nouns[i]] = max;
        return v;
    } );



    return {queryTargets, names};
}


export function getRESTmanticQuery({queryTargets, names}) {

  return queryTargets.map((targetNoun)=>{
    const [noun, max] = Object.entries(targetNoun)[0];
    const  [key, val] = max;

    if (val > 0.5 && names && names.length == 0) {
      if (key == "actor") {
        return {...targetNoun, queries: [resources.actors]};
      }

      if (key == "movie") {
        return  {...targetNoun, queries: [resources.movies]};
      }
    }

    if (val > 0.5 && names && names.length > 0) {
      if (key == "actor") {
        return {...targetNoun, queries: [resources.actorSearch, resources.movieByCast]};
      }

      if (key == "movie") {
        return  {...targetNoun, queries: [resources.movieByTitle, resources.movieByPlatform]};
      }
    }

  }, {})

}


export function executeQuery(url, query, path){
  let address = "";
  if (path) {
    address = url + query(path);
  }

  return new Promise((resolve, reject)=>{
    axios
        .get(address)
        .then(res => {
            console.log(`statusCode: ${res.status}`)
            // debugger
            if (res.data){
                resolve(res.data);
            }

        })
        .catch(error => {
            console.error(error)
            reject({message: "no data"});
        })
})   
}
