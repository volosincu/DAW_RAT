
// const ActorModel = require("./../../models/Actor");

module.exports = {


  friendlyName: 'Actor',


  description: 'This action if for select Actor entries.',


  inputs: {

      name: {
        required: true,
        type: 'string',
        description: 'Actor name',
        extendedDescription: 'Must be a valid actor name.',
      },
      surname: {
        required: true,
        type: 'string',
        description: 'Actor surname.',
        extendedDescription: 'Must be a valid actor id.',
      },
      description: {
        required: true,
        type: 'string',
        description: 'The description of the actor information related to films, television series, home videos, video games, and streaming content online – including cast, production crew and personal biographies, plot summaries, Biography, Filmography, trivia, ratings, and fan and critical reviews.',
        extendedDescription: 'Must be a valid actor id.',
      },
      birthday: {
        required: true,
        type: 'string',
        description: 'date of birth, birthday',
        extendedDescription: 'To be a valid birthday use format mm/dd/yyy.',
      },
      movies: {
        required: false,
        type: 'string',
        description: 'Filmography the movies, films that the actor was part of cast, tv series, etc',
        extendedDescription: 'This can be distribution on tv, online streaming platforms, short or long casts, festivals, etc',
      },
      plays: {
        required: false,
        type: 'string',
        description: 'The plays actor has played.',
        extendedDescription: 'This can be comedies, dramas, experimental and more types of theatrical, general entertainment.',
      },
      prizes: {
        required: false,
        type: 'string',
        description: 'Years of the awards, actors were nominated as the best in their categories',
        extendedDescription: 'Perhaps the most well-known award in American cinema, the Oscars are handed out every year to actors, directors, producers, and film professionals.',
      },
      theatre: {
        required: false,
        type: 'string',
        description: 'theatre where actor plays ',
        extendedDescription: 'Modern theatre includes performances of plays and musical theatre. The art forms of ballet and opera are also theatre and use many conventions such as acting, costumes and staging.',
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
