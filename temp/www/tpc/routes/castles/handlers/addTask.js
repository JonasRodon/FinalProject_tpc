const Castle = require('../../../models/Castle')

module.exports = (req, res) => {
  const { title } = req.body
  const castle = new Castle({ title })

  castle.save()
    .then(castle => {
      console.log('castle has been created succesfully')
      res.redirect('/castels')
    })
    .catch(err => res.status(500).json(err))
}
