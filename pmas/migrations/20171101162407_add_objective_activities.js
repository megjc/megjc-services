
exports.up = function(knex, Promise) {
  return knex.schema.table('activities', function(table){
    table.text('objective').notNullable().after('employee_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('activities', function(table){
    table.dropColumn('objective')
  })
};
