'use strict'
const bookshelf = require('../bookshelf')
const Employee = bookshelf.Model.extend({
  tableName:'employees',
})

module.exports = Employee
