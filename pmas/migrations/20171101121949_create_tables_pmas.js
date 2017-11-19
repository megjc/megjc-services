
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('appraisals', function(table){
      table.increments('id').notNullable().primary().index()
      table.string('ref_code', 10).notNullable()
      table.string('employee_id', 10).notNullable()
      table.string('appraiser_id', 10).notNullable()
      table.date('period_start').notNullable()
      table.date('period_end').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('appraisals')
};
