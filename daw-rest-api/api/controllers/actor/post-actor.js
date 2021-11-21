
// const ActorModel = require("./../../models/Actor");

module.exports = {


  friendlyName: 'Actor',


  description: 'This action if for select Actor entries.',


  inputs: {

      name: {
        required: true,
        type: 'string',
        description: 'Numele Actorului.',
        extendedDescription: 'Must be a valid actor id.',
      },
      surname: {
        required: true,
        type: 'string',
        description: 'Prenumele Actorului.',
        extendedDescription: 'Must be a valid actor id.',
      },
      description: {
        required: true,
        type: 'string',
        description: 'Id pentru a identifica un Actor.',
        extendedDescription: 'Must be a valid actor id.',
      },
      birthday: {
        required: true,
        type: 'string',
        description: 'data in formatul mm/dd/yyy',
        extendedDescription: 'Pentru a fi valid formatul trebuie sa fie urmatorul mm/dd/yyy.',
      },
      movies: {
        required: false,
        type: 'string',
        description: 'Filmele in care actorul a jucat.',
        extendedDescription: 'Filmele in care actorul a jucat. Filmele sunt un sir de caractere separate prin ";".',
      },
      plays: {
        required: false,
        type: 'string',
        description: 'Piesele in care actorul a jucat.',
        extendedDescription: 'Piesele in care actorul a jucat. Piesele sunt un sir de caractere separate prin ";".',
      },
      prizes: {
        required: false,
        type: 'string',
        description: 'Premiile pe care actorul le-a primit, personal sau pentru filme si piese de teatru.',
        extendedDescription: 'Premile sunt un sir de caractere separate prin ";".',
      },
      theatre: {
        required: false,
        type: 'string',
        description: 'Teatrul in care joaca.',
        extendedDescription: 'Daca este actor de teatru, acesta este teatrul principal la care joaca. Doar pentru actori de teatru.',
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
    sails.log("post-actor - daw inputs: ", JSON.stringify(inputs));
    const { name, surname, description, birthday, movies, plays, prizes, theatre } = inputs;
    const model = {};

    const guid = newGuid();
    model.id = guid;
    model.name = name;
    model.surname = surname;
    model.description = description; // "2013 Universitatea de Arte „George Enescu”, Iași, Facultatea de Teatru, specializarea Arta Actorului și Arta actorului mânuitor de păpuși și marionete; 2015 Master Arta Actorului, Universitatea de Arte „George Enescu”, Iași";
    model.birthday = new Date(birthday).toISOString(); // forrmat 'mm/dd/yyyy'
    model.movies = movies;
    model.plays = plays;
    model.prizes = prizes;
    model.theatre = theatre;

    const saved = Actor.create(model).fetch();
    return saved;
  }


};

function newGuid(){
  return (Math.random(Date.now)+"").slice(2);
}
