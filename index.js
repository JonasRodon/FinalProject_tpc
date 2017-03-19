var express = require('express')
var path = require('path')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(path.join(__dirname, 'public')))

// views is directory for all template files
// app.set('views', __dirname + '/views')
// app.set('view engine', 'ejs')

app.get('/', function (request, response) {
  response.redirect('/index.html')
})
app.get('/001', function (request, response) {
  response.redirect('/master/p.html')
})
app.get('/tpcastellera', function (request, response) {
  response.redirect('/tpcastellera/master/index.html')
})

// app.get('/cool', function (request, response) {
//   response.send(cool())
// })

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})

