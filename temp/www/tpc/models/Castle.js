const mongoose = require('mongoose')
const collection = 'castles'

const CastleSchema = new mongoose.Schema({
  posicio: [{ line: Number, column: Number, gLine: Number, gColumn: Number }],
  puntuacioConcursDeCastells: Number,
  nomenclatura: String,
  sobrenom: String,
  gamma: Number,
  mitjanaPonderadaTempsdExecucioCronometrat: Number,
  anyDeConsecucioAbsolutCastellCarregat: Number,
  anyDeConsecucioAbsolutCastellDescarregat: Number,
  anyDeConsecucioEnlEpocaModernaCastellCarregat: Number,
  anyDeConsecucioEnlEpocaModernaCastellDescarregat: Number,
  alçadaAproximadaDelCastell: Number,
  numdeCastellersOptim: Number,
  pesAproximatDelCastell: Number,
  numCarregats: Number,
  numCastellsCaiguts: Number,
  numDeCastellsAssolits: Number,
  numDeCastellsNoAssolits: Number,
  numDeCollesQuelHanAssolitCastellCarregat: Number,
  numDeCollesQuelHanAssolitCastellDescarregat: Number,
  numDescarregats: Number,
  numIntens: Number,
  numIntentsDesmuntats: Number,
  numTotalAbsolut: Number,
  numTotalDeCollesQuelHanIntentat: Number,
  numTotalDeCollesQuelHandutaTerme: Number,
  collaPioneraEnAssolirElCastell: [],
  media: [{ links: [], videos: [], fotos: [] }],
  done: { type: Boolean, default: false },
  createdAt: { links: Number, default: Date.now },
  updatedAt: Number
}, { collection })

module.exports = mongoose.model('Castle', CastleSchema)
