const Castell = require('../../../models/Castell')

module.exports = (req, res) => {
  const { keyName } = req.body
  const castell = new Castell({ keyName })

  castell.save()
    .then(castell => {
      console.log('castell has been created succesfully')
      res.redirect('/castells')
    })
    .catch(err => res.status(500).json(err))
}
