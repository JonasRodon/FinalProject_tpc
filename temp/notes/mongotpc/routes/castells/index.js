const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addCastell = require('./handlers/addCastell')

router.get('/', getAll)
router.post('/', addCastell)

module.exports = router

