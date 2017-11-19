
exports.up = function(knex, Promise) {
  return knex.schema.table('activities', function(table){
    table.dropColumn('ref_code')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('activities', function(table){
    table.string('ref_code', 10).notNullable()
  })
};
