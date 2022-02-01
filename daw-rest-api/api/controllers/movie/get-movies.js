
module.exports = {


  friendlyName: 'Actor',


  description: 'This action is for query Movie entries.',


  inputs: {

      title: {
        required: false,
        type: 'string',
        description: 'Title for an Movie search.',
        extendedDescription: 'Must be a word.',
      },

      cast: {
        required: false,
        type: 'string',
        description: 'Actor name that was part of the cast.',
        extendedDescription: 'actors director ',
      },

      platform: {
        required: false,
        type: 'string',
        description: 'A media where the movie can be rented or watched',
        extendedDescription: 'watch see entertain',
      },
  },


  exits: {

    success: {
      description: 'Apel interogare model actor cu succes.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

  },


  fn: async function (inputs) {
    sails.log("get-movie - daw inputs: ", JSON.stringify(inputs));
    const { title, cast, platform } = inputs;

    const limitRequests =  await Movie.count();
    if (limitRequests>1000) {
      return {error: "Numarul de intrari maxime a fost atins."};
    }

    let result = [];
    sails.log("get-movie title " + title);
    sails.log("get-movie cast " + cast);
    sails.log("get-movie platform " + platform);
      
    if (title){
      result = await Movie.find({name: { 'contains' : title }});
    }

    if (cast){
      result = await Movie.find({cast: { 'contains' : cast }});
    }

    if (platform){
      result = await Movie.find({platform: { 'contains' : platform }});
    }

    if (!platform && !cast && !title){
      result = await Movie.find();
    }
   

    sails.log("get-actor - daw result: ", JSON.stringify(result));
    return result;

  }


};
