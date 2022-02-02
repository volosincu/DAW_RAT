
module.exports = {


  friendlyName: 'Actor',


  description: 'This action if for select Actor entries. this contains information about his personal life and career, movies, plays and prizes.',


  inputs: {

      name: {
        required: false,
        type: 'string',
        description: 'Name for an Actor search.',
        extendedDescription: 'Must be a valid actor name.',
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
    sails.log("get-actor - daw inputs: ", JSON.stringify(inputs));
    const { name } = inputs;

    const limitRequests =  await Actor.count();
    if (limitRequests>1000) {
      return {error: "Numarul de intrari maxime a fost atins."};
    }

    let result = [];
    result = await Actor.find();


    sails.log("get-actor - daw result: ", JSON.stringify(result));
    return result.filter((e=>e.name.toLowerCase().includes(name.toLowerCase())||e.surname.toLowerCase().includes(name.toLowerCase())));

  }


};
