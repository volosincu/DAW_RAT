
import {resources} from './queryResources'


const criterias = {
    name: [resources.actors, resources.actorById, resources.movieByCast],
    title: [resources.movieByTitle, resources.actorMoviesByActorId,  resources.actorPlaysByActorId],
    platform: [resources.movieByPlatform],
    movie: [resources.movies],
    actors: [resources.actors],
}

export function getRESTQuery(name) {
    return criterias;
}
