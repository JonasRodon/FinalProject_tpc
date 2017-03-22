const mongoose = require('mongoose')
const collection = 'castells'

const TaskSchema = new mongoose.Schema({
  'keyName': { type: 'String' },
  'position': {
    'itpc': { type: 'Number' },
    'gitpc': { type: 'Number' },
    'posCol': { type: 'Number' },
    'posRow': { type: 'Number' },
    'gposCol': { type: 'Number' },
    'gposRow': { type: 'Number' }
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
    'pinya': { type: 'Number' },
    'tronc': { type: 'Number' },
    'pom': { type: 'Number' },
    'folre': { type: 'Number' },
    'manilles': { type: 'Number' }
  },
  'score': {
    'Pointscar': { type: 'Number' },
    'Pointsdes': { type: 'Number' },
    'group': { type: 'String' },
    'subGroup': { type: 'String' }
  },
  'metrics': {
    'numCollDes': { type: 'Number' },
    'firstCollCar': { type: 'String' },
    'numCollIn': { type: 'Number' }
  },
  'hOld': {
    'yearCasCar': { type: 'Number' },
    'firstCollCar': { type: 'Number' },
    'yearCasDes': { type: 'Number' },
    'firstCollDes': { type: 'Number' }
  },
  'hNew': {
    'yearCasCar': { type: 'Number' },
    'firstCollCar': { type: 'Number' },
    'yearCasDes': { type: 'Number' },
    'firstCollDes': { type: 'Number' }
  },
  'imgScr': {
    'number': { type: 'Number' },
    'name': { type: 'String' },
    'src': { type: 'String' }
  },
  'vidScr': {
    'number': { type: 'Number' },
    'name': { type: 'String' },
    'src': { type: 'String' }
  }
}, { collection })

module.exports = mongoose.model('Castell', TaskSchema)

