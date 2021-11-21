
module.exports = {


    friendlyName: 'Actor Movies',
  
  
    description: 'Aceast API este pentru a interoga filemele unui actor.',
  
  
    inputs: {
  
        actorId: {
          required: true,
          type: 'string',
          description: 'Id pentru a cauta filmele unui Actor.',
          extendedDescription: 'Trebuie sa fie un id de Actor valid.',
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
        description: 'Apel interogare filme pentru actor cu succes.'
      },
  
      invalid: {
        responseType: 'badRequest',
        description: 'Apel interogare filme pentru actor este invalid.',
        extendedDescription: 'If this request was sent from a graphical user interface, the request '+
        'parameters should have been validated/coerced _before_ they were sent.'
      },
  
    },
  
  
    fn: async function (inputs) {
      sails.log("get-actor-movies - daw inputs: ", JSON.stringify(inputs));
      const { actorId } = inputs;
  
      let result = [];
      try{
        const _actor = Actor.findOne({id:actorId});
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
  