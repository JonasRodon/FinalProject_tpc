   $.getJSON('lib/db.json', function (data) {
     var output = '<ul>'
     for (var i in data.castells) {
       output += '<form action="/action_page.php" id="carform">'
       output += '  Firstname:<input type="text" name="fname">'
       output += '  <input type="submit">'
       output += '<form>'

       output += '<select name="castells" form="castells">'
       output += '  <option value="' + data.castells[i].position.posRow + '-' + data.castells[i].position.posCol + '">' + data.castells[i].position.itpc + '-' + data.castells[i].keyName + '<option>'
       output += '<select>'
     }

     output += '</ul>'
     document.getElementById('placeholder').innerHTML = output
   })

   output += '<form action="/action_page.php" id="carform">'
   output += '  Firstname:<input type="text" name="fname">'
   output += '  <input type="submit">'
   output += '<form>'

   output += '<select name="castells" form="castells">'
   output += '  <option value="' + data.castells[i].position.posRow + '-' + data.castells[i].position.posCol + '">' + data.castells[i].position.itpc + '-' + data.castells[i].keyName + '<option>'
   output += '<select>'
