
module.exports = {


  friendlyName: 'Actor',


  description: 'This action if for select Actor entries.',


  inputs: {

      actorId: {
        required: false,
        type: 'string',
        description: 'Id pentru a identifica un Actor.',
        extendedDescription: 'Must be a valid actor id.',
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
    const { actorId } = inputs;

    const limitRequests =  await Actor.count();
    if (limitRequests>1000) {
      return {error: "Numarul de intrari maxime a fost atins."};
    }

    let result = [];
    if (!actorId){
      result = await Actor.find();
    } else {
      result = await Actor.findOne({id: actorId});
    }

    sails.log("get-actor - daw result: ", JSON.stringify(result));
    return result;

  }


};
