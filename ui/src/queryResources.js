
export const resources = {
    createActor: { tag:"", method: 'post', action: ()=>`/api/v1/actor` },
    actorById: { tag:'actor', method: 'get', action: (actorId)=>`/api/v1/actor/${actorId}` },
    actors: { tag:'*actor', method: 'get', action: ()=>`/api/v1/actor` },
    actorMoviesByActorId: { tag:'actormovie', method: 'get', action: (actorId)=>`/api/v1/actor/movies/${actorId}` },
    actorPlaysByActorId: { tag:'plays', method: 'get', action: (actorId)=>`/api/v1/actor/plays/${actorId}` },

    createMovie: { tag:'add', method: 'post', action: ()=>`/api/v1/movie/` },
    movies: { tag:'*movie', method: 'get', action: ()=>`/api/v1/movie` },
    movieByTitle: { tag:'title', method: 'get', action: (title)=>`/api/v1/movie/title/${title}` },
    movieByCast: { tag:'cast', method: 'get', action: (cast)=>`/api/v1/movie/cast/${cast}` },
    movieByPlatform: { tag:'platform', method: 'get', action: (platform)=>`/api/v1/movie/platform/${platform}` },
}