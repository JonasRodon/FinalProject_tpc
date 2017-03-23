const Castell = require('../../../models/Castell')

module.exports = (req, res) => {
  Castell.find({'position.itpc': {$ne: ''}})
    .then(castells => res.render('castells', { castells }))
    .catch(err => { throw err })
}
