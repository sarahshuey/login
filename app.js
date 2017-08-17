const express = require('express')
const parseurl = require('parseurl')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
