const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const routerCastells = require('./routes/castells')
const routerCastell = require('./routes/castell')

const PORT = process.env.PORT || 5000
const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/dbtpc'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.use(express.static('public'))

mongoose.connect(urlDB)

app.use('/castells', routerCastells)
app.use('/castell', routerCastell)

app.listen(PORT, () => console.log(`💼 Castells Server running at PORT ${PORT}...`))
