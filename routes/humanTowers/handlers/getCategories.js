const HumanTowers = require('../../../models/humanTowers')

module.exports = (req, res) => {
  HumanTowers.find()
    .then(towers => res.render('myAcount', { towers }))
    .catch(err => { throw err })
}
