var data = [{
  '1': 'I',
  '2': 'II',
  '3': 'III',
  '4': 'IV',
  '5': 'V',
  '6': 'VI',
  '7': 'VII',
  '8': 'VIII',
  '9': 'IX',
  '10': 'X',
  '11': 'XI',
  '12': 'XII',
  '13': 'XIII',
  '14': 'XIV',
  '15': 'XV',
  '16': 'XVI',
  '17': 'XVII',
  '18': 'XVIII',
  '19': 'XIX',
  '20': 'XX',
  '21': 'XXI',
  '22': 'XXII',
  '23': 'XXIII',
  '24': 'XXIV',
  '25': 'XXV',
  '26': 'XXVI',
  '27': 'XXVII',
  '28': 'XXVIII',
  '29': 'XXIX',
  '30': 'XXX',
  '31': 'XXXI',
  '32': 'XXXII',
  '33': 'XXXIII',
  '34': 'XXXIV',
  '35': 'XXXV',
  '36': 'XXXVI',
  '37': 'XXXVII',
  '38': 'XXXVIII',
  '39': 'XXXIX',
  '40': 'XL',
  '41': 'XLI',
  '42': 'XLII',
  '43': 'XLIII',
  '44': 'XLIV',
  '45': 'XLV',
  '46': 'XLVI',
  '47': 'XLVII',
  '48': 'XLVIII',
  '49': 'XLIX',
  '50': 'L',
  '51': 'LI',
  '52': 'LII',
  '53': 'LIII',
  '54': 'LIV',
  '55': 'LV',
  '56': 'LVI',
  '57': 'LVII',
  '58': 'LVIII',
  '59': 'LIX',
  '60': 'LX',
  '61': 'LXI',
  '62': 'LXII',
  '63': 'LXIII',
  '64': 'LXIV',
  '65': 'LXV',
  '66': 'LXVI',
  '67': 'LXVII',
  '68': 'LXVIII',
  '69': 'LXIX',
  '70': 'LXX',
  '71': 'LXXI',
  '72': 'LXXII',
  '73': 'LXXIII',
  '74': 'LXXIV',
  '75': 'LXXV',
  '76': 'LXXVI',
  '77': 'LXXVII',
  '78': 'LXXVIII',
  '79': 'LXXIX',
  '80': 'LXXX',
  '81': 'LXXXI',
  '82': 'LXXXII',
  '83': 'LXXXIII',
  '84': 'LXXXIV',
  '85': 'LXXXV',
  '86': 'LXXXVI',
  '87': 'LXXXVII',
  '88': 'LXXXVIII',
  '89': 'LXXXIX',
  '90': 'XC',
  '91': 'XCI',
  '92': 'XCII',
  '93': 'XCIII',
  '94': 'XCIV',
  '95': 'XCV',
  '96': 'XCVI',
  '97': 'XCVII',
  '98': 'XCVIII',
  '99': 'XCIX',
  '100': 'C'
}]
    // for(var i = 1; i <= 100; i++) {
    //   console.log(data[0][i])
    // }

function doxRoman () {
  var total
  for (var i = 1; i <= 9; i++) {
        // console.log(data[0][i])
    total += '<option value="' + data[0][i] + '">' + i + ' ▶ ' + data[0][i] + '</option>'
  }
  if ($('#romans1')) { $('#romans1').html(total) }
}

function doyRoman () {
  var total
  for (var i = 1; i <= 22; i++) {
        // console.log(data[0][i])
    total += '<option value="' + data[0][i] + '">' + i + ' ▶ ' + data[0][i] + '</option>'
  }
  if ($('#romans2')) { $('#romans2').html(total) }
}

function dogxRoman () {
  var total
  for (var i = 1; i <= 12; i++) {
        // console.log(data[0][i])
    total += '<option value="' + data[0][i] + '">' + i + ' ▶ ' + data[0][i] + '</option>'
  }
  if ($('#romans3')) { $('#romans3').html(total) }
}

function dogyRoman () {
  var total
  for (var i = 1; i <= 33; i++) {
        // console.log(data[0][i])
    total += '<option value="' + data[0][i] + '">' + i + ' ▶ ' + data[0][i] + '</option>'
  }
  if ($('#romans4')) { $('#romans4').html(total) }
}
doxRoman()
doyRoman()
dogxRoman()
dogyRoman()

function doIndex () {
  var total
  for (var i = 1; i <= 100; i++) {
        // console.log(data[0][i])
    total += '<option value="' + i + '">' + i + '</option>'
  }
  if ($('#indexTpc')) { $('#indexTpc').html(total) }
}

function dogIndex () {
  var total
  for (var i = 1; i <= 220; i++) {
        // console.log(data[0][i])
    total += '<option value="' + i + '">' + i + '</option>'
  }
  if ($('#indexGtpc')) { $('#indexGtpc').html(total) }
}
doIndex()
dogIndex()

$(document).ready(function ($) {
  // $('#timepicker\\.\\[1\\]').timepicker({
  //   showAnim: 'blind'
  // })
  // $('#timepicker\\.\\[2\\]').timepicker({
  //   showAnim: 'blind'
  // })
  // $('#floating_timepicker').timepicker({
  //   onSelect: function (time, inst) {
  //     $('#floating_selected_time').html('You selected ' + time)
  //   }
  // })

  // $('#tabs').tabs()
  var config = {
    '.chosen-select': {},
    '.chosen-select-deselect': {
      allow_single_deselect: true
    },
    '.chosen-select-no-single': {
      disable_search_threshold: 10
    },
    '.chosen-select-no-results': {
      no_results_text: 'Oops, nothing found!'
    },
    '.chosen-select-width': {
      width: '95%'
    }
  }
  for (var selector in config) {
    $(selector).chosen(config[selector])
  }
  $('#temps1').timepicker({
    timeFormat: 'HH:mm:ss',
    stepHour: 1,
    stepMinute: 1,
    stepSecond: 1
  })
  $('#temps2').timepicker({
    timeFormat: 'HH:mm:ss',
    stepHour: 1,
    stepMinute: 1,
    stepSecond: 1
  })
})
