const Castle = require('../../../models/Castle')

module.exports = (req, res) => {
  const { id } = req.params

  let { title, done } = req.body
  const updatedAt = Date.now()

  done = done === 'true' ? true : false

  Castle.findByIdAndUpdate(id, { title, done, updatedAt })
    .then(castle => {
      console.log('castle has been updated succesfully')
      res.status(200).json(castle)
    })
    .catch(err => res.status(500).json(err))
}
