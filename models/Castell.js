const mongoose = require('mongoose')
const collection = 'castells'

const TaskSchema = new mongoose.Schema({
  'keyName': { type: 'String' },
  'position': {
    'itpc': { type: 'String' },
    'gitpc': { type: 'String' },
    'posCol': { type: 'String' },
    'posRow': { type: 'String' },
    'gposCol': { type: 'String' },
    'gposRow': { type: 'String' }
  },
  'details': {
    'name': { type: 'String' },
    'esName': { type: 'String' },
    'tumbNailSrc': { type: 'String' },
    'esDescription': { type: 'String' },
    'esType': { type: 'String' },
    'consTec': { type: 'String' },
    'gamma': { type: 'String' }
  },
  'parts': {
    'pinya': { type: 'String' },
    'tronc': { type: 'String' },
    'pom': { type: 'String' },
    'folre': { type: 'String' },
    'manilles': { type: 'String' }
  },
  'score': {
    'Pointscar': { type: 'String' },
    'Pointsdes': { type: 'String' },
    'group': { type: 'String' },
    'subGroup': { type: 'String' }
  },
  'metrics': {
    'numCollDes': { type: 'String' },
    'firstCollCar': { type: 'String' },
    'numCollIn': { type: 'String' }
  },
  'hOld': {
    'yearCasCar': { type: 'String' },
    'firstCollCar': { type: 'String' },
    'yearCasDes': { type: 'String' },
    'firstCollDes': { type: 'String' }
  },
  'hNew': {
    'yearCasCar': { type: 'String' },
    'firstCollCar': { type: 'String' },
    'yearCasDes': { type: 'String' },
    'firstCollDes': { type: 'String' }
  },
  'imgScr': {
    'number': { type: 'String' },
    'name': { type: 'String' },
    'src': { type: 'String' }
  },
  'vidScr': {
    'number': { type: 'String' },
    'name': { type: 'String' },
    'src': { type: 'String' }
  }
}, { collection })

module.exports = mongoose.model('Castell', TaskSchema)

