
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('activities', function(table){
    table.increments('id').notNullable().index()
    table.string('ref_code', 7).notNullable()
    table.string('appraiser_id', 10).notNullable()
    table.string('employee_id', 10).notNullable()
    table.text('key_activity').notNullable()
    table.text('output').notNullable()
    table.text('standard').notNullable()
    table.text('target').notNullable()
    table.text('actual_performance').notNullable()
    table.integer('score').notNullable().defaultTo(0)
    table.integer('result_category').notNullable().defaultTo(0)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('activities')
};
