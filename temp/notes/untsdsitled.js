$('#tb tr').each(function () {
  var pk = $(this).find('td').eq(0).html()
  var nombre = $(this).find('td').eq(1).html()
  var apellidos = $(this).find('td').eq(3).html()
})

db.castells.find({'position.itpc': {$ne: ''}}).pretty()
