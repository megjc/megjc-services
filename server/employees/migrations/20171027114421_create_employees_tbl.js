
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('employees', function(table){
      table.increments('id').notNullable().primary().index()
      table.string('ref_code', 10).notNullable()
      table.enu('title', ['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Prof.']).defaultTo('Miss')
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.date('hire_date').notNullable().defaultTo('2015-10-21')
      table.string('nis', 7).notNullable().defaultTo('A000000')
      table.string('emp_num').notNullable().defaultTo('999999999')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
      table.boolean('deleted').notNullable().defaultTo(false)
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employees')
};
