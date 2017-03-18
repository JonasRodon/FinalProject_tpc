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
       // var elText = document.getElementById("text");
       var elText = document.URL
           // if (!elText.value) {
           //     alert("Input a text");
           //     elText.focus();
           //     return;
           // }

       // qrcode.makeCode(elText.value);
       qrcode.makeCode(elText)
     }

     makeCode()

   // $("#text").
   //     on("blur", function () {
   //         makeCode();
   //     }).
   //     on("keydown", function (e) {
   //         if (e.keyCode == 13) {
   //             makeCode();
   //         }
   //     });
   })
