/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('jokes').truncate()
  .then(function(){
    return knex('jokes').insert([
      {joke:"kdfjbnvkjdfsnv",punchline:'adsfvasdvsav'},
      {joke:"kdfjbnvkjdasdffsnv",punchline:'avasdvsav'},
      {joke:"kdfjbnvkjdasdffsnv",punchline:'adsfvasddsfsdfvsav'},
      {joke:"kdfjbnvkjdfsbgsfdfnv",punchline:'adsfvdsdsfsdf dsf sdasdvsav'}

    ])
  })
};
