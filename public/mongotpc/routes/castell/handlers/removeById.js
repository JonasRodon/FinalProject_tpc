const Castell = require('../../../models/Castell')

module.exports = (req, res) => {
  const { id } = req.params

  Castell.findByIdAndRemove(id)
    .then(castell => {
      console.log(`castells has been removed succesfully`)
      res.status(200).json(castell)
    })
    .catch(err => res.status(500).json(err))
}
