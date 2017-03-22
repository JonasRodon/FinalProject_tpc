$(document).ready(function () {
  function paintTable (rows, cols) {
    var contador = 1
    var tabla = document.createElement('table')
    tabla = $('<table id="tb">:)<tbody>')
    $.getJSON('lib/db.json', function (data) {
      var output = []

      for (var i in data.castells) {
        output[i] = data.castells[i].keyName
        // console.log(output[i])
        var n = output[i]

        for (var r = 0; r < rows; r++) {
          var tr = $('<tr>')

          for (var c = 0; c < cols; c++) {
            // console.log(transName(n))
            // if (contador === data.castells[i].position.itpc) {
            //   console.log('hey!')
            //   var selector = $('<td>')
            //   selector = (crearCela(n, 6, contador))
            //   selector += $('</td>')
            //   $(selector).appendTo(tr)
            // }
            console.log('hey')
          }
          contador++
        }
        // fill in your cells with something meaningful here
      }

      tr.appendTo(tabla)

      tabla.appendTo('body') // Add your resulting table to the DOM, I'm using the body tag for example
    })

    function crearCela (n, g, contador) {
      function transName (name) {
        var tname = ''
        name.split('')
        if (name[0] === 'P') {
          tname += name[0] + '-' + name[1] + '-' + name[2]
          if (typeof name[3] !== 'undefined') {
            tname += '-' + name[3]
          }
          if (typeof name[4] !== 'undefined') {
            tname += '-' + name[4]
          }
          if (typeof name[5] !== 'undefined') {
            tname += '-' + name[5]
          }
        } else if (name[1] !== 'd') {
          tname += name[0] + name[1] + '-' + name[2]
          if (typeof name[3] !== 'undefined') {
            tname += '-' + name[3]
          }
          if (typeof name[4] !== 'undefined') {
            tname += '-' + name[4]
          }
          if (typeof name[5] !== 'undefined') {
            tname += '-' + name[5]
          }
        } else {
          tname += name[0] + '-' + name[1] + '-' + name[2]
          if (typeof name[3] !== 'undefined') {
            tname += '-' + name[3]
          }
          if (typeof name[4] !== 'undefined') {
            tname += '-' + name[4]
          }
          if (typeof name[5] !== 'undefined') {
            tname += '-' + name[5]
          }
        }
        return tname
      }
      var tn = transName(n)
      tn.split('-')
      console.log(tn)
      var jointText = tn.join('')
      var text = ''
      for (var i = 0; i <= tn.length; i++) {
        if (tn.length === 3) {
          if (tn[0].length === 2) {
            text += '<text id="a1" transform="translate(15.08 81.52)" class="cela">' + tn[0] + '</text><text id="a2" transform="translate(66.5 81.52) scale(0.91 1)" class="cela">' + tn[1] + '</text><text id="a3" transform="translate(86.01 81.52)" class="cela">' + tn[2] + '</text>'
          } else {
            text += '<text id="a1" transform="translate(34.08 81.52)" class="cela">' + tn[0] + '</text><text id="a2" transform="translate(61.5 81.52) scale(0.91 1)" class="cela">' + tn[1] + '</text><text id="a3" transform="translate(81.01 81.52)" class="cela">' + tn[2] + '</text>'
          }
        } else if (tn.length === 4) {
          if (tn[3].length === 2) {
            text = '<text id="a1" transform="translate(15.12 81.52)" class="cela">' + tn[0] + '</text><text id="a2" transform="translate(41.54 81.52) scale(0.91 1)" class="cela">' + tn[1] + '</text><text id="a3" transform="translate(65.05 81.52)" class="cela">' + tn[2] + '</text><text id="a4" transform="translate(88.05 81.52)" class="cela">' + tn[3] + '</text>'
          } else {
            text = '<text id="a1" transform="translate(29.12 81.52)" class="cela">' + tn[0] + '</text><text id="a2" transform="translate(56.54 81.52) scale(0.91 1)" class="cela">' + tn[1] + '</text><text id="a3" transform="translate(76.05 81.52)" class="cela">' + tn[2] + '</text><text id="a4" transform="translate(99.05 81.52)" class="cela">' + tn[3] + '</text>'
          }
        } else if (tn.length === 5) {
          if (tn[2].length === 2) {
            text += '<text id="a1" transform="translate(0.44 81.52)" class="cela">' + tn[0] + '</text><text id="a2" transform="translate(28.87 81.52) scale(0.91 1)" class="cela">' + tn[1] + '</text><text id="a3" transform="translate(42.37 81.52)" class="celaSpecial">' + tn[2] + '</text><text id="a4" transform="translate(99.37 81.52)" class="cela">' + tn[3] + '</text><text id="a5" transform="translate(109.37 81.52)" class="cela">' + tn[4] + '</text>'
          } else {
            text += '<text id="a1" transform="translate(19.44 81.52)" class="cela">' + tn[0] + '</text><text id="a2" transform="translate(42.87 81.52) scale(0.91 1)" class="cela">' + tn[1] + '</text><text id="a3" transform="translate(64.37 81.52)" class="cela">' + tn[2] + '</text><text id="a4" transform="translate(87.37 81.52)" class="cela">' + tn[3] + '</text><text id="a5" transform="translate(98.37 81.52)" class="cela">' + tn[4] + '</text>'
          }
        } else if (tn.length === 6) {
          if (tn[2].length === 2) {
            text += '<text id="a1" transform="translate(11.08 81.52)" class="cela">' + tn[0] + '</text><text id="a2" transform="translate(39.5 81.52) scale(0.91 1)" class="cela">' + tn[1] + '</text><text id="a3" transform="translate(59.01 81.52)" class="cela">' + tn[2] + '</text><text id="a4" transform="translate(89.01 81.52)" class="cela">' + tn[3] + '</text><text id="a5" transform="translate(93.01 81.52)" class="cela">' + tn[4] + '</text><text id="a6" transform="translate(124.01 81.52)" class="cela">' + tn[5] + '</text>'
          } else {
            text += '<text id="a1" transform="translate(11.08 81.52)" class="cela">' + tn[0] + '</text><text id="a2" transform="translate(39.5 81.52) scale(0.91 1)" class="cela">' + tn[1] + '</text><text id="a3" transform="translate(59.01 81.52)" class="cela">' + tn[2] + '</text><text id="a4" transform="translate(83.01 81.52)" class="cela">' + tn[3] + '</text><text id="a5" transform="translate(93.01 81.52)" class="cela">' + tn[4] + '</text><text id="a6" transform="translate(116.01 81.52)" class="cela">' + tn[5] + '</text>'
          }
        }
      }
      var totalText = '<svg id="cela' + contador + '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73" class="castell" data-toggle="modal" data-target="#m' + jointText + '"><defs><style>.' + gamma(g) + ' .cela {font-size: 40px;font-family:font72197;font-weight:700;}.celaSpecial{font-size: 1.71em;font-family:font72197;font-weight:700;}#a1{fill:#fff; font-weight:700; font-size:2.705em;}#a2{fill:#fff; font-size:1.926em;}#a3{fill:#fff; font-weight:700; font-size:2.705em;}#a4{font-family: font72197; fill:#fff; font-weight:700; font-size:1.71em;font-style: italic;}#a5{font-family: font72197; fill:#fff; font-weight:700; font-size:1.71em;font-style: italic;}#a6{font-family: font72197; fill:#fff; font-weight:700; font-size:1.71em;font-style: italic;}</style></defs><g id="nomenclatura"><rect class="' + gamma(g) + '" x="2" y="2" width="137.73" height="137.73"/>'
      totalText += text
      totalText += '</g></svg>'
      console.log(totalText)
      return totalText

      function gamma (g) {
        var result
        switch (g) {
          case 6:
            result = 'De6'
            break
          case 7:
            result = 'De7'
            break
          case 8:
            result = 'De8'
            break
          case 9:
            result = 'De9'
            break
          case 'extra':
            result = 'DeEx'
            break
          default:
            result = 'DeDef'
        }
        return result
      }
    }
  }
  paintTable(9, 22)
})
