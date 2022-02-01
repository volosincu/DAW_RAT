
// const ActorModel = require("./../../models/Actor");

module.exports = {


  friendlyName: 'Movie',


  description: 'This action is to creating Movie entries.',


  inputs: {


    title: { 
      required: true,
      type: 'string',
      description: 'Movie title',
      extendedDescription: 'Must be a valid movie name.',
     },

    year: {
      required: true,
      type: 'string',
      description: 'Movie release year',
      extendedDescription: 'Must be a valid movie name.',
    },

    ratings: { 
      required: true,
      type: 'number',
      description: 'Movie rating',
      extendedDescription: 'Must be a valid movie name.',
     },

    cast: { 
      required: true,
      type: 'string',
      description: 'Movie cast, distribution of actors.',
      extendedDescription: 'Must be a valid movie name.', 
    },

    serie: { 
      required: true,
      type: 'boolean',
      description: 'serie',
      extendedDescription: 'Must be a true if a serie production, otherwise false.',
     },

    platform: {
      required: true,
      type: 'string',
      description: 'Actor name',
      extendedDescription: 'The platform name where was released or produced. Main streaming platforms like Amazon, Netflix, HBO.',
    },

    description: {
      required: true,
      type: 'string',
      description: 'A synopsis should be a detailed description of the entire plot of the title, including spoilers ',
      extendedDescription: 'Summaries provide a much deeper description and analysis of the storyline from start to finish',
    },

    imdbid: {
      required: true,
      type: 'string',
      description: 'The imdb id of the movie with a extended information about the movies',
      extendedDescription: '',
    }
    

  },


  exits: {

    success: {
      description: 'Movie created with succes.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

  },


  

  fn: async function (inputs) {
    sails.log("post-movie - daw inputs: ", JSON.stringify(inputs));
    const { title, year, ratings, cast, serie, platform, description, imdbid } = inputs;
    const model = {};

    const guid = newGuid();
    model.id = guid;
    model.title = title;
    model.year = year;
    model.ratings = ratings; 
    model.cast = cast;
    model.serie = serie;
    model.platform = platform;
    model.description = description;
    model.imdbid = imdbid;

    const saved = await Movie.create(model).fetch();
    return saved;
  }


};

function newGuid(){
  return (Math.random(Date.now)+"").slice(2);
}
