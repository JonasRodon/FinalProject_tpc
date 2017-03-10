const Castle = require('../../../models/Castle')

module.exports = (req, res) => {
  Castle.find()
    .then(castles => res.render('castles', { castles }))
    .catch(err => { throw err })
}
