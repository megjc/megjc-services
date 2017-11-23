
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('resources', function(table){
    table.increments('id').notNullable().primary().index()
    table.string('ref_code', 10).notNullable()
    table.string('appraisal_id', 10).notNullable()
    table.text('key_output').notNullable().defaultTo('default key output')
    table.text('human').notNullable().defaultTo('default human')
    table.text('physical').notNullable().defaultTo('default physical')
    table.text('training').notNullable().defaultTo('default training and development')
    table.integer('cost').notNullable().defaultTo(0)
    table.date('action_date').notNullable().defaultTo('2015-10-21')
    table.date('receipt_date').notNullable().defaultTo('2015-10-21')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resources')
};
