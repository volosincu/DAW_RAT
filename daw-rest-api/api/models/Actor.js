const fs = require('fs');
// const imdb = require("../db");
/**
 * Actor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { setMaxListeners } = require('process');

module.exports = {

  tableName : 'actor',
  datastore : 'localDiskDb',

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    id: { type: 'string' },

    name: { type: 'string' },

    surname: { type: 'string' },
    // new Date('mm/dd/yyyy')
    birthday: { type: 'string' },

    movies: { type: 'string' },

    plays: { type: 'string' },

    foto: { type: 'string' },

    prizes: { type: 'string' }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

  // getActorMovies: function (actorId) {
  //   const actor = imdb.store.actor.filter((actorModel) => {
  //     return actorModel.actorId === actorId;
  //   })[0];

  //   return actor.movies.split(";");
  // },

  // getActorPlays: function (actorId) {
  //   const actor = imdb.store.actor.filter((actorModel) => {
  //     return actorModel.actorId === actorId;
  //   })[0];

  //   return actor.plays.split(";");
  // },

  // createModel: function () {
  //   return Object.create(this.attributes);
  // },

  // save: function (model) {

  //   imdb.store.actor = [...imdb.store.actor, model];

  //   try {
  //     sails.log("Save Actor model:  ");
  //     sails.log(model);
      
  //     fs.writeFileSync('./imdb-store.json', JSON.stringify(imdb.store));
  //     sails.log("........... salvat cu succes .............");
  //   } catch (err) {
  //     sails.log.error("Eroare la persistarea model actor in store");
  //   }
   
  // } 

};

