const express = require('express')
const app = express()
const mustache = require('mustache-express')
const sequelize = require('sequelize')
const session = require('session')
const bodyParser = require('body-parser')

app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, function () {
  console.log("I'm listening")
})
