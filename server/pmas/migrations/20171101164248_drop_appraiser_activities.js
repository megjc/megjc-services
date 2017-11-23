
exports.up = function(knex, Promise) {
  return knex.schema.table('activities', function(table){
    table.dropColumn('appraiser_id')
    table.string('appraisal_id', 10).notNullable().after('ref_code')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('activities', function(table){
    table.dropColumn('appraisal_id')
    table.string('appraiser_id', 10).notNullable().after('ref_code')
  })
};
