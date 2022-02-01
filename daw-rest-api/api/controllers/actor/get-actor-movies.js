
module.exports = {


    friendlyName: 'Actor Movies',
  
    description: 'This api is for query actor details. This will contain information on actor plays, movies, other roles like director, scene, prizes or collaborations.',
    inputs: {
  
        actorId: {
          required: true,
          type: 'string',
          description: 'Id for lookup actor moovies.',
          extendedDescription: 'Has to be an actor valid id.',
        },

        // movie: {
        //     required: false,
        //     type: 'string',
        //     description: 'Nume de film - cand este ',
        //     extendedDescription: 'Trebuie sa fie un id de Actor valid.',
        //   },
    },
  
  
    exits: {
  
      success: {
        description: 'This will return information on actor career, movies, theatre.'
      },
  
      invalid: {
        responseType: 'badRequest',
        description: 'Actor call is invalid.',
        extendedDescription: 'If this request was sent from a graphical user interface, the request '+
        'parameters should have been validated/coerced _before_ they were sent.'
      },
  
    },
  
  
    fn: async function (inputs) {
      sails.log("get-actor-movies - daw inputs: ", JSON.stringify(inputs));
      const { actorId } = inputs;
  
      let result = [];
      try{
        const _actor =  await Actor.findOne({id:actorId});
        const movies = _actor.movies; 
        sails.log("-----------------------------")
        sails.log(_actor)
        sails.log(movies)
        result = movies.split(";");
      } catch (err) {
        sails.log.error("Eroare la preluarea filmelor pt actorul " + actorId);
        sails.log.error(err);
      }
  
      sails.log("get-actor - daw result: ", JSON.stringify(result));
      return result;
  
    }
  
  
  };
  