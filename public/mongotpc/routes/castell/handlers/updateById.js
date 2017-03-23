const Castell = require('../../../models/Castell')

module.exports = (req, res) => {
  const { itpc } = req.params

  let { title, done } = req.body
  const updatedAt = Date.now()

  done = done === 'true' ? true : false

  Castell.findAndUpdate(itpc, { title, done, updatedAt })
    .then(castell => {
      console.log('castell has been updated succesfully')
      res.status(200).json(castell)
    })
    .catch(err => res.status(500).json(err))
}
