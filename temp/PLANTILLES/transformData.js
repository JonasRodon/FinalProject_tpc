let data = require('./bd.json')
const fs = require('fs')
let cleanData = []
    // console.log(data)
data.forEach(item => {
  let keyName = item.Nomenclatura
  let position = {}
  let tpc = item.indexTPc
  let gtpc = item.indexgTpc
  let cord = item.Cordenadas
  let posC = ''
  let posF = ''
  let gposC = ''
  let gposF = ''
  let details = {}
  let name = item.indexTPc
  let tumbNailSrc = ''
  let esName = ''
  let esDescription = ''
  let esType = ''
  let consTec = ''
  let gamma = ''
  let parts = {}
  let pinya = ''
  let pom = ''
  let folre = ''
  let manilles = ''
  let score = {}
  let Pointscar = 0
  let Pointsdes = 0
  let group = ''
  let subGroup = ''
  let metrics = {}
  let numCollCar = ''
  let numCollDes = ''
  let numCollIn = ''
  let hOld = {}
  let yearCasCar = ''
  let firstCollCar = ''
  let yearCasDes = ''
  let firstCollDes = ''
  let hNew = {}
  let imgScr = {}
  let src = ''
  let number = ''
  let vidScr = {}

  if (item.Cordenadas !== '') {
    let a = cord.substring(1, cord.length)
    a = a.split('F')
    posC = a[0]
    posF = a[1]
  } else {
    posC = ''
    posF = ''
  }
    // let gposF = item.indexgTpc
    // let gposC = item.indexgTpc
    // console.log(cord)
  position.itpc = tpc
  position.gitpc = gtpc
  position.posCol = posC
  position.posRow = posF
  position.gposCol = gposC
  position.gposRow = gposF
  details.name = item.Denominacio
  details.esName = item.DenominacioAlternativa
  details.tumbNailSrc = ''
  details.esName = item.Estructura
  details.esDescription = ''
  details.esType = item.Estype
  details.consTec = ''
  details.gamma = item.Gamma
  parts.pinya = ''
  parts.tronc = ''
  parts.pom = ''
  parts.folre = ''
  parts.manilles = ''
  score.Pointscar = item.Pointscar
  score.Pointsdes = item.Pointsdes
  score.group = ''
  score.subGroup = ''
  metrics.numCollDes = ''
  metrics.firstCollCar = ''
  metrics.numCollIn = ''
  hOld.yearCasCar = ''
  hOld.firstCollCar = ''
  hOld.yearCasDes = ''
  hOld.firstCollDes = ''
  hNew.yearCasCar = ''
  hNew.firstCollCar = ''
  hNew.yearCasDes = ''
  hNew.firstCollDes = ''
  imgScr.number = ''
  imgScr.name = ''
  imgScr.src = ''
  vidScr.number = ''
  vidScr.name = ''
  vidScr.src = ''

    // const { Nomenclatura } = keyName
  cleanData.push({ keyName, position, details, parts, score, metrics, hOld, hNew, imgScr, vidScr })
})
// console.log(cleanData)
cleanData = 'text/json;charset=utf-8,' + JSON.stringify(cleanData) // preparo la cleanData para ser adjuntada al link de exportación
    /**
     * @param {string} directorio de destino
     * @param {string} texto a escribir dentro del archivo
     * @param {function} manejador de funcion
     */
fs.writeFile('./humanTowers.json', cleanData, function (err) {
    // la funcion es la que maneja lo que sucede despues de termine el evento
  if (err) {
    return console.log(err)
  }
    // las funciones de javascript en nodejs son asincronicas
    // por lo tanto lo que se quiera hacer debe hacerse dentro de la funcion que maneja el evento
    // si uno declara una variable arriba de la funcion, la manipula dentro y la quiere usar
    // despues afuera, se corre el riezgo de que nunca se realice la manipulacion.
  console.log('The file was saved!')
})

// una forma mas orientada a objetos

class Utileria {

  constructor (fs) {
    this.fs = fs
  }

    /**
     * @param {string} archivo ruta relativa o absoluta del archivo a escribir
     * @param {string} contenido Contenido del archivo a escribir.
     * @param {function} funcion que maneja el evento al termino del mismo
     */
  escibir (archivo, contenido, handler) {
    this.fs.writeFile(archivo, contenido, handler)
  }

    /**
     * @param {string} archivo ruta relativa o absoluta del archivo a escribir
     * @param {function} funcion que maneja el evento al termino del mismo
     */
  leer (archivo, handler) {
    this.fs.readFile(archivo, 'utf8', handler)
  }
}

let utils = new Utileria(fs)
let archivo = './humanTowers.json'
let mensaje = cleanData
utils.escibir(archivo, mensaje, function (err) {
  if (err) {
    return console.log(err)
  }
  console.log('Archivo escrito correctamente!')
  utils.leer(archivo, function (err, data) {
    if (err) {
      return console.log(err)
    }
    console.log('Contenido: ', data)
  })
})
