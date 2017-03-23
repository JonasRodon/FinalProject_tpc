   var myScroll, myScroll2

   function loaded () {
     myScroll = new IScroll('#wrapper ', {
       scrollX: true
     })
     myScroll2 = new IScroll('#wrapper .container2', {
       scrollX: true,
       scrollY: true,
       mouseWheel: true
     })
   }
   document.addEventListener('touchmove', function (e) {
     e.preventDefault()
   }, isPassive() ? {
     capture: false,
     passive: false
   } : false)
       // $(document).ready(function() {
       //     $('.slider8').bxSlider({
       //         mode: 'vertical',
       //         slideWidth: 300,
       //         minSlides: 1,
       //         slideMargin: 5,
       //         auto: true,
       //         autoControls: true,
       //         speed: 2000
       //     })
       // })

   function isPassive () {
     var supportsPassiveOption = false
     try {
       addEventListener('test', null, Object.defineProperty({}, 'passive', {
         get: function () {
           supportsPassiveOption = true
         }
       }))
     } catch (e) {}
     return supportsPassiveOption
   }

   $(document).ready(function () {
     var qrcode = new QRCode(document.getElementById('qrcode'), {
       width: 250,
       height: 250,
       useSVG: true
     })
     function makeCode () {
       var elText = document.URL
       qrcode.makeCode(elText)
     }
     makeCode()
   })

   //  $(document).ready(function () {
   //    var replaceWithSVG = function (selector, url) {
   //      $('').appendTo('head')
   //      $.get(url, function (data) {
   //     // Replace image with new SVG
   //        $(selector).prepend(data.replace(/<\?xml[^>]+>/, ''))
   //      }, 'text')
   //    }
   //    var selectors = ['.svgImage']
   //    for (var i in selectors) {
   //      var selector = selectors[i]
   //      var url = window.getComputedStyle(
   //     document.querySelector(selectors[i]), ':before'
   //   ).getPropertyValue('content')
   //      url = url.replace(/url\(["']?([^'"\)]+)["']?\)/, '$1')
   //      replaceWithSVG(selectors[i], url)
   //    }
   //  })
   //  function genera_tabla (n, c) {
   // // Obtener la referencia del elemento body
   //    var body = document.getElementsByTagName('body')[0]

   // // Crea un elemento <table> y un elemento <tbody>
   //    var tabla = document.createElement('table')
   //    var tblBody = document.createElement('tbody')

   // // Crea las celdas
   //    for (var i = 1; i <= n; i++) {
   //   // Crea las hileras de la tabla
   //      var hilera = document.createElement('tr')

   //      for (var j = 1; j <= c; j++) {
   //     // Crea un elemento <td> y un nodo de texto, haz que el nodo de
   //     // texto sea el contenido de <td>, ubica el elemento <td> al final
   //     // de la hilera de la tabla
   //        var celda = document.createElement('td')
   //        var textoCelda = document.createTextNode('celda en la hilera ' + i + ', columna ' + j)
   //        celda.appendChild(textoCelda)
   //        hilera.appendChild(celda)
   //      }

   //   // agrega la hilera al final de la tabla (al final del elemento tblbody)
   //      tblBody.appendChild(hilera)
   //    }

   // // posiciona el <tbody> debajo del elemento <table>
   //    tabla.appendChild(tblBody)
   // // appends <table> into <body>
   //    body.appendChild(tabla)
   // // modifica el atributo "border" de la tabla y lo fija a "2";
   //    tabla.setAttribute('border', '2')
   //  }
