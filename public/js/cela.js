function crearCela (n, g) {
  n = n.split('-')
  var jointText = n.join().toString()
  var text = ''
  text = '<svg id="cela" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.73 141.73" class="castell" data-toggle="modal" data-target="#m' + jointText + '"><defs><style>.colorDeFons{fill:' + gamma(g) + ';} .cela {font-size: 40px;font-family:font72197;font-weight:700;}.celaSpecial{font-size: 1.71em;font-family:font72197;font-weight:700;}#a1{fill:#fff; font-weight:700; font-size:2.705em;}#a2{fill:#fff; font-size:1.926em;}#a3{fill:#fff; font-weight:700; font-size:2.705em;}#a4{font-family: font72197; fill:#fff; font-weight:700; font-size:1.71em;font-style: italic;}#a5{font-family: font72197; fill:#fff; font-weight:700; font-size:1.71em;font-style: italic;}#a6{font-family: font72197; fill:#fff; font-weight:700; font-size:1.71em;font-style: italic;}</style></defs><title>Pd4</title><g id="nomenclatura"><rect class="colorDeFons" x="2" y="2" width="137.73" height="137.73"/>'
  for (var i = 0; i < n.length; i++) {
    if (n.length === 3) {
      text += '<text id="a1" transform="translate(34.08 81.52)" class="cela">' + n[0] + '</text><text id="a2" transform="translate(61.5 81.52) scale(0.91 1)" class="cela">' + n[1] + '</text><text id="a3" transform="translate(81.01 81.52)" class="cela">' + n[2] + '</text>'
    } else if (n.length === 4) {
      text += '<text id="a1" transform="translate(29.12 90.13)" class="cela">' + n[0] + '</text><text id="a2" transform="translate(56.54 90.13) scale(0.91 1)" class="cela">' + n[1] + '</text><text id="a3" transform="translate(76.05 90.13)" class="cela">' + n[2] + '</text><text id="a4" transform="translate(99.05 90.13)" class="cela">' + n[3] + '</text>'
    } else if (n.length === 5) {
      if (n[2].length === 2) {
        console.log(n[2].length)
        text += '<text id="a1" transform="translate(19.44 87.86)" class="cela">' + n[0] + '</text><text id="a2" transform="translate(42.87 87.86) scale(0.91 1)" class="cela">' + n[1] + '</text><text id="a3" transform="translate(55.37 87.86)" class="celaSpecial">' + n[2] + '</text><text id="a4" transform="translate(87.37 87.86)" class="cela">' + n[3] + '</text><text id="a5" transform="translate(98.37 87.86)" class="cela">' + n[4] + '</text>'
      } else {
        text += '<text id="a1" transform="translate(19.44 87.86)" class="cela">' + n[0] + '</text><text id="a2" transform="translate(42.87 87.86) scale(0.91 1)" class="cela">' + n[1] + '</text><text id="a3" transform="translate(64.37 87.86)" class="cela">' + n[2] + '</text><text id="a4" transform="translate(87.37 87.86)" class="cela">' + n[3] + '</text><text id="a5" transform="translate(98.37 87.86)" class="cela">' + n[4] + '</text>'
      }
    } else if (n.length === 6) {
      if (n[2].length === 2) {
        console.log(n[2].length)
        text += '<text id="a1" transform="translate(11.08 81.52)" class="cela">' + n[0] + '</text><text id="a2" transform="translate(39.5 81.52) scale(0.91 1)" class="cela">' + n[1] + '</text><text id="a3" transform="translate(59.01 81.52)" class="cela">' + n[2] + '</text><text id="a4" transform="translate(89.01 81.52)" class="cela">' + n[3] + '</text><text id="a5" transform="translate(93.01 81.52)" class="cela">' + n[4] + '</text><text id="a6" transform="translate(124.01 81.52)" class="cela">' + n[5] + '</text>'
      } else {
        text += '<text id="a1" transform="translate(11.08 81.52)" class="cela">' + n[0] + '</text><text id="a2" transform="translate(39.5 81.52) scale(0.91 1)" class="cela">' + n[1] + '</text><text id="a3" transform="translate(59.01 81.52)" class="cela">' + n[2] + '</text><text id="a4" transform="translate(83.01 81.52)" class="cela">' + n[3] + '</text><text id="a5" transform="translate(93.01 81.52)" class="cela">' + n[4] + '</text><text id="a6" transform="translate(116.01 81.52)" class="cela">' + n[5] + '</text>'
      }
    }
  }
  text += '</g></svg>'
  document.write(text)
  console.log(n)

  function gamma (g) {
    switch (g) {
      case 6:
        return '#008EB0'
        break
      case 7:
        return '#4CBB7D'
        break
      case 8:
        return '#FCB033'
        break
      case 9:
        return '#F15D4D'
        break
      case 'extra':
        return '#AD8EC3'
        break
      default:
        return '#FFFFFF'
    }
  }
}
