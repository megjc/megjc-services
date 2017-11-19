
'use strict'
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const routes = require('./routes/index')
const app = express()
var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';
app.use(helmet())
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use('/employees', routes)

process.on('uncaughtException', (err)=>{
  console.log(err.stack)
  process.exit(1)
})

process.on('SIGINT', (msg)=>{
  console.log('App existing')
  process.exit(1)
})

module.exports = app;
