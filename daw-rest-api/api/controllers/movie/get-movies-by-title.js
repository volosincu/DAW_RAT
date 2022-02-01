
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
    const { title } = inputs;

    const limitRequests =  await Movie.count();
    if (limitRequests>1000) {
      return {error: "Numarul de intrari maxime a fost atins."};
    }

    let result = [];
    sails.log("get-movie title " + title);
   
    result = await Movie.find();
    

    sails.log("get-actor - daw result: ", JSON.stringify(result));
    return result.filter((e=>e.title.toLowerCase().includes(title.toLowerCase())));

  }


};
