
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('activities', function(table){
    table.text('actual_performance').notNullable().defaultTo('none').alter()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('activities', function(table){
    table.text('actual_performance').notNullable().alter()
  })
};
