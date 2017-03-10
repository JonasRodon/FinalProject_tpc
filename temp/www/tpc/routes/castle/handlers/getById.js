const Castle = require('../../../models/Castle')

module.exports = (req, res) => {
  const { id } = req.params

  Castle.findById(id)
    .then(castle => res.json(castle))
    .catch(err => { throw err })
}
