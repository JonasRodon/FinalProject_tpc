const mongoose = require('mongoose')
const collection = 'humanTowers'

const EventSchema = new mongoose.Schema({
  keyName: { type: String, default: false },
  position: {
    itpc: Number,
    gitpc: Number,
    posCol: Number,
    posRow: Number,
    gposCol: Number,
    gposRow: Number
  },
  details: {
    name: String,
    esName: String,
    tumbNailSrc: String,
    esDescription: String,
    esType: String,
    consTec: String,
    gamma: Number
  },
  parts: {
    pinya: String,
    tronc: String,
    pom: String,
    folre: String,
    manilles: String
  },
  score: {
    Pointscar: Number,
    Pointsdes: Number,
    group: String,
    subGroup: String
  },
  metrics: {
    numCollDes: String,
    firstCollCar: String,
    numCollIn: String
  },
  hOld: {
    yearCasCar: String,
    firstCollCar: String,
    yearCasDes: String,
    firstCollDes: String
  },
  hNew: {
    yearCasCar: String,
    firstCollCar: String,
    yearCasDes: String,
    firstCollDes: String
  },
  imgScr: [{
    number: String,
    name: String,
    src: String
  }],
  vidScr: [{
    number: String,
    name: String,
    src: String
  }]

}, { collection })

module.exports = mongoose.model('humanTowers', EventSchema)
