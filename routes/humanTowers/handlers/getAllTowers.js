const HumanTowers = require('../../../models/humanTowers')

module.exports = (req, res) => {
  HumanTowers.find()
    .then(towers => res.render('add-tower', { towers }))
    .catch(err => { throw err })
}

