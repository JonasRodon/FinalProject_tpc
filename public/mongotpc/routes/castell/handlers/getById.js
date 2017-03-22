const Castell = require('../../../models/Castell')
module.exports = (req, res) => {
  const { itpc } = req.params
  Castell.find({'position.itpc': {$eq: itpc}})
    .then(castell => res.render('castell', { castell }))
    .catch(err => { throw err })

  // Castell.findById(id)
  //   .then(castell => res.json(castell))
  //   .catch(err => { throw err })
}
