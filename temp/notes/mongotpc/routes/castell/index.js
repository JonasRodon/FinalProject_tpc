const express = require('express')
const router = express.Router()

const getById = require('./handlers/getById')
const removeById = require('./handlers/removeById')
const updateById = require('./handlers/updateById')

router.get('/:itpc', getById)
router.delete('/:itpc', removeById)
router.put('/:itpc', updateById)

module.exports = router
