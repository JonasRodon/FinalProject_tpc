const express = require('express')
var path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const PORT = process.env.PORT || 5000
const urlDB = process.env.DB_URI || 'mongodb://localhost:27017/dbtpc'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'pug')
app.use(express.static('public'))
console.log(path.join(__dirname, 'public'))
const routerCastells = require('./routes/castells')
const routerCastell = require('./routes/castell')
mongoose.connect(urlDB)

app.get('/', function (request, response) {
  response.redirect('/index.html')
})
app.use('/castells', routerCastells)
app.use('/castell', routerCastell)

app.listen(PORT, () => console.log(`💼 Castells Server running at PORT ${PORT}...`))
// app.listen(app.get('port'), function () {
//   console.log('Node app is running on port', app.get('port'))
// })
