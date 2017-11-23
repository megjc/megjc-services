'use strict'
var express = require('express')
var router = express.Router()
const shortid = require('shortid')
const moment = require('moment')
var knexfile = require('../knexfile.js')
const knex = require('knex')(knexfile)

router.get('/', getAppraisals )
router.post('/', createAppraisal)
router.get('/:id', getAppraisalById)
router.post('/:id/activities', createActivity)
router.get('/:id/activities', getActivities )
router.get('/:id/activities/:ac_id', getActivityById)
router.put('/:id/activities/:ac_id', updateActivity)
router.get('/:id/resources', getResources)
router.get('/:id/resources/:r_id', getResourcesById)
router.put('/:id/resources/:r_id', updateResource)
router.post('/:id/resources', createResource)


module.exports = router

function createAppraisal( req, res ) {
  let appraisal = req.body
  appraisal.ref_code = shortid.generate()
  appraisal.period_start = moment(appraisal.period_start).format('YYYY-MM-DD')
  appraisal.period_end = moment(appraisal.period_end).format('YYYY-MM-DD')
  knex('appraisals')
      .returning('ref_code')
      .insert(appraisal)
      .then(function(result){
        res.json(result)
      }).catch(function(err){
        res.status(500).json( err.message )
      })
}

function getAppraisals( req, res) {
  knex.select()
      .from('appraisals')
      .where(req.query)
      .then(function(appraisals){
          res.json(appraisals)
    }).catch(function(err){
        res.status(500).json( err.message )
    })
  }

function getAppraisalById( req, res ) {
  knex.select()
      .from('appraisals')
      .where({'ref_code': req.params.id})
      .then(function(appraisals){
          res.json(appraisals[0])
    }).catch(function(err){
        res.status(500).json( err.message )
    })
}


function createActivity( req, res ) {
  let activity = req.body
  activity.ref_code = shortid.generate()
  knex('activities')
      .insert(activity)
      .then(function(result){
        if(!result)
          return res.status(400)
                    .json({
                     'text': 'Error in creating activity',
                     'success': false
                 })
        res.json({'text': 'Success! Activity successfully created', 'success': true})
      }).catch(function(err){
        res.status(500).json( err.message )
      })
}

function getActivities( req, res ){
  knex.select()
      .from('activities')
      .where({'appraisal_id': req.params.id})
      .then(function(appraisals){
          res.json(appraisals)
    }).catch(function(err){
        res.status(500).json( err.message )
    })
}

function getActivityById( req, res ) {
  knex.select()
      .from('activities')
      .where({'ref_code': req.params.ac_id})
      .then(function(activities){
          res.json(activities[0])
    }).catch(function(err){
        res.status(500).json( err.message )
    })
}

function updateActivity( req, res ) {
  knex('activities')
      .where({'ref_code': req.params.ac_id})
      .update(req.body)
      .then(function(result){
        if(!result) return res.status(400).json({'text': 'Update was not success', 'success': false})
        res.json({'text': 'Update was successful', 'success': true})
      }).catch(function(err){
        res.status(500).json( err.message )
      })
}

function getResources( req, res) {
  knex.select()
      .from('resources')
      .where({'appraisal_id': req.params.id})
      .then(function(resources){
          res.json(resources)
    }).catch(function(err){
        res.status(500).json( err.message )
    })
}

function getResourcesById( req, res) {
  knex.select()
      .from('resources')
      .where({'appraisal_id': req.params.id, 'ref_code': req.params.r_id})
      .then(function(resources){
          res.json(resources[0])
    }).catch(function(err){
        res.status(500).json( err.message )
    })
}

function updateResource( req, res ) {
  req.body.action_date = moment(req.body.action_date).format('YYYY-MM-DD')
  req.body.receipt_date = moment(req.body.receipt_date).format('YYYY-MM-DD')
  req.body.created_at = moment(req.body.created_at).format('YYYY-MM-DD')
  req.body.updated_at = moment(req.body.updated_at).format('YYYY-MM-DD')
  knex('resources')
      .where({'ref_code': req.params.r_id})
      .update(req.body)
      .then(function(result){
        if(!result) return res.status(400).json({'text': 'Update was not successful', 'success': false})
        res.json({'text': 'Update was successful', 'success': true})
      }).catch(function(err){
        res.status(500).json( err.message )
      })
}

function createResource( req, res) {
  let resource = req.body
  resource.ref_code = shortid.generate()
  resource.action_date = moment('2015-10-21').format('YYYY-MM-DD')
  resource.receipt_date = moment('2015-10-21').format('YYYY-MM-DD')
  knex('resources')
      .insert(resource)
      .then(function(result){
        res.json(result)
      }).catch(function(err){
        res.status(500).json( err.message )
      })
}
