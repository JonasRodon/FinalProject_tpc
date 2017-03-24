const Castell = require('../../../models/Castell')
module.exports = (req, res) => {
  const { itpc } = req.params
        // Castell.find({'position.itpc': {$eq: itpc}})
        //   .then(castell => res.render('castell', { castell }))
        //   .catch(err => { throw err })

  Castell.find({ 'position.itpc': itpc })
        .then(castell => {
          console.log(castell[0].details)
          castell[0].details.gamma = tgamma(castell[0].details.gamma)
          return castell
        })
        .then(castell => {
          castell[0].parts.pinya = parts(castell[0].parts.pinya)
                // console.log(castell[0].parts.pinya)
          return castell
        })
        .then(castell => {
          castell[0].parts.tronc = parts(castell[0].parts.tronc)
                // console.log(castell[0].parts.tronc)
          return castell
        })
        .then(castell => {
          castell[0].parts.pom = parts(castell[0].parts.pom)
                // console.log(castell[0].parts.pom)
          return castell
        })
        .then(castell => {
          castell[0].parts.folre = parts(castell[0].parts.folre)
                // console.log(castell[0].parts.folre)
          return castell
        })
        .then(castell => {
          castell[0].parts.manilles = parts(castell[0].parts.manilles)
                // console.log(castell[0].parts.manilles)
          return castell
        })
        .then(castell => res.render('castell', { castell }))
        .catch(err => {
          throw err
        })
}

function tgamma (g) {
  g.toString()
  console.log(g)
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
      break
  }
  return result
}

function parts (p) {
  if (p !== 'null') {
    if (p === 1) {
      return p + 'casteller'
    } else if (p < 1 && p !== 'sense') {
      return p + 'castellers'
    }
  } else {
    return p
  }
}
