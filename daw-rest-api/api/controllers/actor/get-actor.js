const imdb = require("../../db");
module.exports = {


  friendlyName: 'Actor',


  description: 'This action if for select Actor entries.',


  inputs: {

      actorId: {
        required: true,
        type: 'string',
        description: 'Id pentru a identifica un Actor.',
        extendedDescription: 'Must be a valid actor id.',
      },
  },


  exits: {

    success: {
      description: 'Actor creat cu succes.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

  },


  fn: async function (inputs) {
    sails.log("    ==============   ", JSON.stringify(inputs));
    // const { actorId } = inputs;

    let result = [{name: "Angelina Jolie"}, {name: "Di Caprio"}, {name: "Florin Piersic"}]
    if (!inputs){
      return result;
    }

    sails.log("    ==============   ", JSON.stringify(imdb.store));
    return imdb.store.actor[0];

  }


};
