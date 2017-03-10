const Castle = require('../../../models/Castle')

module.exports = (req, res) => {
  const { id } = req.params

  Castle.findByIdAndRemove(id)
    .then(castle => {
      console.log(`castles has been removed succesfully`)
      res.status(200).json(castle)
    })
    .catch(err => res.status(500).json(err))
}
