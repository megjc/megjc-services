
exports.up = function(knex, Promise) {
  return knex.schema.table('appraisals', function(table){
    table.integer('sup_length')
         .notNullable()
         .defaultTo(0)
         .after('period_end')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('appraisals', function(table){
      table.dropColumn('sup_length')
    })
};
