'use strict'
var express = require('express')
var router = express.Router()
const shortid = require('shortid')
const moment = require('moment')
var knexfile = require('../knexfile.js')
const knex = require('knex')(knexfile)

router.get('/', function(req, res) {
    knex.select('ref_code', 'title', 'name')
        .from('employees')
        .where(req.query)
        .where('deleted', false)
        .then(function(employees){
            res.json(employees)
      }).catch(function(err){
          res.status(500).json( err.message )
      })
  }).get('/:id', function(req, res){
    knex.select('ref_code', 'title', 'name')
        .from('employees')
        .where('ref_code', req.params.id)
        .then(function(employees){
            res.json(employees)
      }).catch(function(err){
          res.status(500).json( err.message )
      })
  }).post('/', function(req, res){
    
  }).put('/:id', function(req, res){

  })

module.exports = router;
